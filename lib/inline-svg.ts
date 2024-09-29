import imageSize from "image-size";
import path from "path";
import {Processor, unified} from "unified";
import {Node, Parent} from "unist";
import {visit} from "unist-util-visit";
import {VFile} from "vfile";
import fs from "fs";
import parse from "rehype-parse";

interface ImageNode extends Node {
  type: "element";
  tagName: "img";
  properties: {
    src: string;
    height?: number;
    width?: number;
  };
}

function isImageNode(node: Node): node is ImageNode {
  const img = node as ImageNode;
  return (
    img.type === "element" &&
    img.tagName === "img" &&
    img.properties &&
    typeof img.properties.src === "string"
  );
}

function filterImageNode(node: ImageNode): boolean {
  return node.properties.src.startsWith("/") && node.properties.src.endsWith(".svg");
}

export interface SvgNode extends Node {
  type: "element";
  tagName: "svg";
  properties?: {
    [key: string]: string;
  };
}

export function isSvgNode(node: Node): node is SvgNode {
  let svg = node as SvgNode;
  return svg.type === "element" && svg.tagName === "svg";
}

async function imgToSvg(node: ImageNode): Promise<void> {
  return new Promise((resolve, reject) => {
    const filePath = path.join(process.cwd(), "public", node.properties.src);
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        // console.error(err);
        reject(err);
      }

      const processor = unified().use(parse, { fragment: true, space: "svg" });
      const rootNode = processor.parse(data) as Parent;

      let svgNode;

      // Find the <svg> child node
      for (let child of rootNode.children) {
        if (isSvgNode(child)) {
          svgNode = child;
        }
      }

      if (svgNode) {
        // Merge the <svg> properties with the <img> properties
        let properties = {
          ...svgNode.properties,
          ...node.properties,
        };

        // @ts-expect-error - Don't copy the "src" property
        delete properties.src;

        // Overwrite the <img> node with the <svg> node
        Object.assign(node, svgNode, {properties});

        resolve();
      }
    });
  });
}

export default function inlineSvg(this: Processor) {
  return async function transformer(tree: Node, file: VFile): Promise<Node> {
    const imgNodes: ImageNode[] = [];

    visit(tree, "element", (node) => {
      if (isImageNode(node) && filterImageNode(node)) {
        imgNodes.push(node);
      }
    });

    for (const node of imgNodes) {
      try {
        await imgToSvg(node);
      } catch {
        // fail silently
      }
    }

    return tree;
  };
}
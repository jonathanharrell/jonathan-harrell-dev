const fs = require("fs");
const path = require("path");

const lightToDarkColors = {
  "#fafafa": "#27272a",
  "#262626": "#f5f5f5",
  "#d4d4d4": "#525252",
  "#e6594c": "#e6594c",
};

const hexToCssVariables = {
  "#fafafa": "var(--illustration-background)",
  "#262626": "var(--illustration-black)",
  "#d4d4d4": "var(--illustration-gray)",
  "#e6594c": "var(--illustration-accent)",
};

const inputDir = path.join(__dirname, "../content/illustrations");
const darkOutputDir = path.join(
  __dirname,
  "../public/assets/dark-illustrations",
);
const dynamicOutputDir = path.join(__dirname, "../public/assets/illustrations");

// Ensure output directories exist
if (!fs.existsSync(darkOutputDir)) {
  fs.mkdirSync(darkOutputDir, { recursive: true });
}

if (!fs.existsSync(dynamicOutputDir)) {
  fs.mkdirSync(dynamicOutputDir, { recursive: true });
}

// Read all images from the input directory
fs.readdirSync(inputDir).forEach((file) => {
  const inputFile = path.join(inputDir, file);
  const darkOutputFile = path.join(darkOutputDir, file);
  const dynamicOutputFile = path.join(dynamicOutputDir, file);

  if (inputFile.endsWith(".svg")) {
    fs.readFile(inputFile, "utf-8", function (err, data) {
      if (err) throw err;

      let svgDarkContent = data;
      let svgDynamicContent = data;

      Object.keys(lightToDarkColors).forEach((hex) => {
        const cssVar = lightToDarkColors[hex];
        const regex = new RegExp(hex, "gi");
        svgDarkContent = svgDarkContent.replace(regex, cssVar);
      });

      svgDarkContent = svgDarkContent.replace(
        "<svg ",
        `<svg style="background-color: #27272a" `,
      );

      Object.keys(hexToCssVariables).forEach((hex) => {
        const cssVar = hexToCssVariables[hex];
        const regex = new RegExp(hex, "gi");
        svgDynamicContent = svgDynamicContent.replace(regex, cssVar);
      });

      fs.writeFile(darkOutputFile, svgDarkContent, "utf-8", function (err) {
        if (err) throw err;
      });

      fs.writeFile(
        dynamicOutputFile,
        svgDynamicContent,
        "utf-8",
        function (err) {
          if (err) throw err;
        },
      );
    });
  }
});

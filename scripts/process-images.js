const fs = require("fs");
const path = require("path");

const hexToCssVariables = {
  "#fafafa": "var(--illustration-background)",
  "#262626": "var(--illustration-black)",
  "#d4d4d4": "var(--illustration-gray)",
  "#e6594c": "var(--illustration-accent)",
};

const inputDir = path.join(__dirname, "../content/illustrations");
const outputDir = path.join(__dirname, "../public/assets/illustrations");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all images from the input directory
fs.readdirSync(inputDir).forEach((file) => {
  const inputFile = path.join(inputDir, file);
  const outputFile = path.join(outputDir, file);

  if (inputFile.endsWith(".svg")) {
    fs.readFile(inputFile, "utf-8", function (err, data) {
      if (err) throw err;

      let svgContent = data;

      Object.keys(hexToCssVariables).forEach((hex) => {
        const cssVar = hexToCssVariables[hex];
        const regex = new RegExp(hex, "gi");
        svgContent = svgContent.replace(regex, cssVar);
      });

      fs.writeFile(outputFile, svgContent, "utf-8", function (err) {
        if (err) throw err;
      });
    });
  }

  fs.copyFile(inputFile, outputFile, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Copied ${inputFile} to ${outputFile}`);
    }
  });
});

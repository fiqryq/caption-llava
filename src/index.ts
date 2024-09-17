import path from "path";
import fs from "fs";

import isImageFile from "./utils/is-image.js";
import processImage from "./utils/proccess-image.js";

const folderPath = process.argv[2];

if (!folderPath) {
  console.error("🔴 Please provide the path.");
  process.exit(1);
}

const Main = async () => {
  const folder = path.resolve(folderPath);

  if (!fs.existsSync(folder)) {
    console.error(`Error: Folder not found at path ${folder}`);
    process.exit(1);
  }

  try {
    const files = await fs.promises.readdir(folder);

    const imageFiles = files.filter(isImageFile);

    if (imageFiles.length === 0) {
      console.error("No image files found in the folder.");
      process.exit(1);
    }

    for (const file of imageFiles) {
      const imagePath = path.join(folder, file);
      await processImage(imagePath);
    }
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
  }
};

Main();

import path from "path";
import fs from "fs";
import isImageFile from "./utils/is-image.js";
import processImage from "./utils/proccess-image.js";
import dotenv from "dotenv";

dotenv.config();

const folderPath = process.argv[2];
const destinationPath = process.argv[3];

if (!folderPath || !destinationPath) {
  console.error(
    "🔴 Please provide both the source folder and the destination folder paths."
  );
  process.exit(1);
}

const Main = async () => {
  const folder = path.resolve(folderPath);
  const destination = path.resolve(destinationPath);

  if (!fs.existsSync(folder)) {
    console.error(`🔴 Source folder not found at path ${folder}`);
    process.exit(1);
  }

  if (!fs.existsSync(destination)) {
    console.error(`🔴 Destination folder not found at path ${destination}`);
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
      await processImage(imagePath, destination);
    }
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
  }
};

Main();

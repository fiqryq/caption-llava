import fetch from "node-fetch";
import ora from "ora";
import path from "path";
import fs from "fs";
import { T_Response } from "../type/response.js";
import getFilename from "./get-file-name.js";

const processImage = async (imagePath: string, destinationPath: string) => {
  const trimPath = getFilename(imagePath);
  const spinner = ora(`Processing image: ${trimPath}`).start();

  try {
    const imageFile = path.resolve(imagePath);
    const image = await fs.promises.readFile(imageFile);

    const body = {
      model: "llava:latest",
      role: "user",
      prompt: `Generate a concise and descriptive caption for this image. The caption should be human-readable and accurately describe the main subject of the image in a natural, engaging tone.`,
      stream: false,
      done: true,
      images: [image.toString("base64")],
    };

    const response = await fetch(`${process.env.LLAVA_API_URL}/api/generate`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as T_Response;

    const folderName = path.basename(imagePath, path.extname(imagePath));
    const generatedFolder = path.join(destinationPath, folderName);

    await fs.promises.mkdir(generatedFolder, { recursive: true });

    const newImagePath = path.join(generatedFolder, path.basename(imagePath));
    await fs.promises.copyFile(imagePath, newImagePath);

    const captionPath = path.join(generatedFolder, "caption.txt");
    await fs.promises.writeFile(captionPath, data.response.trim(), "utf-8");

    spinner.succeed(`Image ${trimPath} processed and saved successfully!`);
  } catch (err: any) {
    spinner.fail(`Error processing image: ${trimPath} - ${err.message}`);
  }
};

export default processImage;

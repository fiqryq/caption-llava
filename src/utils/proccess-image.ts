import fetch from "node-fetch";
import ora from "ora";
import path from "path";
import fs from "fs";
import { T_Response } from "../type/response.js";
import getLastTwoFolders from "./get-last-two-folder.js";

const processImage = async (imagePath: string) => {
  const trimPath = getLastTwoFolders(imagePath);
  const spinner = ora(`Processing image: ${trimPath}`).start();

  try {
    const imageFile = path.resolve(imagePath);

    const image = await fs.promises.readFile(imageFile);

    const body = {
      model: "llava-llama3:8b",
      prompt: `Generate a concise caption for the following image. The caption should be a plain text description of the scene, up to 200 characters, without any additional metadata or formatting. Here is the image:`,
      stream: false,
      format: "json",
      done: true,
      images: [image.toString("base64")],
    };

    // NOTE : change this latter : http://localhost:11434 is default port for my local dev.
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as T_Response;

    fs.writeFile(`${imagePath}.txt`, data.response, (err) => {
      console.log(err);
    });

    spinner.succeed(`Image ${trimPath} processed successfully!`);
  } catch (err: any) {
    spinner.fail(`Error processing image: ${trimPath} - ${err.message}`);
  }
};

export default processImage;

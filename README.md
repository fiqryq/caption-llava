
# 🖼️ Image Caption Generator ( Caption LLAVA)

This project allows you to generate image captions using the **LLaVA model** running on your local machine. It's **100% free** and **open source**, designed to help you quickly create captions for images with the ability to specify a tone of voice.

## ✨ Features

- **Free** and **open source**.
- Generate captions based on images using the **LLaVA model**.
- Specify the tone of the captions (e.g., professional, casual, humorous, etc.).
- Simple and intuitive command-line usage.

## ⚡️ Usage

To generate captions for your images, use the following command in your terminal:

```bash
caption [IMAGE_FOLDER] [DESTINATION_PATH] [TONE]
```
s
### Example:
```bash
caption ./my-image ./my-output professional
```

- **`[IMAGE_FOLDER]`**: The folder containing the images you want to generate captions for.
- **`[DESTINATION_PATH]`**: The folder where the generated captions will be saved.
- **`[TONE]`**: The tone of the caption, such as `professional`, `casual`, or `humorous`.

## 📥 Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:fiqryq/caption-llava.git
   ```
2. Navigate to the project directory:
   ```bash
   cd caption-llava
   ```
3. Install the required dependencies:
   ```bash
   npm install  # or yarn install # or pnpm install
   ```
4. Run the application:
   ```bash
   npm start  # or yarn start # or pnpm install
   ```

## 🛠️ Requirements

- Node.js installed on your machine.
- The **LLaVA model** configured locally.

## 📝 Notes

- Make sure the **LLaVA model** is properly set up and running on your machine before using the caption generator.
- The tone parameter is optional. If you don't specify a tone, it defaults to a general caption style.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request to improve the project.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

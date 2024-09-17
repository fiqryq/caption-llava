import path from "path";

const isImageFile = (fileName: string) => {
  const extensions = [".jpg", ".jpeg", ".png"];
  return extensions.includes(path.extname(fileName).toLowerCase());
};

export default isImageFile;

import path from "path";

const getFilename = (filePath: string): string => {
  const parts = filePath.split(path.sep);
  return parts.slice(-1).join(path.sep);
};

export default getFilename;

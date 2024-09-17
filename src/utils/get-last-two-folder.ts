import path from "path";

const getLastTwoFolders = (filePath: string): string => {
  const parts = filePath.split(path.sep);
  return parts.slice(-2).join(path.sep);
};

export default getLastTwoFolders;

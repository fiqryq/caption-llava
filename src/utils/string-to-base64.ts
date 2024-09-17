const StringToBase64 = (input: string): string => {
  return Buffer.from(input, "utf-8").toString("base64");
};
export default StringToBase64;

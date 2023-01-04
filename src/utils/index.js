export * from "./hooks";
export * from "./socket";

export const generateRandomSeconds = (min = 1, max = 5) => {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
};

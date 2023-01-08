export * from "./hooks";
export * from "./socket";

export const generateRandomSeconds = (min = 1, max = 5) => {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
};

export const getNumberWithSuffix = (number) => {
  const suffixes = { one: "st", two: "nd", few: "rd", other: "th" };
  const ordinalRules = new Intl.PluralRules("en", { type: "ordinal" }).select(
    number
  );

  return `${number}${suffixes[ordinalRules]}`;
};

export const getCompactNumber = (number) => {
  return new Intl.NumberFormat("en", {
    notation: "compact",
  }).format(number);
};

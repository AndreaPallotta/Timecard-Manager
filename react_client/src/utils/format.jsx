export const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/\s(.)/g, (match) => match.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, (match) => match.toLowerCase());
};

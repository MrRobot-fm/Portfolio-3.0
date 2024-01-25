export const toRem = (px: number, base = 10) => {
  return `${parseFloat(String((1 / base) * px).replace(/,/g, "."))}rem`;
};

export const PriceFormatter = (n) => {
  const num = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
  return num;
};

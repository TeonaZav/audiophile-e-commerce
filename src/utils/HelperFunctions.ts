export const PriceFormatter = (n: number) => {
  const num = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
  return num;
};

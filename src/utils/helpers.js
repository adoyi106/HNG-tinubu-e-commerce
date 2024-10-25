export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
    value
  );

export const capitalizeFirstLetter = (string) =>
  string.at(0).toUpperCase() + string.slice(1);
export const formatWeight = (value) => `${value}kg`;

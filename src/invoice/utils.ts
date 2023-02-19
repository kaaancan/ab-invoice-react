export function formatNumberToEuro(value: number) {
  return value.toFixed(2).replace(".", ",") + " €";
}

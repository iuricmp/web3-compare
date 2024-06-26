export function stringify(value: any) {
  return JSON.stringify(
    value,
    (key, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
  );
}

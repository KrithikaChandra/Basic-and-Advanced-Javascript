/** ES module: named exports + default (hands-on bonus) */
export const PI = Math.PI;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export default function formatPrice(n) {
  return `₹${n}`;
}

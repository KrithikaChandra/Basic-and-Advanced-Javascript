import cache from "./cache.js";

export function saveProduct(product) {
  cache.set(`product:${product.id}`, product);
}
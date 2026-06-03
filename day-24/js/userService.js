import cache from "./cache.js";

export function saveUser(user) {
  cache.set(`user:${user.id}`, user);
}
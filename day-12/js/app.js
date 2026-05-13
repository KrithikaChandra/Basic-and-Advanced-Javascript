import formatPrice, { PI, add, multiply } from "./mathUtils.js";

// Uses each export (values discarded). Expected results:
// PI                 -> ~3.141592653589793
// add(2, 3)          -> 5
// multiply(4, 5)     -> 20
// formatPrice(500)   -> "₹500"
void [PI, add(2, 3), multiply(4, 5), formatPrice(500)];

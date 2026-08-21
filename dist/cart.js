"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateCartTotal(products) {
    const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
    return totalPrice;
}
const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
console.log(calculateCartTotal(products2));
//# sourceMappingURL=cart.js.map
/*
Create a Product interface with title: string, price: number, inStock?: boolean. Create two product objects — one with inStock, one without. Write a function that logs a product's price.
Input: { title: "Laptop", price: 55000 } and { title: "Mouse", price: 500, inStock: true }
Output: 55000 and 500 printed by the function.
 */

interface Product {
    title:string,
    price:number,
    inStock?:boolean
}

function printPrice(product:Product) : number {
    const {title, price, inStock} = product;
    return price;
}

const laptop: Product = {
    title: "Laptop",
    price: 55000
};

const mouse: Product = {
    title: "Mouse",
    price: 500,
    inStock: true
};

console.log(printPrice(laptop));
console.log(printPrice(mouse));
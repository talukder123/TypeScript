interface Product {
    name:string
    price:number
}

function calculateCartTotal(products: Product[]):number {
    const totalPrice = products.reduce((acc, product) => acc + product.price, 0)
    return totalPrice
}


const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];

console.log(calculateCartTotal(products2))


/* Input:
name = "Laptop"
price = 45000
isAvailable = true

Output:
Laptop cost 45000 and is available: true
 */

let name:string = "Laptop"
let price:number = 45000
const isAvailable:boolean = true

function makeOutput(name:string, price:number, isAvail:boolean) : string {
    return `${name} cost ${price} and is available : ${isAvail}`
}

console.log(makeOutput(name, price, isAvailable));

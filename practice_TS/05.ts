

let firstArr: number[] = [1, 2, 3, 4, 5]
let secondArr: number[] = [6, 7, 8, 9, 10]

const margeArr = (a1:number[], a2:number[]) : number[] => {
    let newArr:number[] = [...a1, ...a2]

    return newArr
}

console.log(margeArr(firstArr, secondArr));

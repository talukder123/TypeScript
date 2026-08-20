const inventoryStatus = (count:number):string => {
    if (count === 0) {
        return "Out of Stock";
    } else if (count < 5) {
        return "Almost Sold Out";
    } else if (count < 20) {
        return "Available"
    } else {
        return "In Stock"
    }
}
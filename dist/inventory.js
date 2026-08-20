"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inventoryStatus = (count) => {
    if (count === 0) {
        return "Out of Stock";
    }
    else if (count < 5) {
        return "Almost Sold Out";
    }
    else if (count < 20) {
        return "Available";
    }
    else {
        return "In Stock";
    }
};
//# sourceMappingURL=inventory.js.map
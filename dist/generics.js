"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
useState("Hello");
useState(335);
console.log(useState({ name: "Talukder", isLoggedIn: false }));
//# sourceMappingURL=generics.js.map
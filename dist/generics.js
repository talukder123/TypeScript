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
useState({ name: "Talukder", isLoggedIn: false }); //-- type is user here
//# sourceMappingURL=generics.js.map
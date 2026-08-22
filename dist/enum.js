"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Organizer"] = 1] = "Organizer";
    Role[Role["Customer"] = 2] = "Customer";
})(Role || (Role = {}));
function checkRole(role) {
    if (role === Role.Admin) {
        console.log("Full access");
    }
    else if (role === Role.Organizer) {
        console.log("Manage events");
    }
    else {
        console.log("Book events");
    }
}
console.log(checkRole(Role.Admin));
console.log(checkRole(Role.Customer));
//# sourceMappingURL=enum.js.map
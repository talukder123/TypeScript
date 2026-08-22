enum Role {
    Admin,
    Organizer,
    Customer
}

function checkRole(role: Role): void {
    if (role === Role.Admin) {
        console.log("Full access");
    } else if (role === Role.Organizer) {
        console.log("Manage events");
    } else {
        console.log("Book events");
    }
}

console.log(checkRole(Role.Admin));
console.log(checkRole(Role.Customer));

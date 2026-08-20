
interface User {
    name: string
    age: number
    city: string
}

const socialMediaProfileFormatter = (user:User):string => {
    return `${user.name} is ${user.age} years old, and lives in ${user.city}`
}

console.log(socialMediaProfileFormatter(
    {
        name: "Talukder",
        age: 23,
        city: "Dhaka"
    }
));

type User = {
    name: string;
    age: number;
    email: string;
    skills: string[];
    active: boolean;
};

const user: User = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true
};

const detailsPrint = (user: User): void => {
    const { name, age, email, skills, active } = user;

    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
    console.log(`Skills: ${skills.join(", ")}`);
    console.log(`Active: ${active}`);
};

detailsPrint(user);
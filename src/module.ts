class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName, ...elements) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user =  new Student('Oleg', 'N.', 'Drapeza', 'awd');

document.body.innerHTML = greeter(user);

export default Student;
const square = num => num * num;

const squareLong = num => {
    return num * num;
};

console.log(square(5));

const people = [
    {
        name: 'Bdog',
        age: 45
    },
    {
        name: 'Beak',
        age: 72
    },
    {
        name: 'Molly',
        age: 5
    }
];

// const under30 = people.filter(person => person.age < 30);

// console.log(under30);

const person = people.find(person => person.age === 72);

console.log(person.name);

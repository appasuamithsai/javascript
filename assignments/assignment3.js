const printName = (firstName) =>"Hi " + firstName;


console.log(printName("Amith"));


const printBill = (name, bill) => `Hi ${name} please pay: ${bill} `;

console.log(printBill('Amith',1000));

const person = {
    name: "Noam Chomsky",
    age: 92
}
let {name,age}=person; //unpacking
console.log(name);
console.log(age);
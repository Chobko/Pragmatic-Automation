// Arrays 

let numbersArray: number[] = [1, 2, 3, 4]

let stringAndNumArr: (number | string)[] = ['Pesho', 'Gosho', 2, '3']

let fruits: string[] = ['Apple', 'Banana', 'Pear', 'Peach', 'Grape'];
let fruitsEl: string = fruits[1];
let secondEl: string = fruits[3];

fruits.push("Mango");

numbersArray.pop();


function greet(name: string): string {
    return 'Hello, ${name}!';  
}

greet("Alice")
console.log()
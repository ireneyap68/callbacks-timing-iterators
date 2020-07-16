function greeting(name, callback) {
    let sentence = 'Hello, my name is ' + name + ' ';

    let otherSentence = callback();

    return sentence + otherSentence;
}


function anotherGreeting() {
    let sentence = 'I forgot my last name';
    
    return sentence;
}

let myName = 'Irene';
console.log(greeting(myName, anotherGreeting));

// Exercise
function printArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i]; // 1, 2, ....

        console.log(number); // 1
    }

    callback(array);
}

function printArrayAgain(array) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i]; // 1, 2 ...

        console.log(number); // 1, 2 
    }
}

const numbersArray = [1,2,3,4,5,9,8,7,6];

printArray(numbersArray, printArrayAgain);

// Exercise 
function calculator(num1, num2, callbackOne, callbackTwo) {
    let result = callbackOne(num1, num2) + callbackTwo(num1, num2);
    // 82 + -72 = 10

    return result;
}

function addNumbers(num1, num2) {
    let result = num1 + num2;
    
    return result;

}

function subtractNumbers(num1, num2) {
    let result = num1 - num2;
    
    return result;
}

console.log(calculator(5,77, addNumbers, subtractNumbers));

//make a superHero function
// take in two callbacks
// return a string in each callback describing the superpower

function superHero(superPowerOne, superPowerTwo) {
    let allSuperPowers = superPowerOne() + ' and ' + superPowerTwo();

    return allSuperPowers;
}

function superSkills() {
    let power = "I'm having fire ball and flash blaze!";
    return power;
}

function superSpin() {
    let spin = 'I can spin 1000 mph';
    return spin;
}

console.log(superHero(superSkills, superSpin));

//Timing

function blastOff() {
    let num = 0;

    for (let i = 10; i >= num; i--) {
        console.log(i);  //10,9,8,7...
    }

    console.log("BLAST OFF!!!")
}

setTimeout(blastOff, 5000);

// make a function that prints your name
// setTimeOut and pass in function and a time (5000 -miliseconds)

function printName(name) {
    console.log(name);
}
let myNameTwo = 'Yap';
setTimeout(function(){
    printName(myNameTwo);
}, 5000);
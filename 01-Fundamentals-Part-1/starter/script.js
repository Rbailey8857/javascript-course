////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const markMass_2 = 95;
const johnMass_2 = 85;
const markHeight_2 = 1.88;
const johnHeight_2 = 1.76;
let markHigherBMI = false;

const calculateBMI = (mass, height) => {
    return (mass / (height ** 2));
}

const markBMI = calculateBMI(johnMass, johnHeight);
const johnBMI = calculateBMI(markMass, markHeight);

if (markBMI > johnBMI) { 
    markHigherBMI = true;
} else if (markBMI < johnBMI) {
    markHigherBMI = false;
} else {
    console.log('Error!')
}

const finalAnswer = () => {
    if (markHigherBMI === true) {
        return `Wow Marks BMI is ${markBMI} and is higher than Johns BMI by ${markBMI - johnBMI} BMI points`;
    } else if (markHigherBMI === false) {
        return `Wow John has a BMI of ${johnBMI}, his is higher than Marks by ${johnBMI - markBMI} BMI points`;
    } else {
        return null;
    }
}

console.log(finalAnswer());
console.log(Number('100'));

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

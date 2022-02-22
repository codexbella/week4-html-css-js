const konstante = 45;
let variable = 0;

const add = () => console.log(konstante+variable)
const multiply = (number1, number2) => console.log(number1*number2)

function factorial(number) {
    debugger
    if (number < 0)
        console.log(-1)
    else if (number === 0)
        console.log(1)
    else {
        let result = 1;
        for (let i = 0; i < number; i++) {
            result = result * (number - i);
        }
        console.log(result)
    }
}
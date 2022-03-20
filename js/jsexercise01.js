// window.alert("This is javascript");
// console.log("hello world")

// function add (number1,number2) {
//     return number1 + number2;
// }

// function multiply (number1,number2) {
//     let total = number1 * number2;
//     return total;
// }

// const add = (number1 , number2) => {
//     return parseInt(number1) + parseInt(number2);
// };

// const multiply = (number1,number2) => {
//     return parseInt(number1) * parseInt(number2);
// };

// const divided = (number1,number2) => {
//     return parseInt(number1) / parseInt(number2)
// };

// const addFrom = document.getElementById("add-form");
// const multiplyForm = document.getElementById("multiply-form")
// const dividedForm = document.getElementById("divided-form")

// const number1 = document.getElementById("number1");
// const number2 = document.getElementById("number2");

// const multiplynumber1 = document.getElementById("multiply-number1");
// const multiplynumber2 = document.getElementById("multiply-number2");

// const dividednumber1 = document.getElementById("divided-number1");
// const dividednumber2 = document.getElementById("divided-number2");

// addFrom.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const total = add(number1.value,number2.value);
//     let span = document.getElementById("add-result");
//     span.textContent = total;
// });

// multiplyForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const total = multiply(multiplynumber1.value, multiplynumber2.value);
//     let span = document.getElementById("multiply-result");
//     span.textContent = total;
// });

// dividedForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const total = divided(dividednumber1.value, dividednumber2.value);
//     let span = document.getElementById("divided-result");
//     span.textContent = total;
// });

// let x = 2;
// let y =2;
// let z = add(x,y);
// let zz = multiply(x,y);
// console.log(zz);


// function convert (x) {
//     return x * 60;
// };

// let y = convert(3);
// console.log(y);

// 1.()
// 2.* , /
// 3.+ , -

function triangle (base,height) {
    return (base * height) / 2
};

console.log(triangle(10,10));
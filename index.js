const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isFirstValue === false) {
            getFirstValue(atr);
        }
        if (isSecondValue === false) {
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el
    result.innerHTML = `
        <span>${firstValue}</span>
    `
    firstValue =+ firstValue;
    console.log(firstValue + " first");
}

function getSecondValue(el) {
    if (firstValue != "" && sign != "") {
        secondValue += el;
        result.innerHTML = `
        <span>${secondValue}</span>
    `
        secondValue = +secondValue;
        console.log(secondValue + " second");
    }
}



function getSign() {
    for (let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            console.log(sign + " sign");
            isFirstValue = true;
        })
    }
}
getSign();



equals.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+") {
        resultValue = firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if (sign === "x") {
        resultValue = firstValue * secondValue;
    } else if (sign === "/") {
        resultValue = firstValue / secondValue;
    }
    console.log(resultValue + " result");
    result.innerHTML = `
        <span>${resultValue}</span>
    `;
    firstValue = resultValue;
    console.log(firstValue + " first2");
    secondValue = "";
    console.log(secondValue + " second2");

    checkResultLength();
})


function checkResultLength() {
    resultValue = JSON.stringify(resultValue);
    console.log(JSON.stringify(resultValue) + " resultString");

    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        console.log(JSON.parse(resultValue) + " parse");
        result.innerHTML = `
            <span>${resultValue.toFixed(5)}</span>
        `
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    result.innerHTML =`
    <span>${resultValue}</span>
`
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    result.innerHTML =`
    <span>${resultValue}</span>
`
})

clear.addEventListener('click', () => {
    result.innerHTML = "";

 firstValue = "";
 isFirstValue = false;
 secondValue = "";
 isSecondValue = false;
 sign = "";
 resultValue = 0;

})
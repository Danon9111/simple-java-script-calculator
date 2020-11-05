const standardButton = document.querySelectorAll(`.standard-button`);
const display = document.querySelector(`.display-row`);
let result;
let tmp;
let operaiton;

standardButton[15].addEventListener('click', function () {
    tmp = tmp + standardButton[15].innerText;
    parseInt(tmp);
    display.innerHTML = tmp;
});

standardButton[13].addEventListener('click', function () {
    tmp = tmp + standardButton[13].innerText;
    parseInt(tmp);
    display.innerHTML = tmp;
});

standardButton[12].addEventListener('click', function () {
    tmp = tmp + standardButton[12].innerText;
    parseInt(tmp);
    display.innerHTML = tmp;
});

standardButton[11].addEventListener('click', function () {
    tmp = tmp + standardButton[11].innerText;
    parseInt(tmp);
    display.innerHTML = tmp;
});

standardButton[9].addEventListener('click', function () {
    tmp = tmp + standardButton[9].innerText;
    parseInt(tmp);
    display.innerHTML = tmp;
});

standardButton[8].addEventListener('click', function () {
    tmp = tmp + standardButton[8].innerText;
    parseInt(tmp);
    display.innerHTML = tmp;
});

standardButton[7].addEventListener('click', function () {
    tmp = tmp + standardButton[7].innerText;
    parseInt(tmp);
    display.innerHTML = tmp;
});

standardButton[5].addEventListener('click', function () {
    tmp = tmp + standardButton[5].innerText;
    parseInt(tmp);
    display.innerHTML = tmp;
});

standardButton[4].addEventListener('click', function () {
    tmp = tmp + standardButton[4].innerText;
    parseInt(tmp);
    display.innerHTML = tmp;
});

standardButton[3].addEventListener('click', function () {
    tmp = tmp + standardButton[3].innerText;
    parseInt(tmp);
    display.innerHTML = tmp;
});
//plus
standardButton[14].addEventListener('click', function () {
    operaiton = `+`;
    if (result === 0) {
        result = parseInt(tmp);
        tmp = 0;
    } else {
        result = parseInt(result) + parseInt(tmp);
        tmp = 0;
    }
    display.innerText = result;
});

//minus
standardButton[10].addEventListener('click', function () {
    operaiton = `-`;
    if (result === 0) {
        result = tmp;
        tmp = 0;
    } else {
        result = result - tmp;
        tmp = 0;
    }
    display.innerText = result;
});

//mnozenie
standardButton[6].addEventListener('click', function () {
    operaiton = `*`;
    if (result === 0) {
        result = tmp;
        tmp = 0;
    } else if (tmp === 0) {
        result = 1;
    } else {
        result = result * tmp;
        tmp = 0;
    }
    display.innerText = result;
});

//dzielenie
standardButton[2].addEventListener('click', function () {
    operaiton = `/`;
    if (result === 0) {
        result = tmp;
        tmp = 0;
    } else if (tmp === 0) {
        result = 'not a number';
    }
    else {
        result = result / tmp;
        tmp = 0;
    }
    display.innerText = result;
});

//równa się
standardButton[16].addEventListener('click', function () {
    if (operaiton === `+`) {
        result = parseInt(result) + parseInt(tmp);
        console.log(`${operaiton}`);
    } else if (operaiton === `-`) {
        result = result - tmp;
        console.log(`${operaiton}`);
    } else if (operaiton === `*`) {
        result = result * tmp;
        console.log(`${operaiton}`);
    } else  {
        result = result / tmp;
        console.log(`${operaiton}`);
    }
    display.innerText = result;
    tmp = 0;
});
//C
standardButton[0].addEventListener('click', function () {
    result = tmp = 0;
    display.innerText = tmp;
});
//backspace
standardButton[1].addEventListener('click', function () {
    tmp = 0;
    display.innerText = ``;
});

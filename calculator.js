const standardButton = document.querySelectorAll(".standard-button");
const display = document.querySelector(".display-row");
let result = 0;
let tmp;
display.innerHTML = result;

standardButton[15].addEventListener('click', function () {
    tmp = parseInt(standardButton[15].innerText);
    display.innerHTML = tmp;
});

standardButton[13].addEventListener('click', function () {
    tmp = parseInt(standardButton[13].innerText);
    display.innerHTML = tmp;
});

standardButton[12].addEventListener('click', function () {
    tmp = parseInt(standardButton[12].innerText);
    display.innerHTML = tmp;
});

standardButton[11].addEventListener('click', function () {
    tmp = parseInt(standardButton[11].innerText);
    display.innerHTML = tmp;
});

standardButton[9].addEventListener('click', function () {
    tmp = parseInt(standardButton[9].innerText);
    display.innerHTML = tmp;
});

standardButton[8].addEventListener('click', function () {
    tmp = parseInt(standardButton[8].innerText);
    display.innerHTML = tmp;
});

standardButton[7].addEventListener('click', function () {
    tmp = parseInt(standardButton[7].innerText);
    display.innerHTML = tmp;
});

standardButton[5].addEventListener('click', function () {
    tmp = parseInt(standardButton[5].innerText);
    display.innerHTML = tmp;
});

standardButton[4].addEventListener('click', function () {
    tmp = parseInt(standardButton[4].innerText);
    display.innerHTML = tmp;
});

standardButton[3].addEventListener('click', function () {
    tmp = parseInt(standardButton[3].innerText);
    display.innerHTML = tmp;
});
//plus
standardButton[14].addEventListener('click', function () {
    result = result + tmp;
    tmp = 0;
    display.innerText = result;
});

//minus
standardButton[10].addEventListener('click', function () {
    if (result === 0) {
        result = tmp;
    } else {
        result = result - tmp;
        tmp = 0;
    }
    display.innerText = result;
});

//równa się
standardButton[16].addEventListener('click', function () {
    result = result + tmp;
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

/*for (i = 0; i < 17; i++) {
  if (!isNaN(parseInt(`${standardButton[i].innerText}`))) {
    console.log(`${standardButton[i].innerText}`);
  } else console.log(tmp);
}
standardButton[4].addEventListener('click', function () {
    display.innerText = `${tmp[4]}`;
});
for (j = 0; j < standardButton.length; j++) {
    console.log(parseInt(tmp));
    standardButton[j].addEventListener("click", {
      handleEvent: function (event) {console.log(`${tmp}`);
          /*if (isNaN(parseInt(`${tmp[j]}`))) {
            console.log(`${tmp[j]}`);
            display.innerText = tmp[j];
        } else console.log(`tylek`);
        }});
    };
    */

const standardButton = document.querySelectorAll(".standard-button");
const display = document.querySelector(".display-row");
let result = 54;

for (i = 0; i < 17; i++) {
  if (!isNaN(parseInt(`${standardButton[i].innerText}`))) {
    console.log(`${standardButton[i].innerText}`);
  } else console.log(`tylek`);
}

for (i = 0; i < standardButton.length; i++) {
  standardButton[i].addEventListener("click", function () {
    if (!isNaN(parseInt(`${standardButton[i].innerText}`))) {
      console.log(`${standardButton[i].innerText}`);
      display.innerText = standardButton[i].innerText;
    } else console.log(`tylek`);
  });
}

display.innerHTML = result;

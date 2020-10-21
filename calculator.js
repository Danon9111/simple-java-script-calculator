const standardButton = document.querySelector('.standard-button');
const display = document.querySelector('.display-row');

standardButton.addEventListener('click', function() {
    let buttonValue = standardButton.textContent;
    if (standardButton.classList.contains('standard-button')) {
        console.log(`${buttonValue}`);
        display.innerHTML = `${buttonValue}`;
    }
});
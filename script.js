//variable define
let min = 1;
let max = 10;
let winnum = Math.floor(Math.random() * 10) + 1;
let guessLeft = 3;
const input = document.querySelector('#input_num');
const submit = document.querySelector('#submit');
const restart = document.querySelector('restart');
let message = document.querySelector('#message');
let left = document.querySelector('#left');



//addevenlistener
submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    if (isNaN(guess)) {
        showMsg(`Enter a valid number between ${min} to ${max}`, 'red');
    } else {
        guessLeft -= 1;
        if (guessLeft === 0) {
            showLeft(` Restart to play again!`, 'red');
            showMsg(`Game Over! ${winnum} was correct number`, 'orange');
            input.setAttribute('disabled', '');
            input.value = '';
        }
        else if (guess === winnum) {
            showLeft(`Game Over! Restart to play again!`, 'red');
            showMsg('You have won!', 'green');
            input.setAttribute('disabled', '');
            input.value = '';
        }
        else if (guess < winnum) {
            showLeft(`${guessLeft} guesses left`, 'blue');
            showMsg('Your number is too low!', 'red');
            input.value = '';
        }
        else if (guess > winnum) {
            showLeft(`${guessLeft} guesses left`, 'blue');
            showMsg('Your number is too high!', 'red');
            input.value = '';
        }
    }
})

function showMsg(text, color) {
    message.textContent = text;
    message.style.color = color;
}

function showLeft(text, color) {
    left.textContent = text;
    left.style.color = color;
}
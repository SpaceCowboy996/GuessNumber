let n = Math.floor(Math.random() * 10 + 1);
let guess = 1;

document.getElementById('subguess').onclick = function () {
    let x = document.getElementById('guessNum').value;
    if ( x == n) {
        alert('შენ სწორად გამოიცანი რიცხვი!');
    } else if (x > n) {
        guess++;
        alert('უფრო დაბალი')
    } else {
        guess++;
        alert('უფრო მაღალი')
    }
}
const square = document.getElementById('square');

square.addEventListener('click', () => {
    const color = square.style.backgroundColor;

    if (color === 'blue') {
        square.style.backgroundColor = 'green';
    } else if (color === 'green') {
        square.style.backgroundColor = 'red';
    } else {
        square.style.backgroundColor = 'blue';
    }
});
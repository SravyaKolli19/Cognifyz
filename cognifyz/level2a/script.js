document.getElementById('button').addEventListener('click', function() {
    var button = document.getElementById('button');
    if (button.style.backgroundColor === 'red') {
        button.style.backgroundColor = 'yellow';
    } else {
        button.style.backgroundColor = 'red';
    }
});

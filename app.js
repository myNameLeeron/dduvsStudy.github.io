// app.js
document.getElementById('search').addEventListener('input', function(e) {
    console.log('Поиск: ' + e.target.value);
});

document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('menu').style.width = '250px';
});

document.querySelector('.closeBtn').addEventListener('click', function() {
    document.getElementById('menu').style.width = '0';
});

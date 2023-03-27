fetch('/sidebar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('bar').innerHTML = data;
});

fetch('/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footers').innerHTML = data;
});
function init() {
    let img = document.getElementById('echcon');
    img.style.position = 'relative';
    img.style.left = '0px';
}
function MoveRight() {
    let img = document.getElementById('echcon');
    img.style.left=parseInt(img.style.left) + 20 + 'px';
}
function MoveLeft() {
    let img = document.getElementById('echcon');
    img.style.left=parseInt(img.style.left) - 20 + 'px';
}
window.onload = init;
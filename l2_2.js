var buttons = []
counter = 1;

document.onclick = function(e) {
    let button = document.createElement('button');
    buttons.push(button)
    button.style.position = 'fixed';
    button.style.left = e.pageX + 'px';
    button.style.top = e.pageY + 'px';
    button.innerHTML = counter;
    counter++;

    document.body.appendChild(button);
};
document.oncontextmenu = function(e) {
    buttons.forEach(function(button){
        document.body.removeChild(button);
    })
    buttons = []
}
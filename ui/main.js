console.log('Loaded!');

//changes to main
var element= document.getElementById("main-text");
element.innerHTML= 'New value';

//make th eimage to move
var img= document.getElementById("madi");
var marginLeft=0;

function moveRight() {
    marginLeft= marginLeft+ 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval (moveRight, 10);
   // img.style.marginLeft = '100px';
}
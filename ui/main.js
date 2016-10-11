console.log('Loaded!');

//changes to main
var element= document.getElementById("main-text");
element.innerHTML= 'New value';

//make th eimage to move
var img= document.getElementById("madi");
img.onclick = function () {
    img.style.marginLeft = '100px';
}
console.log('Loaded!');

//changes to main
//var element= document.getElementById("main-text");
//element.innerHTML= 'New value';

//make th eimage to move
//var img= document.getElementById("madi");
//var marginLeft=0;

//function moveRight() {
    //marginLeft= marginLeft+ 1;
    //img.style.marginLeft = marginLeft + 'px';
//}
//img.onclick = function () {
    //var interval = setInterval (moveRight, 10);
   // img.style.marginLeft = '100px';
//}

//button click me action
var button= document.getElementById("counter");
var counter=0;

button.onclick = function () {
  //make request to counter end point
  
  
  //capture the response and store it a variable
  
  
  //render the variable in correct span
  counter =counter+1;
 // var span= document.getElementById("count");
  span.innerHTML= counter.toString();
};
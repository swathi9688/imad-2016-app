console.log('Loaded!');


//button click me action
var button= document.getElementById("counter");

button.onclick = function () {
  //create a request object
  var request=new XMLHttpRequest();
  
  //capture the response and store it a variable
  request.onreadystatechange = function() {
      if(request.readystate === XMLHttpRequest.DONE) {
          // take an action
          if(request.status === 200){
              var counter = request.responseText;
              var span= document.getElementById("count");
              span.innerHTML= counter.toString();
          }
      }
      //no action taken
  };
    //make a request
    request.open("GET","http://swathi9688.imad.hasura-app.io/counter",true);
    request.send(null);
};
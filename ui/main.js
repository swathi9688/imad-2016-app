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
    request.open('GET',"http://swathi9688.imad.hasura-app.io/counter",true);
    request.send(null);
};


//submit name
var nameInput=document.getElementById("name");
var name=nameInput.value;
var submit=document.getElementById("submit_btn");

submit.onclick = function() {
    //make a request to the server
      var request=new XMLHttpRequest();
  
  //capture the response and store it a variable
  request.onreadystatechange = function() {
      if(request.readystate === XMLHttpRequest.DONE) {
          // take an action
          if(request.status === 200){
               var names = request.responseText;
                var list = ' ';
                for (var i=0; i<names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul=document.getElementById("namelist");
                 ul.innerHTML = list;
          }
      }
      //no action taken
  };
    //make a request
    request.open('GET',"http://swathi9688.imad.hasura-app.io/sumit-name = " + name,true);
    request.send(null);
    //capture a list of name and render a list
  
    
};
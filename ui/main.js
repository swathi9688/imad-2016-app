

//button click me action
var button= document.getElementById("counter");


button.onclick = function () {
  //create a request object
 var request = new XMLHttpRequest();
  
  //capture the response and store it a variable
  request.onreadystatechange = function () {
    if(request.readystate === XMLHttpRequest.DONE)  {
        // take some action
        if(request.status === 200) {
            var counter = request.responsetext;
             var span= document.getElementById("count");
             span.innerHTML= counter.toString();
        }
    }
    //no action
  };
  //Make a Request
  
    request.open('GET',"https://swathi9688.imad.hasura-app.io/counter",true);
    request.send(null);
};
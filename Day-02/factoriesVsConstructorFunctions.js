function getSpinner(){
   var count = 0;
   return {
       up : function(){ return ++count; },
     down : function(){ return --count; }
   };
}

//getSpinner is inovked as a regular function
var spinner = getSpinner();



function Spinner(){
   var count = 0;
   this.up = function(){ return ++count; };
   this.down = function(){ return --count; };
}

//Spinner is invoked like a class
var spinner = new Spinner()

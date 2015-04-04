//Sync
function addSync(x,y){
    console.log("returning result");
   return x + y;
}

function usingAddSync(x,y){
    console.log("invoking add");
    var result = addSync(x,y);
    console.log("result = ", result);
}

//Async
function addAsync(x,y, onResult){
    setTimeout(function(){
        console.log("returning result");
        var result = x + y;
        if (typeof onResult === "function")
            onResult(result);
    },5000);
}

function usingAddAsync(x,y){
    console.log("invoking add");
    addAsync(x,y, function(result){
        console.log("result = ", result);
    });
}

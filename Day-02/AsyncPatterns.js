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

//Async - Using callbacks
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

//Async - using events
function getAdder(){
    var handlers = [];

    function triggerResult(result){
        handlers.forEach(function(handler){
            handler(result);
        });
    }

    return {
        add : function(x,y){
            setTimeout(function(){
                console.log("returning result");
                var result = x + y;
                triggerResult(result);
            },5000);
        },
        addSubscriber : function(subscriptionFn){
            handlers.push(subscriptionFn);
        }
    }

}

//using add(events)
var adder = getAdder();
adder.add(100,200);
adder.addSubscriber(function(result){
        console.log("result = ", result);
    });


//Async - Promises
function addAsyncUsingPromise(x,y){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("returning result");
            var result = x + y;
            resolve(result);
        },5000);
    });
    return p;
}



















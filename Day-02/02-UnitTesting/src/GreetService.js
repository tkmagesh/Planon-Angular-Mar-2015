function GreetService(timeService){
    this.greetMsg = '';
    this.greet = function(name){
        var dateTime = timeService.getCurrent();
        if (dateTime.getHours() < 12) {
            this.greetMsg = 'Hi ' + name + ", Good Morning!";
        } else {
            this.greetMsg = 'Hi ' + name + ", Good Evening!";
        }
    }
}

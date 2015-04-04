describe("Greet Service", function(){

    it("Should obtain the current time from timeService", function(){

        //var timeService = jasmine.createSpyObj("timeService",["getCurrent"]);
        var timeService = {
            getCurrent : function(){}
        };
        spyOn(timeService, "getCurrent").and.returnValue(new Date("10-Mar-2015 9:00:00 AM"));
        var greetService = new GreetService(timeService);

        greetService.greet("Magesh");
        expect(timeService.getCurrent).toHaveBeenCalled();

    });

    it("Should greet with 'Good Morning' before 12", function(){

        //var timeService = jasmine.createSpyObj("timeService",["getCurrent"]);
        var timeService = {
            getCurrent : function(){}
        };
        spyOn(timeService, "getCurrent").and.returnValue(new Date("10-Mar-2015 9:00:00 AM"));
        var greetService = new GreetService(timeService);

        greetService.greet("Magesh");
        expect(greetService.greetMsg).toBe("Hi Magesh, Good Morning!");
    });
    /*it("Should greet with 'Good Evening' after 12", function(){

    });*/
})

define(["core/Emitter"], function(Emitter){
    "use strict";

    describe("test of Emitter class", function(){
        let emitter, ret;

        beforeEach(function() {
            emitter = new Emitter();
            emitter.on("say something", function(name){
                ret = "hello "+ name;
            });
            emitter.once("say once", function(name){
                ret = "hello "+ name;
            });
        });

        it("test has method on", function(){
            expect(typeof emitter.on).toBe("function");
        });

        it("test emit", function(){
            emitter.emit("say something", "world");
            expect(ret).toBe("hello world");
        });

        it("test error event", function(){
            try {
                emitter.emit("error", "error msg");
            }catch(e){console.log(e);}
        });

        it("test once", function(){
            emitter.emit("say once", "cqb");
            expect(ret).toBe("hello cqb");
            ret = "";
            emitter.emit("say once", "cqb");
            expect(ret).toBe("");
        });
    });

    describe("test Emitter's sub Class ", function(){
        class SubClass extends Emitter{

        }

        let sub = new SubClass();
        let ret;
        sub.on("sum", (a,b)=> ret = a+b);

        it("test sum event", function(){
            sub.emit("sum", 1,2);
            expect(ret).toBe(3);
        });
    });

    describe("test removeListeners ", function(){
        let emitter, ret;

        beforeEach(function() {
            emitter = new Emitter();
            emitter.on("say something", function(name){
                ret = "hello "+ name;
            });
        });

        it("test remove", function(){
            emitter.removeAllListeners();
            expect(emitter.listeners().length).toBe(0);
        });
    });
});

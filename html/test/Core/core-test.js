
define(["Core"], function(Core){
    "use strict";

    let x;
    let def = "";
    let fun = function(){};
    let emptyStr = null;
    let obj = {};
    let array = [];
    let num = 1;
    let numStr = "1.1";

    describe("test of Core class", function(){
        it("test x isUndefined ", function(){
            expect(true).toEqual(Core.isUndefined(x));
        });

        it("test def isDefined", function(){
            expect(true).toEqual(Core.isDefined(def));
        });

        it("test fun isFunction", function(){
            expect(true).toEqual(Core.isFunction(fun));
        });


        it("test emptyStr isNull", function(){
            expect(true).toEqual(Core.isNull(emptyStr));
        });

        it("test space str is Not Null", function(){
            expect(false).toEqual(Core.isNull(def));
        });

        it("test obj isObject", function(){
            expect(true).toEqual(Core.isObject(obj));
        });

        it("test array is Not Object", function(){
            expect(false).toEqual(Core.isObject(array));
        });

        it("test array is Array", function(){
            expect(true).toEqual(Core.isArray(array));
        });

        it("test num is Number", function(){
            expect(true).toEqual(Core.isNumber(num));
        });

        it("test numStr is Not Number", function(){
            expect(false).toEqual(Core.isNumber(numStr));
        });

        it("test numStr is String", function(){
            expect(true).toEqual(Core.isString(numStr));
        });
    });
});
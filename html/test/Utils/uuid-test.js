define(["utils/UUID","Core"], function(UUID,Core){
    "use strict";

    describe("test of UUID class", function(){
        console.log(UUID.v4());
        it("test", function(){
            expect(true).toEqual(Core.isFunction(UUID.v4));
        });
    });
});
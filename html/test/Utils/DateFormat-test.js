define(["utils/DateFormat"], function(DateFormat){
    "use strict";

    describe("test of DateFormat class", function(){
        let date1;

        beforeEach(function() {
            date1 = new Date('2016-03-25');
            console.log(date1);
        });

        it("format by pattern yyyy-MM-dd", function(){
            expect(DateFormat(date1, 'yyyy-MM-dd')).toBe('2016-03-25');
        });

        it("format by pattern yyyy-MM-dd hh:mm:ss", function(){
            expect(DateFormat(date1, 'yyyy-MM-dd hh:mm:ss')).not.toBe('2016-03-25 00:00:00');
        });
    });
});
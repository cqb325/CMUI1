define(["core/BaseComponent", "react"], function(BaseComponent, React){
    "use strict";

    describe("test of BaseComponent class", function(){
        //let bc = new BaseComponent();
        //bc.on("show", function(){
        //    console.log("show");
        //    return true;
        //});
        //bc.on("shown", function(){
        //    console.log("shown");
        //});
        //
        //bc.show();

        let div = document.createElement("div");
        document.body.appendChild(div);

        let bcEle = React.createElement(BaseComponent, {className: "testClsName", width: "100%", theme: "smooth"});
        let ele = React.render(bcEle, div);
        //ele.on("beforeShow", function(){
        //    console.log("beforeShow");
        //    return true;
        //});
        //
        //ele.show();

        it("test BaseComponent's props", function(){
            expect(ele instanceof BaseComponent).toBe(true);
            expect(ele.width).toBe("100%");
            expect(ele.props).toEqual({className: "testClsName", width: "100%", theme: "smooth"});
            expect(ele.state.theme).toBe("smooth");
            expect(ele.getTheme()).toBe("smooth");

            expect(ele.state.visibility).toBe(true);
            ele.hide();
            expect(ele.state.visibility).toBe(false);
        });
    });
});
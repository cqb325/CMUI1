module.exports = {

    componentDidUpdate: function () {
        for(let key in this.refs){
            let ref = this.refs[key];
            if(ref.refs && ref.props["data-toggle"] == "dialog"){
                let listener = ()=>{
                    let target = ref.props["data-target"];
                    let targetRef = this.refs[target];
                    if(targetRef && targetRef.open){
                        targetRef.open();
                        if(ref.props["data-data"]){
                            targetRef.setData(ref.props["data-data"]);
                        }
                        return ;
                    }
                };
                if(!ref.__islistened) {
                    ref.__islistened = true;
                    //ref.un("click", listener);
                    ref.on("click", listener);
                }
            }
        }
    }
};
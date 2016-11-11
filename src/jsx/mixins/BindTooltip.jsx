module.exports = {

    componentDidMount: function () {
        for(let key in this.refs){
            let ref = this.refs[key];
            if(ref.refs && ref.props["data-toggle"] == "tooltip"){
                if(!ref.__islistened) {
                    ref.__islistened = true;
                    let target = ref.props["data-target"];
                    let targetRef = this.refs[target];
                    if(ref.bind) {
                        ref.bind(targetRef);
                    }
                }
            }
        }
    }
};
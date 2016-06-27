module.exports = function(obj, props){
    let ret = {};
    if(obj){
        for(let key in obj){
            let find = false;
            for(let i in props){
                if(props[i] == key){
                    find = true;
                }
            }

            if(!find && obj.hasOwnProperty(key)){
                ret[key] = obj[key];
            }
        }
    }

    return ret;
};
/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
define(["module","./Emitter"],function(a,b){"use strict";function c(){}function d(a){var b={}.toString.call(a);switch(b){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function e(){if(p.XMLHttpRequest&&("file:"!=p.location.protocol||!p.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(a){}return!1}function f(a){return a===Object(a)}function g(a){if(!f(a))return a;var b=[];for(var c in a)null!=a[c]&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")}function h(a){for(var b,c,d={},e=a.split("&"),f=0,g=e.length;f<g;++f)c=e[f],b=c.split("="),d[decodeURIComponent(b[0])]=decodeURIComponent(b[1]);return d}function i(a){var b,c,d,e,f=a.split(/\r?\n/),g={};f.pop();for(var h=0,i=f.length;h<i;++h)c=f[h],b=c.indexOf(":"),d=c.slice(0,b).toLowerCase(),e=q(c.slice(b+1)),g[d]=e;return g}function j(a){return a.split(/ *; */).shift()}function k(a){return o(a.split(/ *; */),function(a,b){var c=b.split(/ *= */),d=c.shift(),e=c.shift();return d&&e&&(a[d]=e),a},{})}function l(a,b){b=b||{},this.req=a,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method?this.xhr.responseText:null,this.setStatusProperties(this.xhr.status),this.header=this.headers=i(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text):null}function m(a,b){var c=this;this._query=this._query||[],this.method=a,this.url=b,this.header={},this._header={},this.on("end",function(){var a=null,b=null;try{b=new l(c)}catch(b){a=new Error("Parser is unable to parse the response"),a.parse=!0,a.original=b}b&&c.emit("response",b),c.callback(a,b)})}function n(a,b){return"function"==typeof b?new m("GET",a).end(b):1==arguments.length?new m("GET",a):new m(a,b)}var o=function(a,b,c){for(var d=0,e=a.length,f=3==arguments.length?c:a[d++];d<e;)f=b.call(null,f,a[d],++d,a);return f},p="undefined"==typeof window?void 0:window,q="".trim?function(a){return a.trim()}:function(a){return a.replace(/(^\s*|\s*$)/g,"")};n.serializeObject=g,n.parseString=h,n.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},n.serialize={"application/x-www-form-urlencoded":g,"application/json":JSON.stringify},n.parse={"application/x-www-form-urlencoded":h,"application/json":JSON.parse},l.prototype.get=function(a){return this.header[a.toLowerCase()]},l.prototype.setHeaderProperties=function(a){var b=this.header["content-type"]||"";this.type=j(b);var c=k(b);for(var d in c)this[d]=c[d]},l.prototype.parseBody=function(a){var b=n.parse[this.type];return b&&a&&a.length?b(a):null},l.prototype.setStatusProperties=function(a){var b=a/100|0;this.status=a,this.statusType=b,this.info=1==b,this.ok=2==b,this.clientError=4==b,this.serverError=5==b,this.error=(4==b||5==b)&&this.toError(),this.accepted=202==a,this.noContent=204==a||1223==a,this.badRequest=400==a,this.unauthorized=401==a,this.notAcceptable=406==a,this.notFound=404==a,this.forbidden=403==a},l.prototype.toError=function(){var a=this.req,b=a.method,c=a.url,d="cannot "+b+" "+c+" ("+this.status+")",e=new Error(d);return e.status=this.status,e.method=b,e.url=c,e},n.Response=l,b.inherits(m),m.prototype.use=function(a){return a(this),this},m.prototype.timeout=function(a){return this._timeout=a,this},m.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},m.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this},m.prototype.set=function(a,b){if(f(a)){for(var c in a)this.set(c,a[c]);return this}return this._header[a.toLowerCase()]=b,this.header[a]=b,this},m.prototype.unset=function(a){return delete this._header[a.toLowerCase()],delete this.header[a],this},m.prototype.getHeader=function(a){return this._header[a.toLowerCase()]},m.prototype.type=function(a){return this.set("Content-Type",n.types[a]||a),this},m.prototype.accept=function(a){return this.set("Accept",n.types[a]||a),this},m.prototype.auth=function(a,b){var c=btoa(a+":"+b);return this.set("Authorization","Basic "+c),this},m.prototype.query=function(a){return"string"!=typeof a&&(a=g(a)),a&&this._query.push(a),this},m.prototype.field=function(a,b){return this._formData||(this._formData=new p.FormData),this._formData.append(a,b),this},m.prototype.attach=function(a,b,c){return this._formData||(this._formData=new p.FormData),this._formData.append(a,b,c),this},m.prototype.send=function(a){var b=f(a),c=this.getHeader("Content-Type");if(b&&f(this._data))for(var d in a)this._data[d]=a[d];else"string"==typeof a?(c||this.type("form"),c=this.getHeader("Content-Type"),"application/x-www-form-urlencoded"==c?this._data=this._data?this._data+"&"+a:a:this._data=(this._data||"")+a):this._data=a;return b?(c||this.type("json"),this):this},m.prototype.callback=function(a,b){var c=this._callback;this.clearTimeout(),c(a,b)},m.prototype.crossDomainError=function(){var a=new Error("Origin is not allowed by Access-Control-Allow-Origin");a.crossDomain=!0,this.callback(a)},m.prototype.timeoutError=function(){var a=this._timeout,b=new Error("timeout of "+a+"ms exceeded");b.timeout=a,this.callback(b)},m.prototype.withCredentials=function(){return this._withCredentials=!0,this},m.prototype.end=function(a){var b=this,f=this.xhr=e(),g=this._query.join("&"),h=this._timeout,i=this._formData||this._data;this._callback=a||c,f.onreadystatechange=function(){if(4==f.readyState){var a;try{a=f.status}catch(b){a=0}return 0==a?b.aborted?b.timeoutError():b.crossDomainError():void b.emit("end")}};try{f.upload&&(f.upload.onprogress=function(a){a.percent=a.loaded/a.total*100,b.emit("progress",a)})}catch(a){}if(h&&!this._timer&&(this._timer=setTimeout(function(){b.abort()},h)),g&&(g=n.serializeObject(g),this.url+=~this.url.indexOf("?")?"&"+g:"?"+g),f.open(this.method,this.url,!0),this._withCredentials&&(f.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof i&&!d(i)){var j=n.serialize[this.getHeader("Content-Type")];j&&(i=j(i))}for(var k in this.header)null!=this.header[k]&&f.setRequestHeader(k,this.header[k]);return this.emit("request",this),f.send(i),this},n.Request=m,n.get=function(a,b,c){var d=n("GET",a);return"function"==typeof b&&(c=b,b=null),b&&d.query(b),c&&d.end(c),d},n.head=function(a,b,c){var d=n("HEAD",a);return"function"==typeof b&&(c=b,b=null),b&&d.send(b),c&&d.end(c),d},n.del=function(a,b){var c=n("DELETE",a);return b&&c.end(b),c},n.patch=function(a,b,c){var d=n("PATCH",a);return"function"==typeof b&&(c=b,b=null),b&&d.send(b),c&&d.end(c),d},n.post=function(a,b,c){var d=n("POST",a);return"function"==typeof b&&(c=b,b=null),b&&d.send(b),c&&d.end(c),d},n.put=function(a,b,c){var d=n("PUT",a);return"function"==typeof b&&(c=b,b=null),b&&d.send(b),c&&d.end(c),d},a.exports=n});
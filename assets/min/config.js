/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */
!function(){if(!window.console){var a=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];window.console={};for(var b=0;b<a.length;++b)window.console[a[b]]=function(){}}for(var c=document.getElementsByTagName("script"),d=null,b=0,e=c.length;b<e;b++){var f=c[b],g=f.getAttribute("src");if(g&&g.indexOf("require.js")>-1){d=g.replace("/require.js","");break}}requirejs.dir=d,requirejs.config({baseUrl:d+"/../dist",paths:{jquery:"../lib/jquery-1.11.3.min","react-dom":"../lib/react-dom",react:"../lib/react-with-addons",classnames:"../lib/classnames",moment:"../lib/moment",velocity:"../lib/velocity.min",store:"../lib/store.min",WebUploader:"../lib/webuploader",css:"../lib/css.min"},shim:{}})}(window);
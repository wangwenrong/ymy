function on(el,type,fn){
    if(el.addEventListener){//标准浏览器
        el.addEventListener(el,type,fn)
    }else{//IE浏览器
        if(!e['event'+type]){
            e['event'+type]=[];
            el.attachEvent('on'+type,function(){
                run.call(el);
            })
        };
        var arr = el['event'+type];
        for(var i =0;i<arr.length;i++){
            if(arr[i]===fn) return;
        };
        arr.push(fn);
    };
};
function run(){
    var e=window.event;
    e.target=e.srcElement;
    e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+e.clientX;
    e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+e.clientY;
    e.preventDefault=function(){
        e.returnValue=false;
    };
    e.stopPropagation=function(){
        e.cancelable=true;
    }
    var arr = this['event'+type];
    if(arr.length){
        for(var i =0;i<arr.length;i++){
            if(typeof arr[i]==='function'){
                arr.call(this,e);
            }else{
                arr.splice(i,1);
                i--;
            }
        }
    }
};
function off(el,type,fn){
    if (el.removeEventListener){
        el.removeEventListener(type,fn,false);
    }else{
        var arr=el['event'+type];
        if(arr.length){
            for(var i =0;i.length;i++){
                if(arr[i]===fn){
                    arr[i]=null;
                    break;
                }
            }
        }
    }
 
}

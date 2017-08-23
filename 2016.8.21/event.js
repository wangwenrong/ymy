//绑定事件
//el给谁绑定，type绑定什么行为，fn要做什么事
function on(el,type,fn) {
    //判断浏览器
    if(el.addEventListener){//标准浏览器
        el.addEventListener(type,fn,false);
    }else{//IE浏览器
        //创建自己的时间池
        if(!el['event'+type]){
            el['event'+type]=[];
            el.attachEvent('on'+type,function(){
                run.call(el);//call是用来改变this指向的
            });//系统事件池；
        };
        var cur=el['event'+type];
        //自己事件池，去重，并添加
        for(var i=0;i<cur.length;i++){
            if(cur[i]===fn) return;//阻断程序继续执行
        };
        cur.push(fn);
    }
}
//循环调用自己事件池的所有方法进行循环调用
function run(){
    //兼容处理
    var e=window.event;
    e.target=e.srcElement;
    e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+e.clientX;
    e.pageY=(document.documentElement.scrollTop||document.body.scrollLeft)+e.clientY;
    e.preventDefault=function(){
        e.returnValue=false;
    }
    e.stopPropagation=function(){
        e.cancelBubble=true;
    }
    var arr=this['event'+e.type];
    if(arr.length){
        for(var i=0;i<arr.length;i++){
            if(typeof arr[i]==='function'){
                arr[i].call(this,e);
            }else{
                arr.splice(i,1);
                i--;//防止数据塌陷
            }
        }
    }
}
//拿到自己事件池数组，比对谁等于fn，就将其赋值为null
function off(el,type,fn) {
    if(el.removeEventListener){//标准浏览器
        el.removeEventListener(type,fn,false);
    }else{//IE浏览器
        var arr=el['event'+type];
        if(arr.length){
            for(var i=0; i<arr.length; i++){
                if(arr[i]===fn){;
                    arr[i]=null;
                    break;//打断循环
                }
            }
        }
    }
}
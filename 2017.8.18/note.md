#事件
##事件对象兼容问题处理
+ e=e||window.event
+ e.target=e.target||e.srcElement 事件源
+ e.keyCode 键值
##事件委托
+ 定义：当一个容器中有n个元素发生某些行为的时候，可以把这个行为委托给他们共同的父级，通过事件源来做不同的区分。
##阻止事件的发生
+ ```e.preventDefault?e.preventDefault():e.returnValue=false;```
##事件冒泡
+ 优点：事件委托，事件委托是对事件冒泡的典型运用，减少dom操作，提高网页性能和开发的效率。
+ 缺点：阻止冒泡 e.stopPropagation?e.stopPropagation():e.cancelBubble=true;
##事件流
+ 两种说法
 - 三阶段：事件捕获，事件源，事件冒泡
 - 两阶段：事件捕获，事件冒泡
##DOM0和DOM2级事件的区别
+ 
+ DOM0：只能给同一个元素同一个行为只能绑定一个方法；只能发生在冒泡阶段；安全兼容。
+ DOM2：可以给同一个元素，同一个行为，绑定多个不同的方法；可以通过第三个参数，决定事件发生在事件流的哪个阶段：true为捕获，false为冒泡；不兼容 .
 - addEventListener 
 - 标准浏览器  可以控制事件流的发生阶段；this-》当前绑定事件的这个元素；事件不带on；解除事件绑定：removeEventLister；
 - IE：attachEvent  不可以控制事件流的发生阶段；window；事件带0n。解除事件绑定：detachEvent；


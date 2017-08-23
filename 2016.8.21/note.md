#事件库的封装
## addEventListener
+ 按绑定的先后顺序进行调用
+ this：指向当前被绑定的元素
+ 不支持重复绑定；同一个元素指定同一个行为，多次绑定同一个方法，只会被保留一次
+ 解除：removeEventListener

## attachEvent
+ 函数调用的顺序有问题
+ this：指向有问题；
+ 支持重复绑定：缺点！
+ 解除：detachEvent()

## this小总结
+ 当元素身上的事件被触发的时候，会执行一个函数，函数中的this，指向当前这个元素
+ 
+ 回调函数中的this，一般是window
+ 当函数被调用的时候，点前面是谁，this就是谁
+ 构造函数中的this，指向实例
+ 当遇到call,apply,bind的时候，以上规则全部失效，
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
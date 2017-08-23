function Tab(el) {
    if (!el) return;
    //类里面放的都是私有的属性和方法
    //获取需要的原生，把全局变量都作为了私有属性
    this.el = el;
    this.$boxInner = el.children('.boxInner');
    this.$onImg = el.find('img');
    this.$ul = el.children('ul');
    this.$onLi = el.find('li');
    this.$left = el.find('.left');
    this.$right = el.find('.right');

    this.data = null;
    this.init();

Tab.prototype = {
    constructor: Tab,
    init: function () {
        var _this = this;
        //1.获取数据
        this.getData();
        //2.绑定数据
        this.bindData();
        //3.图片懒加载
        this.showImg();
    },
    getData: function () {
        var _this = this;
        $.ajax({
            url: 'data.txt',
            type: 'GET',
            async: false,
            dataType: 'json',
            success: function (val) {
                _this.data = val;
            }
        })
    },
    bindData: function () {
        var strImg = '', strLi = '';
        for (var i = 0; i<this.data.length; i++) {
            var cur = this.data[i];
            strImg += '<img src="#" data-realImg="' + (cur.imgSrc) + '">';
            strLi += i === 0 ? '<li class="on"></li>' : '<li></li>';
        }
        strImg+='<img src="#" data-realImg="img/banner1.jpg">';
        this.$boxInner.html(strImg);
        this.$ul.html(strLi);
        this.$onImg = this.el.find('img');
        this.$onLi = this.el.find('li');
        this.$boxInner.css('width', this.$onImg.first().width() * this.$onImg.length);
    },
    showImg:function(){
        for(var i =0;i<this.$onImg.length;i++){
            var img = this.$onImg.eq(i);
            this.lazyImg(img);
        }
    },
    lazyImg:function(img){
        var tmpImg=$('<img/>');
        tmpImg.attr('src',img.data('realing'));
        tmgImg.on('load',function(){
            img.attr('src',$(this).attr('src'));
            tmgImg=null;
        });
        tmgImg.on('error',function(){
            img.attr('src','img/error.gif');
            tmgImg=null;
        })
    }
}
}
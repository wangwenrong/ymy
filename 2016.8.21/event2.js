/*(function () {
    var oWrap = document.getElementById('wrap');
    on(oWrap, 'mousedown', down);
    function down(e) {
        //先获取之前的坐标位置
        this.x = e.clientX;
        this.y = e.clientY;
        //获取wrap以前的位置
        this.l = this.offsetLeft;
        this.t = this.offsetTop;
        if (this.setCapture) {//IE
            this.setCapture();
            on(this, 'mousemove', move);
            on(this, 'mouseup', up);
        } else {
            var _this = this;
            this.MOVE = function (e) {
                move.call(_this, e);
            };
            this.UP = function (e) {
                up.call(_this, e);
            };
            on(document, 'mousemove', this.MOVE);
            on(document, 'mouseup', this.UP);
        }
    }
    function move(e) {
        this.style.left = e.clientX - this.x + this.l + 'px';
        this.style.top = e.clientY - this.y + this.t + 'px';
        if (e.preventDefault) {
            e.preventDefault();
        }
    }
    function up() {
        if (this.releaseCapture) {
            this.releaseCapture();
            off(this, 'mousemove', move);
            off(this, 'mouseup', up);
        } else {
            off(document, 'mousemove', this.MOVE);
            off(document, 'mouseup', this.UP);
        }
    }
})();*/
(function(){
    var oWrap = document.getElementById('wrap');
    on(oWrap,'mousedown',down);

    function down(e){
        console.log(111)
        //获取之前的坐标
        this.x=e.clientX;
        this.y=e.clientY;
        this.l=this.offsetLeft;
        this.t=this.offsetTop;
        //判断浏览器
        if(this.setCapture){
            this.setCapture();
            on(this,'mousemove',move);
            on(this,'mouseup',up);
        }else{
            var _this=this;
            this.MOVE=function(e){
                move.call(_this,e)
            }
            this.UP=function(e){
                up.call(_this,e)
            }
            on(document,'mousemove',this.MOVE)
            on(document,'mouseup',this.UP)
        }
    };
    function move(e){
        console.log(222)
        //现在的位置=新坐标-之前的坐标+自身的位置
        this.style.left=e.clientX-this.x+this.l+'px';
        this.style.top=e.clientY-this.y+this.t+'px';
        //判断浏览器,阻止程序继续
        if(e.preventDefault){
            e.preventDefault();
        };
    };
    //接触绑定
    function up(){
        console.log(333)
        if(this.releasCapture){
            this.releasCapture();
            off(this,'mousemove',move);
            off(this,'moueseup',up);
        }else{
            off(document,'mousemove',this.MOVE);
            off(document,'mouseup',this.UP);
        }
    }

})()
/*
    * 调整zindex
    * */
var list = null;
var time = null;
var imglist = null;
var smallbtn = null;
var oldindex = 0;
window.onload = function () {
    list = document.getElementsByClassName("image");
    imglist = document.getElementsByClassName("imglist")[0];
    smallbtn = document.getElementsByClassName("smallbtn");
    //调整层
    for (var i = 0; i < list.length; i++) {
        list[i].style.zIndex = list.length - i - 1;
    }

    animate();

    //停止 和 添加
    imglist.onmouseenter = function () {
        clearInterval(time)
    }
    imglist.onmouseleave = function () {
        animate("left");
    }

    //小点添加事件
    for (var i = 0; i < smallbtn.length; i++) {
        smallbtn[i].index = i;
        smallbtn[i].onmouseenter = function () {
            for (var k = 0; k < smallbtn.length; k++) {
                smallbtn[k].classList.remove("ck");
                list[k].style.opacity=0;//默认看不见
            }
            this.classList.add("ck");
            //获取当前点的索引
            //当前的图透明度 变成 1
            list[this.index].style.opacity = 1;
            //计算几次到最后
            var count = this.index - oldindex>0?this.index - oldindex:this.index - oldindex+list.length;
            //动态调层
            for (var k = 0; k < list.length; k++) {
                var index = parseInt(list[k].style.zIndex);
                var cha = index + count - list.length;
                list[k].style.zIndex = cha >= 0 ? cha : index + count;
            }
            oldindex = this.index;
        }
    // }
}
//动画方法
function animate() {
    time = setInterval(function () {
        zindechange("right");
    }, 2500);
}
//层切换
function zindechange(res) {
    for (var i = 0; i < list.length; i++) {
        var index = list[i].style.zIndex;
        if (res == "right") {
            index++;
            if (index > list.length - 1) {
                index = 0;
                list[i].style.opacity = 0;
                smallbtn[i].classList.remove("ck");
            }
            else if (index == list.length - 1) {
                list[i].style.opacity = 1;
                smallbtn[i].classList.add("ck");
                oldindex = i;
            }
        }
        else {
            index--;
            if (index < 0) {
                index = 4;
                list[i].style.opacity = 1;
                smallbtn[i].classList.add("ck");
                oldindex = i;
            }
            else {
                list[i].style.opacity = 0;
                smallbtn[i].classList.remove("ck");
            }
        }
        list[i].style.zIndex = index;
    }
}
var range = document.querySelector(".range");
var span = document.querySelector(".span");
//调音量的 volume	设置或返回音频/视频的音量：0-1.0
range.onmousedown = function () {
    this.onmousemove = function () {
        span.innerHTML = this.value ;
    };
    this.onmouseup = function () {
        span.innerHTML = this.value ;
        this.onmousemove = null;
        this.onmouseup = null;
    }
};
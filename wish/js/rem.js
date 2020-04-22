function recalc() {
    //可见区域宽度
    var clientWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // var width = clientWidth > 1300 ? 1300 : clientWidth;
    var width = clientWidth <320 ? 320 : clientWidth;
    if(!width) return;
    if(width<600){
        document.documentElement.style.fontSize = 200 * (width / 1080) + 'px';
    }
    else if(width<960){
        document.documentElement.style.fontSize = 120 * (width / 1080) + 'px';
    }
    else{
        document.documentElement.style.fontSize = 100 * (width / 1080) + 'px';
    }

}
function initRecalc() {
    recalc();
    // orientationchange事件在设备的纵横方向改变时触发。
    var resizeEvt = 'osrientationchange' in window ? 'orientationchange' : 'resize';
    if(!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    // 当初始的 HTML 文档被完全加载和解析完成之后 页面有变化时候
    document.addEventListener('DOMContentLoaded', recalc, false);
}
initRecalc();



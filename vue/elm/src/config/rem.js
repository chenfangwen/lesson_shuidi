//手动计算rem

// console.log('rem')
(function(doc,win){
    var docEl = doc.documentElement,  //页面HTML
    recale = function(){
        //设备差异计算
        var clientWidth = docEl.clientWidth;
        if(!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth/320) +'px';

    }
    docEl.addEventListener('DOMContentLoaded',recale,false)  //
})(document,window)
(this.webpackJsonpsanyuan=this.webpackJsonpsanyuan||[]).push([[8],{131:function(n,e,t){"use strict";t.d(e,"e",(function(){return u})),t.d(e,"c",(function(){return p})),t.d(e,"b",(function(){return m})),t.d(e,"d",(function(){return f})),t.d(e,"a",(function(){return h}));var i=t(2),a=t(3),r=t(1);function o(){var n=Object(i.a)(["\n  position: fixed;\n  left: 0; right: 0; top: 0; bottom: 0;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n"]);return o=function(){return n},n}function c(){var n=Object(i.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  margin: 0 5px;\n  padding: 5px 0;\n  align-items: center;\n  border-bottom: 1px solid ",";\n  .img_wrapper {\n    margin-right: 20px;\n    img{\n      border-radius: 3px;\n      width: 50px;\n      height: 50px;\n    }\n  }\n  .name{\n    font-size: ",";\n    color: ",";\n    font-weight: 500;\n  }\n"]);return c=function(){return n},n}function l(){var n=Object(i.a)(["\n  display: flex;\n  margin: auto;\n  flex-direction: column;\n  overflow: hidden;\n  .title {\n    margin:10px 0 10px 10px;\n    color: ",";\n    font-size: ",";\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(i.a)(["\n  position: fixed;\n  top: 160px;\n  left: 0;\n  bottom: ",";\n  overflow: hidden;\n  width: 100%;\n"]);return s=function(){return n},n}function d(){var n=Object(i.a)(["\n  box-sizing: border-box;\n  position: fixed;\n  top: 95px;\n  width: 100%;\n  padding: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"]);return d=function(){return n},n}var u=a.b.div(d()),p=a.b.div(s(),(function(n){return n.play?"60px":0})),m=a.b.div(l(),r.a["font-color-desc"],r.a["font-size-s"]),f=a.b.div(c(),r.a["border-color"],r.a["font-size-m"],r.a["font-color-desc"]),h=a.b.div(o())},142:function(n,e,t){n.exports=t.p+"static/media/music.64444b39.png"},148:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),r=t(2),o=t(3);function c(){var n=Object(r.a)(["\n  position: fixed;\n  top: 94px;\n  bottom: ",";\n  width: 100%;\n"]);return c=function(){return n},n}var l=o.b.div(c(),(function(n){return n.play>0?"60px":0})),s=t(47),d=t(28),u=t(27),p=t(10),m=t(1);function f(){var n=Object(r.a)(["\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  background: white;\n  .before {\n    position: absolute;\n    top: -300px;\n    height: 400px;\n    width: 100%;\n    background: ",";\n  }\n  .slider-container{\n    position: relative;\n    width: 98%;\n    height: 160px;\n    overflow: hidden;\n    margin: auto;\n    border-radius: 6px;\n    .slider-nav{\n      position: absolute;\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    .swiper-pagination-bullet-active{\n      background: ",";\n    }\n  }\n"]);return f=function(){return n},n}var h=o.b.div(f(),m.a["theme-color"],m.a["theme-color"]),g=(t(141),t(146));var b=a.a.memo((function(n){var e=Object(i.useState)(null),t=Object(p.a)(e,2),r=t[0],o=t[1],c=n.bannerList;return Object(i.useEffect)((function(){if(c.length&&!r){var n=new g.a(".slider-container",{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination"}});console.log(),o(n)}}),[c.length,r]),a.a.createElement(h,null,a.a.createElement("div",{className:"before"}),a.a.createElement("div",{className:"slider-container"},a.a.createElement("div",{className:"swiper-wrapper"},c.map((function(n){return a.a.createElement("div",{className:"swiper-slide",key:n.imageUrl},a.a.createElement("div",{className:"slider-nav"},a.a.createElement("img",{src:n.imageUrl,width:"100%",height:"100%",alt:"\u63a8\u8350"})))}))),a.a.createElement("div",{className:"swiper-pagination"})))}));function x(){var n=Object(r.a)(["\n  position: relative;\n  width: 32%;\n  .decorate {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 35px;\n    border-radius: 3px;\n    background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));\n  }\n  .img_wrapper{\n    position: relative;\n    height: 0;\n    padding-bottom: 100%;\n    .play_count {\n      z-index: 1;\n      position: absolute;\n      right: 2px;\n      top: 2px;\n      font-size: ",";\n      line-height: 15px;\n      color: ",";\n      .play{\n        vertical-align: top;\n      }\n    }\n    img {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border-radius: 3px;\n    }\n  }\n  .desc {\n      overflow: hidden;\n      margin-top: 2px;\n      padding: 0 2px;\n      height: 50px;\n      text-align: left;\n      font-size: ",";\n      line-height: 1.4;\n      color: ",";\n    }\n"]);return x=function(){return n},n}function v(){var n=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]);return v=function(){return n},n}function w(){var n=Object(r.a)(["\n  max-width: 100%;\n  .title{\n    font-weight: 700;\n    padding-left: 6px;\n    font-size: 14px;\n    line-height: 60px;\n    color: ",";\n  }\n"]);return w=function(){return n},n}var E=o.b.div(w(),m.a["font-color"]),y=o.b.div(v()),j=o.b.div(x(),m.a["font-size-s"],m.a["font-color-light"],m.a["font-size-s"],m.a["font-color-desc"]),O=t(132),z=t.n(O),L=t(8);var N=Object(L.g)(a.a.memo((function(n){return a.a.createElement(E,null,a.a.createElement("h1",{className:"title"},"\u63a8\u8350\u6b4c\u5355"),a.a.createElement(y,null,n.recommendList.map((function(e){return a.a.createElement(j,{key:e.id,onClick:function(){return t=e.id,void n.history.push("/recommend/".concat(t));var t}},a.a.createElement("div",{className:"img_wrapper"},a.a.createElement("div",{className:"decorate"}),a.a.createElement(z.a,{placeholder:a.a.createElement("img",{width:"100%",height:"100%",src:t(142),alt:"music"})},a.a.createElement("img",{src:e.picUrl+"?param=300x300",width:"100%",height:"100%",alt:"music"})),a.a.createElement("div",{className:"play_count"},a.a.createElement("i",{className:"iconfont play"},"\ue885"),a.a.createElement("span",{className:"count"},Math.floor(e.playCount/1e4),"\u4e07"))),a.a.createElement("div",{className:"desc"},e.name))}))))}))),k=t(131),D=t(33),C=t(64);e.default=Object(u.b)((function(n){return{recommendList:n.getIn(["recommend","recommendList"]),bannerList:n.getIn(["recommend","bannerList"]),enterLoading:n.getIn(["recommend","enterLoading"]),songsCount:n.getIn(["player","playList"]).size}}),(function(n){return{getBannerDataDispatch:function(){n(s.a())},getRecommendListDataDispatch:function(){n(s.b())}}}))(a.a.memo((function(n){var e=n.bannerList,t=n.recommendList,r=n.enterLoading,o=n.songsCount,c=n.getBannerDataDispatch,s=n.getRecommendListDataDispatch;Object(i.useEffect)((function(){e.size||c(),t.size||s()}),[]);var u=e?e.toJS():[],p=t?t.toJS():[];return a.a.createElement(l,{play:o},a.a.createElement(D.a,{className:"list",onScroll:O.forceCheck},a.a.createElement("div",null,a.a.createElement(b,{bannerList:u}),a.a.createElement(N,{recommendList:p}))),r?a.a.createElement(k.a,null,a.a.createElement(C.a,null)):null,Object(d.a)(n.route.routes))})))}}]);
//# sourceMappingURL=8.b0d8c373.chunk.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bfc9ceba"],{4130:function(t,i,s){},"4e90":function(t,i,s){"use strict";var c=s("4130"),a=s.n(c);a.a},da83:function(t,i,s){"use strict";s.r(i);var c=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"cart"},[t._m(0),s("div",{staticClass:"cart-content"},[t._l(t.cartList,(function(i,c){return s("div",{key:c,staticClass:"cart-content-main"},[s("div",{staticClass:"cart-info"},[s("img",{attrs:{src:t.productDictList[i.id].image}}),s("span",[t._v(t._s(t.productDictList[i.id].name))])]),s("div",{staticClass:"cart-price"},[t._v(" ￥ "+t._s(t.productDictList[i.id].cost)+" ")]),s("div",{staticClass:"cart-count"},[s("span",{staticClass:"cart-control-minus",on:{click:function(i){return t.handleCount(c,-1)}}},[t._v("-")]),t._v(" "+t._s(i.count)+" "),s("span",{staticClass:"cart-control-add",on:{click:function(i){return t.handleCount(c,1)}}},[t._v("+")])]),s("div",{staticClass:"cart-cost"},[t._v(" ￥ "+t._s(t.productDictList[i.id].cost*i.count)+" ")]),s("div",{staticClass:"cart-delete"},[s("span",{staticClass:"cart-control-delete",on:{click:function(i){return t.handleDelete(c)}}},[t._v("删除")])])])})),t.cartList.length?t._e():s("div",{staticClass:"cart-empty"},[t._v("购物车为空")])],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.cartList.length,expression:"cartList.length"}],staticClass:"cart-promotion"},[s("span",[t._v("使用优惠券")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.promotionCode,expression:"promotionCode"}],attrs:{type:"text"},domProps:{value:t.promotionCode},on:{input:function(i){i.target.composing||(t.promotionCode=i.target.value)}}}),s("span",{staticClass:"cart-control-promotion",on:{click:t.handleCheckCode}},[t._v("验证")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.cartList.length,expression:"cartList.length"}],staticClass:"cart-footer"},[s("div",{staticClass:"cart-footer-desc"},[t._v(" 共计 "),s("span",[t._v(t._s(t.countAll))])]),s("div",{staticClass:"cart-footer-desc"},[t._v(" 应付总额 "),s("span",[t._v(t._s(t.costAll-t.promotion))]),s("br"),t.promotion?[t._v(" (优惠"),s("span",[t._v("￥ "+t._s(t.promotion)+" ")]),t._v(") ")]:t._e()],2),s("div",{staticClass:"cart-footer-desc"},[s("div",{staticClass:"cart-control-order",on:{click:t.handleOrder}},[t._v("现在结算")])])])])},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"cart-header"},[s("div",{staticClass:"cart-header-title"},[t._v("购物清单")]),s("div",{staticClass:"cart-header-main"},[s("div",{staticClass:"cart-info"},[t._v("商品信息")]),s("div",{staticClass:"cart-price"},[t._v("单价")]),s("div",{staticClass:"cart-count"},[t._v("数量")]),s("div",{staticClass:"cart-cost"},[t._v("小计")]),s("div",{staticClass:"cart-delete"},[t._v("删除")])])])}],o=(s("4160"),s("ac1f"),s("5319"),s("159b"),s("c4c8")),n={name:"cart",data:function(){return{promotion:0,promotionCode:"",productList:o["a"]}},computed:{cartList:function(){return this.$store.state.cartList},productDictList:function(){var t={};return this.productList.forEach((function(i){t[i.id]=i})),t},countAll:function(){var t=0;return this.cartList.forEach((function(i){t+=i.count})),t},costAll:function(){var t=this,i=0;return this.cartList.forEach((function(s){i+=t.productDictList[s.id].cost*s.count})),i}},methods:{handleOrder:function(){this.$store.dispatch("buy").then((function(){window.alert("购买成功")}))},handleCheckCode:function(){""!==this.promotionCode?"love_liuziyi"===this.promotionCode?this.promotion=500:window.alert("优惠码输入错误"):window.alert("请输入优惠码")},handleCount:function(t,i){i<0&&1===this.cartList[t].count||this.$store.commit("editCartCount",{id:this.cartList[t].id,count:i})},handleDelete:function(t){this.$store.commit("deleteCart",this.cartList[t].id)}},mounted:function(){null==window.localStorage.getItem("username")&&(window.alert("请先完成登录"),this.$router.replace("/login"))}},e=n,r=(s("4e90"),s("2877")),d=Object(r["a"])(e,c,a,!1,null,"214ddd7d",null);i["default"]=d.exports}}]);
//# sourceMappingURL=chunk-bfc9ceba.5bd1f57e.js.map
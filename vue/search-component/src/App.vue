<template>
  <div id="app">
    <div class="item-intro-detail" ref="itemIntroDetail">
        <div class="item-intro-nav item-tabs">
          <Tabs>
            <TabPane label="商品介绍">
              <div class="remarks-title">
                <span>商品介绍</span>
              </div>
              <div class="item-intro-img" ref="itemIntroGoods">
                <img :src="item" alt="" v-for="(item,index) in goodsInfo.goodsDetail" :key="index">
              </div>
            </TabPane>
            <TabPane label="商品评价">
              <div class="remarks-container">
                <div class="remarks-title">
                  <span>商品评价</span>
                </div>
              <div class="remarks-box" v-for="(item,index) in goodsInfo.remarks.detail" :key="index">
                  <div class="remarks-user">
                    <Avatar icon="person" />
                    <span class="remarks-user-name">{{item.username}}</span>
                  </div>
                  <div class="remarks-content-box">
                    <p>
                      <Rate disabled :value="item.values" allow-half class="remarks-star"></Rate>
                    </p>
                    <p class="remarks-content">{{item.content}}</p>
                    <p class="remarks-sub">
                      <span class="remarks-item">{{item.goods}}</span>
                      <span class="remarks-time">{{item.time}}</span>
                    </p>
                  </div>
                </div>
                <div class="remarks-page">
                  <Page :total="40" size="small" show-elevator show-sizer></Page>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return {
      goodsInfo:{
        goodsImg:[],
        param:{},   //商品参数
        remarks:{
          detail:[],
          remarksNumberDetail:[],
          remarksTags:[],
          goodAnalyse
        }
      }
    }
  },
  mounted(){
    
  },
  components: {
    // Search
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  padding: 0 15px;
}
</style>

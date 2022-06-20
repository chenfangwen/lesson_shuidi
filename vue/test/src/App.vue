<template>
  <div class="masonry" @click="click">
    <!-- <div class="colmun">
      <img class="item" :src="i.img" :key="i.id" v-for="i in data1">
    </div>
    <div class="colmun">
      <img class="item" :src="i.img" :key="i.id" v-for="i in data2">
    </div>
    <div class="colmun">
      <img class="item" :src="i.img" :key="i.id" v-for="i in data3">
    </div> -->
    <div v-for="(item, index) in listnew" :key="index" class="item">{{item}}</div>
    <test-solt>
      <p><div slot="two">hhhhh</div></p>
      
    </test-solt>
  </div>
</template>

<script>
import data from "./data.json";
import testSolt from './components/testSolt.vue';
export default {
  components: {
    testSolt
  },
  data() {
    let data1 = [], //第一列
      data2 = [], //第二列
      data3 = [], //第三列
      i = 0;

    while (i < data.length) {
      data1.push(data[i++]);
      if (i < data.length) {
        data2.push(data[i++]);
      }
      if (i < data.length) {
        data3.push(data[i++]);
      }
    }
    return {
      //第一列
      data1,
      //第二列
      data2,
      //第三列
      data3,
      obj: {
        list: [1,2,3,4]
      }
    };
  },
  computed: {
    listnew() {
      return this.obj.list.map(item => item+1);
    }
  },
  methods: {
    click() {
      this.obj.list = [1,2]
    }
  }
};
</script>

<style lang="stylus" scoped>
.masonry {
  display: flex;
  flex-direction: row;
  .colmun {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 2px;
    .item {
      margin-bottom: 5px;
      width: 100%;
    }
  }
}
</style>
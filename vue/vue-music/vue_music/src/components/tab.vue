<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span>排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span>歌手</span>
    </router-link>
  </div>
</template>
<style lang="stylus" scoped>
.tab{
    position: relative;
    height: 44px;
    width: 100%;
    display flex
    background: rgb(212, 68, 57);
}
</style>
<template>
  <div class="test">
    <slot name="one">
        <div>1</div>
    </slot>
    <slot name=two>
        <div>2</div>
    </slot>
    <!-- <slot>
        <div>default</div>
    </slot> -->
  </div>
</template>

<script>

export default {
    name: ''
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
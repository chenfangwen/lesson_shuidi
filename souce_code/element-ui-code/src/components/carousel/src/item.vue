<template>
  <div>
    <slot/>
  </div>
</template>
<script>
export default {
  // 严格下不可或缺
  name: 'CarouselItem',
  created(){
      // console.log(this.$parent)
      this.$parent && this.$parent.updateItems();
  }
}
</script>
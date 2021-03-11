<template>
  <ul class="switches">
    <li
        v-for="(item, index) in switches"
        :key="item.id"
        :class="['switch-item', currentIndex === index ? 'active' : '']"
        @click="switchItem(index)">
      <span>{{item.name}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    switches: {
      type: Array
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchItem (index) {
      this.$emit('switch', index)
    }
  }
}
</script>

<style scoped lang="stylus">
  .switches {
    display: flex;
    align-items: center;
    width: 240px;
    margin: 0 auto;
    // border-radius: 5px;
    .switch-item {
      flex: 1;
      padding: 8px;
      margin: 0 20px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-text-l;
      border-bottom: 2px solid $color-theme;
      &.active {
        border-bottom: 2px solid $color-text-l;
        // background: $color-highlight-background;
        font-weight 700;
      }
    }
  }
</style>
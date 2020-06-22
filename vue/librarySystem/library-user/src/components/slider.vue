<template>
    <div class="slider-container">
        <el-menu :default-active="activeIndex"
            class="el-menu-vertical-demo"
            mode="vertical"
            :router=true>
            <el-menu-item index="bookshow"
                class="tc">图书借阅</el-menu-item>
            <el-menu-item index="user"
                class="tc">账户管理</el-menu-item>
            <el-menu-item index="records"
                class="tc">借阅记录</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'slider',
    data() {
        return {
            activeIndex: 'bookshow',
            pathMap: {
                Books: 'bookshow',
                Users: 'user',
                Records: 'records'
            }
        }
    },
    watch: {
        '$route.path'() {
            this.reset()
        }
    },
    computed: {
        path() {
            return this.$route.matched[0] && this.$route.matched[0].name
        }
    },
    methods: {
        reset() {
            const path = this.$route.path
            if (path) {
                this.activeIndex = this.pathMap[this.path]
            }
        }
    },
    created() {
        this.reset()
    }
}
</script>
<style lang="stylus" scoped>
.slider-container {
  width: 200px;
  height: 100%;
  display: inline-block;
}
</style>
<style lang="stylus">
.slider-container {
  .el-menu {
    height: 100%;
  }
}
</style>

<template>
    <div class="search">
        搜索结果
        <hr/>
        {{this.$route.query.searchData}}
    </div>
</template>

<script>
export default {
    name:'Search',
    components:{

    },
    mounted(){
        console.log(this.$route.query)
    }
}
</script>

<style lang="stylus" scoped>

</style>
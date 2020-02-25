<template>
    <div class="">
        <div class="container">
            <i-input v-model="searchData" placeholder="请输入逆向搜索的商品">
                <Button slot="append" icon="ios-search" @click="search"/>
            </i-input>
            <Tag v-for="(item,index) in promotionTags" :key="index" closable @on-close="closeTags(index)">
                <span @click="selectTags(index)">
                    {{item}}
                </span>
            </Tag>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            searchData:'',
            promotionTags:['买2免1','领200神券','199减100','母婴五折','冲100送20']
        }
    },
    methods:{
        search(){
            // console.log(this.searchData)
            this.$router.push({
                path:'/search',
                query:{
                    searchData:this.searchData
                }
            })
        },
        selectTags(index){
            this.searchData = this.promotionTags[index]
        },
        closeTags(index){
            this.promotionTags.splice(index,1)
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
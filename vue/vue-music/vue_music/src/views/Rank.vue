<template>
    <div class="" id="rank">
        <div class="list" id="list">
            <div class="playlist" @click="toPlayList(playList.id)" v-for="(playList,index) in TopList" :key="index">
                <img :src="playList.coverImgUrl" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import API from '../api/rank.js'
import {mapActions,mapState} from 'vuex'
export default {
    name:'Rank',
    data () {
        return {
            TopList:[]
        }
    },
    computed:{
        ...mapState(['cur_music','cur_music_pic'])
    },
    watch: {
        cur_music(value){
            if(value!==''){
                // console.log('++++')
                let list = document.getElementById('list')
                // console.log(list,'----')
                list.style.paddingBottom = 60 + 'px'
                console.log('success')
            }
        },
        '$route':function(to,from){
          // document.body.scrollTop = 0
            if(this.cur_music!==''){
                // console.log('++++')
                let list = document.getElementById('list')
                // console.log(list,'----')
                list.style.paddingBottom = 60 + 'px'
                console.log('success')
            }
        }
    },
    methods: {
        toPlayList(id){
            this.$router.push({
                path:`/banner/${id}&0`
            })
        }
    },
    mounted() {
        if(this.cur_music!==''){
            // console.log('++++')
            let list = document.getElementById('list')
            // console.log(list,'----')
            list.style.paddingBottom = 60 + 'px'
            console.log('success')
        }
        API.getTopList()
        .then(res => {
            console.log(res.data)
            this.TopList = res.data.list
        })
    }
}
</script>

<style lang="stylus" scoped>
#rank{
    margin: 0;
    padding: 0;
    z-index: 100;
    // background-color #fff
    .list{
        position absolute
        top 85px
        width: 98%;
        margin: 0 1%;
        .playlist{
            height 100px
            text-align left
            margin 10px
            img{
                width 100px
                height 100px
                border-radius 5px
                margin-left 0
            }
        }
    }
}
</style>


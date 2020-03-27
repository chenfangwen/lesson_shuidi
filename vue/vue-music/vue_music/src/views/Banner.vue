<template>
    <div id="banner" >
        <!-- <img :src="cur_music_pic" alt=""> -->
        <div class="" v-if="ifA"><album-list/></div>
        <div class="" v-if="ifP"><play-list/></div>
    </div>
</template>

<script>
import API from '../api/search'
import API2 from '../api/recommend'
import {mapState,mapActions} from 'vuex'
import albumList from '../components/albumList.vue'
import playList from '../components/playList.vue'
export default {
    data(){
        return {
        }
    },
    components:{
        albumList,
        playList
    },
    computed:{
        ...mapState({
            playList:(state) => state.playList,
            albumMusic:(state) => state.albumMusic,
            curList:(state) => state.curList,
            cur_music_pic:(state) => state.cur_music_pic,
        }),
        albumPic(){
            if(this.albumMusic[0]){return this.albumMusic[0].al.picUrl}
         },
        ifP(){
            return this.playList==this.curList?true:false
        },
        ifA(){
            return this.albumMusic==this.curList?true:false
        }
    },
    watch:{
        '$route':function(to,from){
            // document.body.scrollTop = 0
            this.getData()
        }
    },
    methods:{
         ...mapActions(['getCur_music',"getAlbumMusic",'getPlayList','getCurList']),
         getData(){
            window.scrollTo(0,0)
            console.log(this.$route.params)
            const type = this.$route.params.type;
            if(type == 10){
                API.getAlbumDetail(this.$route.params.id)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.songs){
                        this.getAlbumMusic(res.data.songs)
                        this.getCurList(res.data.songs)
                        console.log(this.albumMusic)
                    }
                })
            }
            if(type == 1000 || type == 0){
                API2.getRecommendListDetail(this.$route.params.id)
                .then(res=>{
                    console.log(res.data,'---')
                    if(res.data.playlist){
                        this.getPlayList(res.data.playlist)
                        this.getCurList(res.data.playlist)
                        // console.log(res.data.songs)
                    }
                })
            }
         }
    },
    mounted(){
        // this.$router.afterEach((to,from,next) => {
        //     window.scrollTo(0,0)
        // })
        
        this.getData();
        // if(type == 0){

        // }
        // const url = '/api' + this.$route.params.
    }
}
</script>
<style lang="stylus" scoped>
#banner{
    position absolute
    top 0
    width 100vw
    height 100vh
    // z-index 150
    // background-color #f2f2f2
    
}
</style>
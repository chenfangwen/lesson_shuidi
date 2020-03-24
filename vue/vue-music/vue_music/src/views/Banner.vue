<template>
    <div id="banner">
        <album-list/>
    </div>
</template>


<script>
import API from '../api/search'
import {mapState,mapActions} from 'vuex'
import albumList from '../components/albumList.vue'
export default {
    data(){
        return {
        }
    },
    components:{
        albumList
    },
    computed:{
        ...mapState({
            // musicsList:(state) => state.musicsList,
            albumMusic:(state) => state.albumMusic,
        }),
    },
    methods:{
         ...mapActions(['getMusicList','getCur_music',"getAlbumMusic"])
    },
    mounted(){
        console.log(this.$route.params)
        const type = this.$route.params.type;
        
        if(type == 10){
            API.getAlbumDetail(this.$route.params.id)
            .then(res=>{
                console.log(res.data)
                if(res.data.songs){
                    this.getAlbumMusic(res.data.songs)
                    console.log(this.albumMusic)
                }
            })
        }
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
    background-color #f2f2f2
}
</style>
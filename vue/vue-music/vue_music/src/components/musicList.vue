<template>
    <div class="music_list">
      <div  @click="getCur_music(item)" class="music_item" v-for="(item, index) in musicsList" :key="index">
        <div class="music_item_box">
          <div class="song">{{ item.name }}</div>
          <div class="singer">{{ item.artists[0].name }}</div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState({
            musicsList:(state) => state.musicsList
        })
    },
    methods:{
        ...mapActions(['getCur_music']),
    }
}
</script>

<style lang="stylus" scoped>
.music_list{
        position: relative;
        background-color: #f2f3f4;
        /* margin-top: 50px; */
        .music_item{
            position: relative;
            // background-color: #f2f3f4;
            width: 97vw;
            height: 47px;
            margin-left 1.5%
            text-align left 
            border-bottom: 1px solid #e4e4e4;
            .music_item_box{
              position: relative;
              margin-top  10px
              height 40px
              margin-bottom 7px
              .song{
                font-size 14px;
                font-weight 500
                height 20px
                padding-top  2px
                padding-bottom 2px
              }
              .singer{
                font-size 11px
                color: #757575;
                height 18px
                font-weight 500
                padding-top 2px
                padding-bottom 2px
              }
            }
        }
    }
</style>
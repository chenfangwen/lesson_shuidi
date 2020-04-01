<template>
    <div class="music_list">
      <div  @click="getCur_music_m(item,index)" class="music_item" v-for="(item, index) in musicsList" :key="index">
        <div class="music_item_box">
          <div class="song">{{ item.name }}</div>
          <div class="singers">
            <div class="singer" v-for="(singer,index) in item.artists" :key="index">
              <div class="singername">{{ singer.name }}</div> <div class="null" v-if="index<item.artists.length-1">\</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState({
            musicsList:(state) => state.musicsList,
            curList:(state) => state.curList
        })
    },
    methods:{
        ...mapActions(['getCur_music','getCurList','getCurIndex']),
        getCur_music_m(item,index){
          this.getCur_music(item);
          // this.getCurList(this.musicsList)
          // this.getCurIndex(index)
        }
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
                height 18px
                padding-top  2px
                padding-bottom 2px
                overflow: hidden;
                text-overflow:ellipsis;//文本溢出显示省略号
                // display: -webkit-box;
                -webkit-line-clamp: 1; //控制文字行数
                -webkit-box-orient: vertical; //子元素数值排列
              }
              .singers{
                display flex
                font-size 11px
                color: #757575;
                height 13px
                overflow: hidden;
                text-overflow:ellipsis;//文本溢出显示省略号
                // display: -webkit-box;
                -webkit-line-clamp: 1; //控制文字行数
                -webkit-box-orient: vertical; //子元素数值排列
                font-weight 500
                padding-top 2px
                padding-bottom 2px
                .singer{
                  display flex
                  text-align left
                  .singername{
                  }
                  .null{
                    width 10px
                    text-align center
                    line-height 15px
                  }
                }
              }
            }
        }
    }
</style>
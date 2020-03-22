<template>
    <transition name="normal" >
      <div class="normal-player" v-show="true" @touchstart.once="firstPlay">
        <div class="background">
          <!-- <transition name="filterR">
          <div class="filterR" v-show="currentShow === 'lyric'"></div>
          </transition> -->
          <div class="filter"></div>
          <img :src="cur_misic.image" width="100%" height="100%">
        </div>
        <div class="top">
          <div class="back" @click="back">
            <i class="fa fa-angle-down"></i>
          </div>
          <h1 class="title" v-html="cur_misic.name"></h1>
          <h2 class="subtitle" v-html="cur_misic.singer"></h2>
        </div>
        <div class="middle" @click="changeMiddle">
          <transition name="middleL">
            <div class="middle-l" v-show="currentShow === 'cd'">
              <div class="cd-wrapper">
                <div class="cd" :class="cdCls" >
                  <img :src="cur_misic_pic" class="image">
                </div>
              </div>
            </div>
          </transition>
          <transition name="middleR">
            <scroll class="middle-r" ref="lyricList" v-show="currentShow === 'lyric'" :data="currentLyric && currentLyric.lines">
              <div class="lyric-wrapper">
                <div class="currentLyric" v-if="currentLyric">
                  <p ref="lyricLine" class="text" :class="{'current': currentLineNum === index}"
                    v-for="(line, index) in currentLyric.lines" :key="line.key">
                    {{line.txt}}
                  </p>
                </div>
                  <p class="no-lyric" v-if="currentLyric === null">{{upDatecurrentLyric}}</p>
              </div>
            </scroll>
          </transition>
        </div>
        <div class="bottom">
          <div class="progress-wrapper">
            <span class="time time-l">{{format(currentTime)}}</span>
            <div class="progress-bar-wrapper">
              <progress-bar :percent="percent" @percentChangeEnd="percentChangeEnd" @percentChange="percentChange"></progress-bar>
            </div>
            <span class="time time-r">{{format(duration)}}</span>
          </div>
          <div class="operators">
            <div class="icon i-left" >
              <i class="iconfont mode" :class="iconMode" @click="changeMode"></i>
            </div>
            <div class="icon i-left" >
              <i class="iconfont icon-prev" @click="prev"></i>
            </div>
            <div class="icon i-center" >
              <i class="iconfont" @click="togglePlaying" :class="playIcon"></i>
            </div>
            <div class="icon i-right" >
              <i class="iconfont icon-test" @click="next"></i>
            </div>
            <div class="icon i-right">
              <i class="iconfont"  @click="toggleFavorite(cur_misic)" :class="getFavoriteIcon(cur_misic)"></i>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['cur_misic','cur_music_pic'])
    }
}
</script>
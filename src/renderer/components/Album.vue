<template>
  <div class="index">
    <loading v-if="!album"></loading>
    <section class="album" v-if="album">
      <img class="album-img" src="~@/assets/album.jpg" alt="">
      <article class="album-desc">
        <h2>{{album.name}}</h2>
        <p>{{album.desc}}</p>
      </article>
      <span class="back-icon" @click="back">BACK</span>
    </section>
    <section class="list" v-if="album">
      <ul class="songs">
        <li class="song" v-for="(song,index) in album.list" :key="index" @click="play(song.s_url, index)">
          <span class="index-span">{{index+1}}</span>
          <!-- <span v-if="idx === index+1" class="img-span">
            <img src="~@/assets/music_on.png" alt="" class="music-on">
          </span> -->
          <span class="name" :class="{listening: idx === index+1}">{{song.name}}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Loading from './Loading'
export default {
  components: {
    Loading
  },
  mounted () {
    this.audio = new Audio()
    this._fetchAlbum(this.$route.query.aid)
  },
  data () {
    return {
      idx: 0,
      album: null,
      songUrl: ''
    }
  },
  methods: {
    _fetchAlbum (aid) {
      const apiUrl = `https://www.easy-mock.com/mock/5ad86a17c1196e47fdb233f7/chicken/album/${aid}`
      this.$http.get(apiUrl).then(res => {
        if (res.status === 200 && res.statusText === 'OK') {
          this.album = res.data.data
        }
      })
    },
    back () {
      this.$router.back()
    },
    play (url, index) {
      this.idx = index + 1
      this.audio.src = url
      this.audio.play()
    }
  },
  watch: {
    audio (newVal) {
      console.log(newVal)
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
  }
  li:hover{
    cursor: pointer;
  }
 .index {
   height: 100%;
   width: 100%;
   position: relative;
   font-family: 'Microsoft YaHei', sans-serif;
   -webkit-app-region: no-drag;
 }
 .album {
   height: 80px;
   width: 100%;
   position: fixed;
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-bottom: 10px;
   z-index: 99;
   background-color: #ffffff;
 }
 .album-img {
   width: 64px;
   height: 64px;
   margin-left: 20px;
 }
 .album-img:hover {
   filter: blur(1px);
 }
 .back-icon {
   height: 32px;
   line-height: 32px;
   padding: 0 8px;
   background-color: #3CB371;
   font-size: 12px;
   border-radius: 6px;
   color: #ffffff;
   cursor: pointer;
 }
 .back-icon:hover {
   background-color: #2E8B57;
 }
 .listening {
   color: #3CB371;
 }

 .album-desc {
   margin: 0 16px;
   flex-basis: 180px;
 }
 .album-desc h2 {
   font-weight: 500;
   font-size: 16px;
 }
 .album-desc p {
   margin-top: 10px;
   font-size: 12px;
 }
 .songs {
   padding-top: 80px;
 }
 .audio {
   height: 20px;
   width: 20px;
 }
 .song {
   height: 40px;
   line-height: 40px;
   text-indent: 20px;
   opacity: .8;
   font-size: 14px;
   cursor: pointer;
 }
 .song:nth-child(odd){
   background-color: #efefef;
 }
 .song:nth-child(even){
   background-color: #ffffff;
 }
 li.song:hover {
   transition: background-color .4s ease;
   background-color: #efefef;
 }
 .name {
   margin-left: 14px;
 }
 .music-on {
   width: 16px;
   height: 16px;
   vertical-align: middle;
 }
 .index-span,.img-span {
   float: left;
   width: 30px;
 }
</style>

<template>
  <div class="index">
    <section class="album">
      <img class="album-img" src="~@/assets/album.jpg" alt="">
      <article class="album-desc">
        <h2>李云龙语音包</h2>
        <p>秀芹大妹子···</p>
      </article>
      <span class="back-icon" @click="back">BACK</span>
    </section>
    <section class="list">
      <ul class="songs">
        <li class="song" v-for="(song,index) in songs" :key="index"><span class="index-span" v-if="idx !== index+1">{{index+1}}</span><span v-if="idx === index+1" class="img-span"><img src="~@/assets/music_on.png" alt="" class="music-on"></span><span class="name">{{song.name}}</span></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      songs: [
        {
          name: '秀芹大妹子1'
        },
        {
          name: '秀芹大妹子23333'
        },
        {
          name: '秀芹大妹子3'
        },
        {
          name: '秀芹大妹子4'
        },
        {
          name: '秀芹大妹子1'
        },
        {
          name: '秀芹大妹子23333'
        },
        {
          name: '秀芹大妹子3'
        },
        {
          name: '秀芹大妹子4'
        },
        {
          name: '秀芹大妹子1'
        },
        {
          name: '秀芹大妹子23333'
        },
        {
          name: '秀芹大妹子3'
        },
        {
          name: '秀芹大妹子4'
        }
      ],
      idx: 2
    }
  },
  methods: {
    back () {
      this.$router.back()
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
   /* box-shadow: 5px 5px 5px #efefef; */
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

 .album-desc {
   margin-left: 20px;
   flex-basis: 180px;
 }
 .album-desc h2 {
   font-weight: 500;
   font-size: 20px;
 }
 .album-desc p {
   margin-top: 10px;
   font-size: 14px;
 }
 .songs {
   padding-top: 80px;
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
   transition: background-color .5s ease;
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

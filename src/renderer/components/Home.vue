<template>
  <div class="home">
    <loading v-if="albums.length===0"></loading>
    <section class="albums">
      <article class="album" v-for="album in albums" :key="album.aid" @click="detail(album.aid)">
        <img v-lazy="album.album_img" alt="" class="album-img">
        <div class="album-desc">
          <h3 class="name">{{album.name}}</h3>
          <p class="desc">{{album.desc}}</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import Loading from './Loading'
export default {
  data () {
    return {
      albums: []
    }
  },
  components: {
    Loading
  },
  mounted () {
    this._fetchData()
  },
  methods: {
    _fetchData () {
      let apiUrl = 'https://www.easy-mock.com/mock/5ad86a17c1196e47fdb233f7/chicken/albums'
      this.$http.get(apiUrl).then(res => {
        if (res.status === 200 && res.statusText === 'OK') {
          this.albums = res.data.data.list
        }
      })
    },
    detail (aid) {
      console.log(aid)
      this.$router.push({
        name: 'album',
        query: {
          aid: aid
        }
      })
    }
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    -webkit-app-region: no-drag;
  }
  .albums {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .album {
    display: flex;
    flex-direction: row;
    height: 80px;
    align-items: center;
  }
  .album-img {
    width: 64px;
    height: 64px;
    margin: 0 20px;
  }
  .album-desc {
    margin-right: 16px;
  }
  .name {
    font-size: 16px;
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .desc {
    font-size: 12px;
  }
  .album:nth-child(odd) {
    background-color: #ffffff;
  }
  .album:nth-child(even) {
    background-color: #efefef;
  }
  .album:hover {
    background-color: #efefef;
    transition: background-color .4s ease;
    cursor: pointer;
  }
  .slide-enter-active, .slide-leave-active {
    transition: opacity 5s;
  }
  .slide-enter, .slide-leave-to {
    opacity: 0;
  }
</style>

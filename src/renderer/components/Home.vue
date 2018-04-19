<template>
  <div class="home">
    <section class="albums">
      <article class="album" @click="detail">
        <img src="~@/assets/album.jpg" alt="" class="album-img">
        <div class="album-desc">
          <h3 class="name">李云龙语音包</h3>
          <p class="desc">描述内容。。。</p>
        </div>
      </article>
      <article class="album">
        <img src="~@/assets/album.jpg" alt="" class="album-img">
        <div class="album-desc">
          <h3 class="name">李云龙语音包</h3>
          <p class="desc">描述内容。。。</p>
        </div>
      </article>
      <article class="album">
        <img src="~@/assets/album.jpg" alt="" class="album-img">
        <div class="album-desc">
          <h3 class="name">李云龙语音包</h3>
          <p class="desc">描述内容。。。</p>
        </div>
      </article>
      <article class="album">
        <img src="~@/assets/album.jpg" alt="" class="album-img">
        <div class="album-desc">
          <h3 class="name">李云龙语音包李云龙语音包</h3>
          <p class="desc">描述内容。。。</p>
        </div>
      </article>
    </section>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    detail () {
      console.log(123)
      this.$router.push({
        name: 'song'
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
  .name {
    font-size: 16px;
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .desc {
    font-size: 14px;
  }
  .album:nth-child(odd) {
    background-color: #ffffff;
  }
  .album:nth-child(even) {
    background-color: #efefef;
  }
  .album:hover {
    background-color: #efefef;
    transition: background-color .5s ease;
    cursor: pointer;
  }
</style>

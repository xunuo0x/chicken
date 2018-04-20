<template>
  <div class="sidebar">
    <img v-for="(item, index) in routes" 
      :key="item.path" 
      @click="switchRoute(item.path, index)" 
      :src="imageSrc(item.img)" 
      alt="" 
      class="link"
      :class="{footer: index === routes.length-1}">
  </div>
</template>

<script>
export default {
  data () {
    return {
      routes: [
        {
          path: 'home',
          img: 'index'
        },
        {
          path: 'wechat',
          img: 'person_white'
        },
        {
          path: 'info',
          img: 'list_white'
        }
      ]
    }
  },
  methods: {
    switchRoute (route, idx) {
      this.routes.forEach((item, index) => {
        if (index !== idx && !item.img.includes('white')) {
          item.img += '_white'
        }
        if (index === idx && item.img.includes('white')) {
          console.log(item.img)
          item.img = item.img.slice(0, -6)
          console.log(item.img)
        }
      })
      this.$router.push({name: route})
    },
    imageSrc (url) {
      return `http://chicken-1253575843.file.myqcloud.com/${url}.png`
    }
  }
}
</script>

<style scoped>
  .sidebar {
    width: 12vw;
    height: 100vh;
    padding: 16px;
    background-color: #333;
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    -webkit-app-region: drag;
  }
  .link {
    margin-bottom: 16px;
    width: 32px;
    height: 32px;
    -webkit-app-region: no-drag;
  }
  .footer {
    position: absolute;
    bottom: 0px;
  }
</style>

<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="container">
      <div class="widget">
        <widget></widget>
      </div>
      <div class="main">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Widget from '@/components/Widget'
  export default {
    name: 'chicken',
    components: {
      Sidebar, Widget
    }
  }
</script>

<style>
  /* CSS */
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,body { 
    font-family: 'Microsoft YaHei', sans-serif;
    -webkit-app-region: drag;
  }
  body::-webkit-scrollbar {
    width: 5px;
  }
  body::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
  body::-webkit-scrollbar-thumb {
    border-radius: 1px;
    background-color: #dfdfdf;
  }
  a:hover, a:visited, a:link, a:active {
    text-decoration: none;
    color: #333333;
  }
  #app {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .container {
    height: 100vh;
    margin-left: 12vw;
    width: 88vw;
  }
  .widget {
    height: 6vh;
    position: fixed;
    top: 0;
    left: 12vw;
    z-index: 100;
    width: 88vw;
  }
  .main {
    height: 94vh;
    margin-top: 6vh;
    border-color: #fefefe;
  }
</style>

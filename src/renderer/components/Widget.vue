<template>
  <div class="order">
    <span class="yellow" @click="resize('min')">&ndash;</span>
    <span class="red" @click="resize('close')">&times;</span>
  </div>
</template>

<script>
export default {
  methods: {
    resize (order) {
      this.$electron.ipcRenderer.send(order)
    }
  }
}
</script>

<style scoped>
  .order {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: #ffffff;
  }
  .yellow,.red {
    display: block;
    height: 16px;
    font-size: 18px;
    line-height: 16px;
    width: 16px;
    border-radius: 10px;
    margin: 0 8px 0 0;
    color: transparent;
    text-align: center;
    -webkit-app-region: no-drag;
    cursor: pointer;
  }
  .yellow {
    background-color: #FF9933;
  }
  .yellow:hover {
    color: #ffffff;
    height: 18px;
    width: 18px;
    border-radius: 9px;
    font-size: 20px;
    transition: all 0.2s linear;
  }
  .red {
    background-color: #FF6666;
  }
  .red:hover {
    color: #ffffff;
    height: 18px;
    width: 18px;
    border-radius: 9px;
    font-size: 20px;
    transition: all 0.2s linear;
  }
</style>

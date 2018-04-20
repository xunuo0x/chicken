<template>
  <div class="loading">
    <div class="pacman"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  @keyframes up {  
    0%, 100% {  
      transform: rotate(0);  
    }  
    50% {  
      transform: rotate(-30deg);  
    }  
  }
  @keyframes down {
    0%, 100% {  
      transform: rotate(0);  
    }  
    50% {  
      transform: rotate(30deg);  
    } 
  }
  @keyframes r-to-l {  
    100% {  
      margin-left: -1px;  
    }  
  }
  .loading {
    background-color: transparent;
    height: 100%;
    width: 100%;
  }
  .pacman::before, .pacman::after {
    content: '';  
    position: absolute;  
    background: rgb(255, 168, 7);  
    width: 60px;  
    height: 30px;  
    left: 50%;  
    top: 50%;  
    margin-left: -30px;  
    margin-top: -30px;  
    border-radius: 30px 30px 0 0;  
    -webkit-animation: up 0.6s infinite;  
    -moz-animation: up 0.5s infinite;  
    -o-animation: up 0.5s infinite;  
    animation: up 0.5s infinite; 
  }
  .pacman::after {
    margin-top: -1px;  
    border-radius: 0 0 30px 30px;  
    -webkit-animation: down 0.5s infinite;  
    -moz-animation: down 0.5s infinite;  
    -o-animation: down 0.5s infinite;  
    animation: down 0.5s infinite;
  }
  .dot {
    position: absolute;  
    left: 50%;  
    top: 50%;  
    width: 10px;  
    height: 10px;  
    margin-top: -5px;  
    margin-left: 20px;  
    border-radius: 50%;  
    background: #aaaaaa;  
    z-index: -1;  
    box-shadow: 30px 0 0 #aaaaaa, 60px 0 0 #aaaaaa, 90px 0 0 #aaaaaa;  
    -webkit-animation: r-to-l 0.5s infinite;  
    -moz-animation: r-to-l 0.5s infinite;  
    -o-animation: r-to-l 0.5s infinite;  
    animation: r-to-l 0.5s infinite;  
  }
</style>


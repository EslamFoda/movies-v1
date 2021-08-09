<template>
  
  <router-view/>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fade-enter-active{
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.fade-leave-active {
  animation: going 1s;
}

@keyframes going {
  from{
    transform: translateX(0);
  } 
  to{
    transform: translateX(-50px);
  }
  
}

@keyframes coming {
  from{
    transform: translateX(-50px);
    opacity: 0;
  } 
  to{
    transform: translateX(0);
    opacity: 1;
  }
  
}



</style>

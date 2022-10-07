<template>

  <EncabezadoComponet/>
  
  
  <div class="container-fluid">
    <router-view></router-view>
</div>
</template>

<script>
   import EncabezadoComponet from '@/components/Hoteles/EncabezadoComponet.vue'
   
  
//import EncabezadoComponet from './components/encabezadoComponet.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    EncabezadoComponet
  
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}
</style>

<template>
  <div>
    <div>
      <head-navigation></head-navigation>
    </div>
    <div id="app">
      <router-view/>
    </div>
    <div>
      <foo-navigation></foo-navigation>
    </div>
  </div>
</template>

<script>
import HeadNavigation from './HeadNavigation.vue';
import FooNavigation from './FooNavigation.vue';
export default {
  components: {
    HeadNavigation,
    FooNavigation
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:whitesmoke;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

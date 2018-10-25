<template>
  <div id="app">
  	<div class="view">
	    <router-view />
  	</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return {}
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu{
	position: fixed;
	left: 0;
	top: 0;
}
.menu li{
	list-style-type: none;
}
</style>

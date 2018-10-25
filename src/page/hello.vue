<template>
	<div @click='ax'>
		hello
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			ax(){
				axios.post('api/admin/index/home').then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
</style>
<template>
	<div>
	   <div style="margin-bottom: 20px;">
	    	<el-input placeholder="请输入账号" v-model="userName">
			    <template slot="prepend">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</template>
		    </el-input>
	    </div>
	   <div style="margin-bottom: 20px;">
	   	    <el-input placeholder="请输入密码" v-model="password">
		       <template slot="prepend">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</template>
	         </el-input>
	   </div>
	     <div style="margin-bottom: 20px;">
	   	    <el-input placeholder="请确认密码" v-model="confirm">
		       <template slot="prepend">确认密码</template>
	         </el-input>
	   </div>
		  <el-button @click="register">确定注册</el-button>
		</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data(){
			return {
				userName: '',
				password: '',
				confirm: ''
			}
		},
		methods: {
			register(){
				axios.post('api/reg', {name: '小王', password: '666666'}).then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
</style>
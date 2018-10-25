<template>
	<div>
	   <div style="margin-bottom: 20px;">
	    	<el-input placeholder="请输入账号" v-model="name">
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
		  <el-button @click="login">返回登录</el-button>
		</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data(){
			return {
				name: '',
				password: '',
				confirm: ''
			}
		},
		methods: {
			register(){
				axios.post('api/reg', {name: this.name, password: this.password, confirm: this.confirm}).then(res => {
					console.log(res.data)
				})
			},
			login(){
				this.$router.push({
					path: '/login'
				})
			}
		}
	}
</script>

<style>
</style>
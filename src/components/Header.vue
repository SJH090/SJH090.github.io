<script setup lang="ts">
import { ref } from 'vue'

// mode 是fun mode() 是返回值
//初始模式
const mode = () => {
	if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		return '<i class = "czs-sun-l"></i>'
	}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){
		return '<i class = "czs-moon-l"></i>'
	}
}

//监听模式变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		if (event.matches) {
			console.log("当前暗色")
		} else {
			console.log("当前亮色")
		}
	})

function change(){
	alert("功能还没做")
}

</script>

<template>
	<!--主导航-->
	<div class="sina-header">
		<div class="sina-header-inner">
			<div class="sina-nav">
				<ul class="nav-list">
					<li><a href="/">新浪首页</a></li>
					<li><a href="" @click="change">新闻</a></li>
					<li><a href="" @click="change">体育</a></li>
					<li><a href="" @click="change">财经</a></li>
					<li><a href="" @click="change">娱乐</a></li>
					<li><a href="" @click="change">科技</a></li>
					<li><a href="" @click="change">博客</a></li>
					<li><a href="" @click="change">图片</a></li>
					<li><a href="" @click="change">专栏</a></li>
					<li><a href="#">更多</a></li>
				</ul>
			</div>
			<!--手动亮暗模式切换-->
			<div class="sina-client">
				<div class="sina-client-tl">
					<a class="search" href="#" @click="change"><span><i class="czs-search-l"></i></span></a>
					<a class="mode" href="#" @click="change"><span v-html="mode()"></span></a>
				</div>
			</div>
		</div>
	</div>
	<!--/主导航-->
</template>

<style scoped>
.sina-header {
    width: 100%;
    height: 48px;
    position: fixed;
    backdrop-filter: blur(10px);
	background-color:rgba(255,255,255,0.5);
	z-index: 100;
}
.sina-header-inner {
    max-width: 1240px;
    position: relative;
    margin: 0 auto;
}
.sina-nav{
    position: relative;
    margin: 0;
}
.sina-nav .nav-list{
    margin: 0;
}
.sina-nav .nav-list li {
    float: left;
    list-style: none;
}
.sina-nav .nav-list li a {
    /* background-color: #e96a0d; */
    margin: 0;
    text-decoration: none;
    display: block;
    line-height: 48px;
    padding: 0 15px;
    color: #333;
}
.sina-nav .nav-list li a:hover {
    color: #e96a0d
}
/* 靠右 */
.sina-client {
    position: relative;
    float: right;
}
/* 垂直居中 */
.sina-client-tl a {
    text-decoration: none;
    line-height: 45px;
    color: #333;
	margin: 0 15px;
}

@media (prefers-color-scheme: dark) {
	.sina-header {
		background-color:rgba(55,71,79,0.5);
	}
	.sina-nav .nav-list li a {
		color: #fff;
	}
	.sina-client-tl a {
		color: #fff;
	}
}

@media screen and (max-width:800px) {
	/* 生效范围，宽度最大600px，也就是600px以下 */
	/* 第五个元素之后的全部隐藏 */
	.sina-header .sina-header-inner .sina-nav .nav-list li:nth-child(n+6){
		display: none;
	}
}
</style>

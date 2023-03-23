<script setup lang="ts">

//welcome单击效果
function vistableMain() {
	document.documentElement.scrollTop = 890
}

//文章跳转
function enter(date: number) {
    window.location.href = "/" + date
}

</script>

<template>
    <div class="welcome" @click="vistableMain">
        <i class="czs-angle-up-l"></i>
    </div>
    <div class="home1">
        <ul class="home-list">
            <li @click="enter(20230321)">
                <img src="../assets/16.png">
                <div class="jianjie">
                    <h2>我的第一篇博客</h2>
                    <span>这是简介，可以有很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多的字。</span>
                </div>
            </li>
            <li @click="enter(20230322)">
                <img src="../assets/17.png">
                <div class="jianjie">
                    <h2>3.22用户提权</h2>
                    <span>今天的内容 普通用户提权，awk，sed。</span>
                </div>
            </li>
            <li @click="enter(20230323)">
                <img src="../assets/18.png">
                <div class="jianjie">
                    <h2>3.23权限相关</h2>
                    <span>今天的内容 用户权限，文件夹权限，文件权限。</span>
                </div>
            </li>
            <li>文章1</li>
            <li>文章1</li>
        </ul>
    </div>
</template>

<style scoped>
.welcome {
    display: flex;
    justify-content: center;
    /* background-color: black; */
}

.welcome i {
    cursor: pointer;
    margin-top: 43%;
    font-size: 100px;
    animation: index 1s infinite alternate;
}

@keyframes index {
    from {
        transform: translateY(0%);
    }

    to {
        transform: translateY(5%);
    }
}

.home1 {
    margin: 15px auto;
    padding: 0 25px;
    background-color: rgba(255, 255, 255, 0.5);
}

.home1 .home-list {
    list-style: none;
    padding: 0;
}

.home1 .home-list li {
    display: flex;
    max-width: 1160px;
    height: 200px;
    margin: 15px 0;
    border-radius: 20px;
    /* text-align: center; */
    overflow: hidden;
    background-color: rgba(238, 238, 238, 0.8);
    transition: all 0.1s;
}

.home1 .home-list li:hover {
    box-shadow: 0 0 10px;
    cursor: pointer;
}

.home1 .home-list li img {
    display: inline-block;
    margin: 10px;
}

.home1 .home-list li .jianjie {
    max-width: 890px;
    height: 100%;
    display: inline-block;
    margin: 10px;
}

@media (prefers-color-scheme: dark) {
    .welcome i {
        color: #fff;
    }

    .home1 .home-list li {
        background-color: rgba(66, 66, 66, 0.8);
    }

    .home1 .home-list li:hover {
        box-shadow: 0 0 10px #fff;
        cursor: pointer;
    }

    .home1 .home-list li .jianjie {
        color: #fff;
    }
}</style>

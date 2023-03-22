<script setup lang="ts">
function tp(){
    window.location.href="/20230321"
}
</script>

<template>
    <div class="welcome">
        <i class="czs-angle-up-l"></i>
    </div>
    <div class="home1">
        <ul class="home-list">
            <li @click="tp">
                <img src="../assets/16.png">
                <div class="jianjie">
                    <h2>我的第一篇博客</h2>
                    <span>这是简介，可以有很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多的字。</span>
                </div>
            </li>
            <li>文章1</li>
            <li>文章1</li>
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
    margin-top: 800px;
    font-size: 100px;
    color: #448AFF;
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
    width: 1240px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.5);
}

.home1 .home-list {
    list-style: none;
}

.home1 .home-list li {
    display: flex;
    width: 1160px;
    height: 200px;
    margin: 15px 0;
    border-radius: 20px;
    /* text-align: center; */
    /* overflow: hidden; */
    background-color: rgba(238, 238, 238, 0.9);
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
    width: 890px;
    height: 100%;
    display: inline-block;
    margin: 10px;
}
</style>

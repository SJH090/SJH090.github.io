<script setup>

</script>
<template>
    <div class="all">
    <div class="container">
        <h1 class="title">公告</h1>
        <div class="info-box">
            <p>
                全DLC：
                <a href="https://jq.qq.com/123" target="_blank">解锁</a>
            </p>
            <h2>离离原上草，一岁一枯荣</h2>
            <h2>野火烧不尽，春风吹又生</h2>
        </div>
    </div>
</div>
</template>
<style scoped>
.all {
    font-family: Arial, sans-serif;
    background-image: linear-gradient(to bottom right,
            #3a7bd5,
            #3f5efb,
            #af52bf,
            #c873e0);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: white;
    height: 100vh;
    margin: 0;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 30px;
}

.title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
}

.info-box {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

a {
    color: #ffcc00;
    text-decoration: none;
}
</style>
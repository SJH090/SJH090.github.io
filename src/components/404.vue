<script setup lang="ts">

</script>

<template>
    <body>
        <div class="box">
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
        </div>
    </body>
</template>

<style scoped>
* {
    /* 常规初始化 */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    /* 常规居中显示 */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    min-height: 100vh;
    /* 渐变背景色 */
    background: radial-gradient(circle, #0077ee, #1f4f99, #1b2949, #000);
}

.box {
    /* 父盒子确定整体宽高 */
    width: 50vmin;
    height: 50vmin;

    /* 3D模式，给一个透视距离 */
    transform-style: preserve-3d;
    perspective: 100vmin;

    position: relative;
}

.layer {
    /* 内部元素居中对齐，不要也行，就是有些时候不在中间 */
    display: flex;
    justify-content: center;
    align-items: center;

    /* 文字区域的宽高 */
    width: 100%;
    height: 100%;

    /* 3D模式 */
    transform-style: preserve-3d;
    /* 先旋转一下方便查看样式，也是配合动画的初始化 */
    transform: rotateX(40deg) rotateY(40deg) translateZ(0);
    /* 旋转动画，只是为了更好地展示文字立体效果 */
    animation: animate 10s infinite alternate ease-in-out;

    /* 定位叠起来 */
    position: absolute;
}

@keyframes animate {
    100% {
        /* 动画就是简单左右旋转 */
        transform: rotateX(-40deg) rotateY(-40deg);
    }
}

.layer::after {
    /* 给每层的 after 填充文字 */
    content: "404";

    /* 文字颜色、大小、粗细、行高、居中 */
    color: #f5f5f5;
    font-size: 20vmin;
    font-weight: bold;
    line-height: 22vmin;
    text-align: center;
    /* 文字阴影 */
    text-shadow: 0.4vmin 0 1vmin rgba(0, 0, 0, 0.2);

    position: absolute;
}

.layer:nth-child(1)::after {
    /* 第一层就是正常显示的一层 */
    transform: translateZ(0);
}

.layer:nth-child(2)::after {
    /* 后面的每一层都逐层 -0.15vmin */
    transform: translateZ(-0.15vmin);
}

.layer:nth-child(3)::after {
    transform: translateZ(-0.3vmin);
}

.layer:nth-child(4)::after {
    transform: translateZ(-0.45vmin);
}

.layer:nth-child(5)::after {
    transform: translateZ(-0.6vmin);
}

.layer:nth-child(6)::after {
    transform: translateZ(-0.75vmin);
}

.layer:nth-child(7)::after {
    transform: translateZ(-0.9vmin);
}

.layer:nth-child(8)::after {
    transform: translateZ(-1.05vmin);
}

.layer:nth-child(9)::after {
    transform: translateZ(-1.2vmin);
}

.layer:nth-child(10)::after {
    transform: translateZ(-1.35vmin);
}

.layer:nth-child(11)::after {
    transform: translateZ(-1.5vmin);
}

.layer:nth-child(12)::after {
    transform: translateZ(-1.65vmin);
}

.layer:nth-child(13)::after {
    transform: translateZ(-1.8vmin);
}

.layer:nth-child(14)::after {
    transform: translateZ(-1.95vmin);
}

.layer:nth-child(15)::after {
    transform: translateZ(-2.1vmin);
}

.layer:nth-child(16)::after {
    transform: translateZ(-2.25vmin);
}

.layer:nth-child(17)::after {
    transform: translateZ(-2.4vmin);
}

.layer:nth-child(18)::after {
    transform: translateZ(-2.55vmin);
}

.layer:nth-child(19)::after {
    transform: translateZ(-2.7vmin);
}

.layer:nth-child(20)::after {
    transform: translateZ(-2.85vmin);
}

/* 第 10 层往后 */
.layer:nth-child(n + 10)::after {
    /* 文本宽度和颜色，后面会覆盖掉，其实也就中间有一个阴影层次感 */
    -webkit-text-stroke: 0.3vmin rgba(0, 0, 0, 0.2);
}

/* 第 11 层往后 */
.layer:nth-child(n + 11)::after {
    /* 文字要大一圈，换个颜色 */
    -webkit-text-stroke: 1.5vmin #1f90ff;
    /* 字体阴影，还是加强层次感 */
    text-shadow: 0.6vmin 0 0.6vmin #00366b, 0.5vmin 0.5vmin 0.5vmin #002951,
        0 0.6vmin 0.6vmin #00366b;
}

/* 第 12 层往后 */
.layer:nth-child(n + 12)::after {
    /* 换个字体颜色 */
    -webkit-text-stroke: 1.5vmin #0077ee;
}

.layer:last-child:after {
    /* 最后一层来个黑色阴影垫底 */
    -webkit-text-stroke: 1.5vmin rgba(0, 0, 0, 0.1);
}

.layer:first-child:after {
    /* 把第一层的颜色改成最亮，字体阴影也不要 */
    color: #fff;
    text-shadow: none;
}</style>

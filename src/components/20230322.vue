<script setup lang="ts">

</script>

<template>
    <div class="w20230322">
        <h1>用户提权</h1>
        <p>Linux中root是超级管理员，sudo 将一个普通用户的身份提升至root权限</p>
        <h2>如何提权</h2>
        <p>## 第一种提权<br>
            针对单个用户<br>
            命令：visudo<br>
            跳转到100行<br>
            :100<br>
            root ALL=（ALL） ALL<br>
            user ALL-（ALL） ALL<br>
            # 提权完毕后<br>
            普通用户执行命令之前要加 sudo<br>
            经典用法不解释<br>
            # 普通用户免密<br>
            baolong ALL=(ALL) NOPASSWD:ALL （免密）<br>
            # 讲解<br>
            # 用户名 所有主机 所有命令的执行权限<br>
            root ALL=（ALL） ALL<br>
            # 第二种提权<br>
            针对多个用户<br>
            visudo<br>
            108附近<br>
            %wheel ALL=(ALL) ALL<br>
            将用户加入组<br>
            usermod oldboy1 -G wheel<br>
        </p>
        <h2>awk</h2>
        <p>-F 指定分隔符<br>
            {print $number} 取列<br>
            {print $1} 取第一列<br>
            NR==1 第一行<br>
            NR==2 第二行</p>
        <h2>sed</h2>
        <p>替换
            sed s#匹配的内容#替换内容#g</p>
    </div>
</template>

<style scoped>
.w20230322 {
    width: 1240px;
    height: 1000px;
    margin: 50px auto;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;
}
</style>

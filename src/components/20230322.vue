<script setup lang="ts">

</script>

<template>
    <div class="w20230322">
        <h1>用户提权</h1>
        <div class="part">Linux中root是超级管理员，<br>
            sudo 将一个普通用户的身份提升至root权限</div>
        <h2>如何提权</h2>
        <div class="part">
            <h3>针对单个用户</h3>
            命令：visudo<br><br>
            跳转到100行<br>
            :100<br><br>
            照着root用户的配置添加普通用户，便可提权。普通用户执行命令之前要加 sudo<br>

            Tip：免密<br>
            baolong ALL=(ALL) NOPASSWD:ALL<br>
            （免密，仅普通用户生效。指切换到当前用户时不用设置密码）<br><br>
            <h4>内容详解</h4>
            # 用户名 所有主机 所有命令的执行权限<br>

            <h3>针对多个用户</h3>
            visudo<br>
            108行附近，照着例子添加组<br>
            %wheel ALL=(ALL) ALL<br>
            表示组内所有成员提权<br>
            将用户添加到组的操作<br>
            usermod oldboy1 -G wheel<br>
        </div>
        <h2>awk</h2>
        <div class="part">-F 指定分隔符<br>
            {print $number} 取列<br>
            {print $1} 取第一列<br>
            NR==1 第一行<br>
            NR==2 第二行</div>
        <h2>sed替换</h2>
        <div class="part">
            sed s#匹配的内容#替换内容#g</div>
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
.part{
    margin: 0 15%;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.5);
}
</style>

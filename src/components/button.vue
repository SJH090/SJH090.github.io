<script setup lang="ts">
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

function notify() {
    ElMessage({
        // success，warning，error
        type: 'success',
        message: '恭喜你，这是一条成功消息',
        // 默认false
        showClose: true,
    })
    // 上一条的语法糖
    ElMessage.success( '恭喜你，这是一条成功消息')

    ElNotification({
        title: '侧通知标题',
        message: '侧通知内容'
    })

    ElMessageBox.alert('内容','标题',{
        confirmButtonText: '确定',
    })

}
</script>

<template>
    <div class="touxiang"></div>
    <div class="btn" >register</div>
    <el-button @click="notify">消息通知</el-button>
</template>

<style scoped>
        .touxiang {
            /* last remove */
            border: 1px solid;
            margin: 100px 100px;
        
            width: 100px;
            height: 100px;
            border-radius: 50%;
            transition: 1s;
        }
        .touxiang:hover {
            /* 这里颜色选用头像主题色 */
            box-shadow: 0 0 100px red;
            cursor: pointer;
        }
        .btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 230px;
            height: 90px;
            line-height: 90px;
            text-align: center;
            color: #fff;
            font-size: 25px;
            text-transform: uppercase; 
            cursor: pointer;
            background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
            background-size: 400%;
            border-radius: 60px;
        }

        .btn:hover {
            animation: animate 8s linear infinite;
        }

        @keyframes animate {
            0% {
                background-position: 0%;
            }

            100% {
                background-position: 400%;
            }
        }

        .btn::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            z-index: -1;
            background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
            background-size: 400%;
            border-radius: 40px;
            opacity: 0;
            transition: 0.5s;
        }

        .btn:hover::before {
            filter: blur(20px);
            opacity: 1;
            animation: animate 8s linear infinite;
        }
</style>

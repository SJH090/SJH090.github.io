<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';

onMounted(() => {
    var myChart = echarts.init(document.getElementById('bing')!)
    myChart.setOption({
        series: [
            {
                type: 'pie', //bar柱状图
                data: [
                    {
                        name: '未使用',
                        value: 60,
                    },
                    {
                        name: '已使用',
                        value: 40,
                    }
                ]
            }
        ]
    })
})
//单机跳转滚动条到890
function vistableMain() {
    document.documentElement.scrollTop = 890
}

//文章跳转
function enter(date: number) {
    window.location.href = "/" + date
}

</script>

<template>
    <div class="yibiaopan">
        <div class="shenfen"></div>
        <div class="shijian">
            <div id="bing" style="width: 200px;height: 200px;"></div>
        </div>
        <div class="disanxiang">
            <div class="part1"></div>
            <div class="part2">
                <div class="part21"></div>
                <div class="part22"></div>
            </div>
        </div>
    </div>
    <div class="jiedian">
        <table>
            <tr>
                <th>状态</th>
                <th>节点</th>
                <th>配置</th>
                <th>负载</th>
            </tr>
            <tr>
                <td>正常</td>
                <td>美国1</td>
                <td>1核</td>
                <td>50%</td>
            </tr>
        </table>
    </div>
    <div class="cheng"></div>
</template>

<style scoped>
.cheng {
    height: 100vh;
}
.yibiaopan {
    margin: 50px auto;
    width: 1240px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.5);
}

.yibiaopan .shenfen {
    width: 400px;
    height: 250px;
    border-radius: 1%;
    background-color: rgba(238, 238, 238, 0.8);
}

.yibiaopan .shijian {
    width: 400px;
    height: 250px;
    border-radius: 1%;
    background-color: rgba(238, 238, 238, 0.8);
}

.yibiaopan .disanxiang {
    width: 400px;
    height: 250px;
    border-radius: 1%;
}

.yibiaopan .disanxiang .part1 {
    height: 60%;
    background-color: rgba(238, 238, 238, 0.8);
}

.yibiaopan .disanxiang .part2 {
    height: 40%;
    background-color: rgba(238, 238, 238, 0.8);
}

.yibiaopan .disanxiang .part2 .part21 {
    width: 50%;
    height: 100%;
    display: inline-block;
    background-color: yellowgreen;
}
.yibiaopan .disanxiang .part2 .part22 {
    width: 50%;
    height: 100%;
    display: inline-block;
    background-color: red;
}
.jiedian {
    margin: 0 auto;
    width: 1240px;
    min-height: 200px;
    background-color: rgba(238, 238, 238, 0.8);
    border-radius: 1%;
}

.jiedian table {
    width: 100%;
    border-spacing:0 45px;
}

.jiedian table tr {
    text-align: center;
}

</style>

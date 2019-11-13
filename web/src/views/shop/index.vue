<template>
  <el-container direction="vertical">
    <!-- 头部 -->
    <el-header>
        <h1 class="logo">
            <img src="shop_img/logo.png" alt="">
        </h1>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1"><router-link to="/home">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/order">我的订单</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/charts">数据图标</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/loginIn">登录/注册</router-link></el-menu-item>
        <el-menu-item index="5"><router-link to="/prodetails">商品详情</router-link></el-menu-item>
        <el-menu-item index="6"><router-link to="/mycarts">我的购物车</router-link></el-menu-item>
      </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
      <!-- 主体 -->

</template>


<script>

    export default {
        name: '',
        data() {

            return {msg: 'vue模板页',activeIndex: '1',}

        },
        mounted() {
        }

    }

</script>


<style scoped>
    .el-container.is-vertical{
        background: #f5f5f5;
    }
    .el-header{
        padding: 0;
        height: 70px !important;
        display: flex;
        background: #fff;
        justify-content: space-between;
        background-color: white;
        padding: 0 20px;
    }
    .logo{
        background: #ff5151;
        width: 150px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
    }
    .logo img{
        width: 74px;
        height: 41px;
    }

</style>

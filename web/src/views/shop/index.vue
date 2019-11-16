<template>
  <el-container direction="vertical">
    <!-- 头部 -->
    <el-header>
        <h1 class="logo">
            <img src="shop_img/logo.png" alt="">
        </h1>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#333" text-color="#dcdcdc" active-text-color="#fff">
            <el-menu-item index="1"><router-link to="/home">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/charts">数据图表</router-link></el-menu-item>
            <el-menu-item index="3">
                <el-dropdown placement="bottom-start">
                    <span class="el-dropdown-link">
                        我的<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><router-link to="/mycarts">我的购物车</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link to="/order">我的订单</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link to="/loginIn">注销登录</router-link></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-menu-item>
        </el-menu>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
    <el-footer>
        <div class="footer-wrap">
          Copyright©1999-2019  中国联通  版权所有
        </div>
    </el-footer>

  </el-container>

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
        background-color: #333;
        padding-right: 20px;
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
    .el-menu-item{
      color: #dcdcdc !important;
    }
  .el-dropdown .el-dropdown-link{
    color: #dcdcdc;}
  .el-dropdown-menu.el-popper{
    background: #333 !important;
    color: #dcdcdc;
    border:none;
  }
    .el-dropdown-menu__item:not(.is-disabled):hover, .el-dropdown-menu__item:focus{
      background-color: #333;
      color: #fff;
    }
    ::-webkit-scrollbar {
      width: 1px;
      height: 1px;
    }
    /* // 滚动条的滑块 */
    ::-webkit-scrollbar-thumb {
      background-color: #a1a3a9;
      border-radius: 0px;
    }
    .el-main{
      padding:0;
    }
  .el-footer{
    background: #fff;
  }
  .footer-wrap{
    max-width:1360px;
    height:100%;
    margin:0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #bfbfbf;
    font-size:12px;
  }
</style>

<template>
    <div id="myorder">
      <!--我的订单-->
      <ul class="orderlist">
        <li class="pro-info">
          <div class="shop-img">
            <img src="shop_img/shop.png"/>
          </div>
          <div class="shop-info">
            <p>【会员专属】超级品牌日回购四大特权 [交易快照]</p>
          </div>
        </li>
        <li class="pro-money pro-common-li">
          <p>￥0.01</p>
        </li>
        <li class="pro-common-li">
          <p>1</p>
        </li>
        <li class="pro-common-li">
          <p>已付款</p>
        </li>
        <li class="pro-common-li">
          <el-button type="primary" @click="checkDetails">查看订单详情</el-button>
        </li>
      </ul>
      <ul class="orderlist">
        <li class="pro-info">
          <h5></h5>
          <div class="shop-img">
            <img src="shop_img/shop.png"/>
          </div>
          <div class="shop-info">
            <p>【会员专属】超级品牌日回购四大特权 [交易快照]</p>
          </div>
        </li>
        <li class="pro-money pro-common-li">
          <p>￥0.01</p>
        </li>
        <li class="pro-common-li">
          <p>1</p>
        </li>
        <li class="pro-common-li">
          <p>已付款</p>
        </li>
        <li class="pro-common-li">
          <el-button type="primary" @click="checkDetails">查看订单详情</el-button>
        </li>
      </ul>
      <ul class="orderlist">
        <li class="pro-info">
          <h5></h5>
          <div class="shop-img">
            <img src="shop_img/shop.png"/>
          </div>
          <div class="shop-info">
            <p>【会员专属】超级品牌日回购四大特权 [交易快照]</p>
          </div>
        </li>
        <li class="pro-money pro-common-li">
          <p>￥0.01</p>
        </li>
        <li class="pro-common-li">
          <p>1</p>
        </li>
        <li class="pro-common-li">
          <p>待发货</p>
        </li>
        <li class="pro-common-li">
          <el-button type="primary" @click="checkDetails">查看订单详情</el-button>
        </li>
      </ul>
      <!--订单详情弹框组件-->
      <el-dialog title="订单详情" :visible.sync="dialogTableVisible">
          <p>订单编号：F1231231823192</p>
          <div class="order-infos-wrap">
            <div class="order-infos">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;width: 50%;">
                  <div class="order-pro-info">
                    <p>
                      <span class="span-left">商品名称：</span>
                      <span class="span-right">雅诗兰黛的双方都色覅us和粉底深代返回 </span>
                    </p>
                    <p>
                      <span class="span-left">订单状态：</span>
                      <span class="span-right">已发货</span>
                    </p>
                    <p>
                      <span class="span-left">数量：</span>
                      <span class="span-right">* 1</span>
                    </p>
                    <p>
                      <span class="span-left">合计：</span>
                      <span class="span-right">120元（含运费18元）</span>
                    </p>
                    <p>收货人信息</p>
                    <p>
                      <span class="span-left">收货人：</span>
                      <span class="span-right">林佳虹</span>
                    </p>
                    <p>
                      <span class="span-left">收货地址：</span>
                      <span class="span-right">广东省深圳市南光路是否为反倒是11号</span>
                    </p>
                    <p>
                      <span class="span-left">电话：</span>
                      <span class="span-right">1212312312312</span>
                    </p>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
      </el-dialog>
    </div>
</template>
<script>

    export default {
        name: '',
        data() {
            return {
              msg: '我的订单',
              dialogTableVisible: false,
            }
        },
        mounted() {
        },
      methods:{
          checkDetails(){
            this.dialogTableVisible = true;
          }
      }

    }

</script>


<style scoped>
  @import "myorder.css";

</style>

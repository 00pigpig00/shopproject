<template>
    <div id="myorder">
      <!--我的订单-->
      <ul class="orderlist" v-for="(orders,index) in orderList" :key="index" v-if="index<4">
        <li class="pro-info">
          <div class="shop-img">
            <img :src="orders.userimage"/>
          </div>
          <div class="shop-info">
            <p>{{orders.proname}}</p>
          </div>
        </li>
        <li class="pro-money pro-common-li">
          <p>￥{{orders.proprice}}</p>
        </li>
        <li class="pro-common-li">
          <p>{{orders.proaccount}}</p>
        </li>
        <li class="pro-common-li">
          <p>已付款</p>
        </li>
        <li class="pro-common-li">
          <el-button type="primary" @click="checkDetails(orders)">查看订单详情</el-button>
        </li>
      </ul>
      <div class="footer-page"><el-pagination
        :page-size="4"
        :pager-count="11"
        layout="prev, pager, next"
        :total="total">
      </el-pagination> <p>共{{allPageSize}}页</p></div>
      <!--订单详情弹框组件-->
      <el-dialog title="订单详情" :visible.sync="dialogTableVisible">
          <p>订单编号：{{moreDetails.id}}</p>
          <div class="order-infos-wrap">
            <div class="order-infos">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="moreDetails.userimage" class="image">
                <div style="padding: 14px;width: 50%;">
                  <div class="order-pro-info">
                    <p>
                      <span class="span-left">商品名称：</span>
                      <span class="span-right">{{moreDetails.proname}}</span>
                    </p>
                    <p>
                      <span class="span-left">订单状态：</span>
                      <span class="span-right">{{moreDetails.status}}</span>
                    </p>
                    <p>
                      <span class="span-left">数量：</span>
                      <span class="span-right">* {{moreDetails.proaccount}}</span>
                    </p>
                    <p>
                      <span class="span-left">合计：</span>
                      <span class="span-right">{{moreDetails.proprice}}</span>
                    </p>
                    <p>收货人信息</p>
                    <p>
                      <span class="span-left">收货人：</span>
                      <span class="span-right">{{moreDetails.orderuser}}</span>
                    </p>
                    <p>
                      <span class="span-left">收货地址：</span>
                      <span class="span-right">{{moreDetails.useraddress}}</span>
                    </p>
                    <p>
                      <span class="span-left">电话：</span>
                      <span class="span-right">{{moreDetails.usertel}}</span>
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
  import {fetchOrderList} from '@/api/shop';
    export default {
        name: '',
        data() {
            return {
              orderList: [],//存放订单列表数据
              dialogTableVisible: false,
              allPageSize:0,
              total:0,
              moreDetails:[],//弹框展示的详情
            }
        },
        mounted() {
          //获取用户订单列表
          this.getOrderList();
        },
      methods:{
          //获取订单列表
          getOrderList(){
            fetchOrderList().then(res=>{
              if(res.code==20000){
                this.orderList = res.data.items;
                this.total = res.data.items.length;
                this.allPageSize = this.pageCount(this.orderList.length,5);
              }
              console.log('res',res)
            })
          },
          //点击弹框查看订单详情
          checkDetails(items){
            this.dialogTableVisible = true;
            this.moreDetails = items;
          },
          // 根据数据条数与每页多少条数据计算页数
          pageCount (totalnum,limit){
            return totalnum > 0 ? ((totalnum < limit) ? 1 : ((totalnum % limit) ? (parseInt(totalnum / limit) + 1) : (totalnum / limit))) : 0;
          }
      }

    }

</script>


<style scoped>
  @import "myorder.css";

</style>

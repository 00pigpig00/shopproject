<template>
    <div id="myorder">
      <!--我的订单-->
      <ul class="orderlist" v-for="(orders,index) in pageData" :key="index">
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
      <div class="footer-page">
        <pagination v-show="total>0" :total="total" layout="prev, pager, next" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
    </div>
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
    import Pagination from '@/components/Pagination';

    export default {
        name: '',
        components:{
            Pagination
        },
        data() {
            return {
                orderList: [],//存放订单列表数据
                dialogTableVisible: false,
                total:0,
                moreDetails:[],//弹框展示的详情//查询条件
                listQuery:{
                    page: 1,
                    limit: 4,
                    personCount:0
                },
                pageData:[]
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
                    this.getList();
                }
                console.log('res',res)
                })
            },
            getList(){
                let {page,limit}=this.listQuery;
                //对deptList数据进行过滤
                let filterData=[];
                //this.pageData=this.deptList.splice(limit*(page-1),limit);
                this.pageData=this.orderList.filter((item,idx)=>{
                    return idx>=limit*(page-1) && idx<limit*page;
                });
            },
            //点击弹框查看订单详情
            checkDetails(items){
                this.dialogTableVisible = true;
                this.moreDetails = items;
            },
        }
    }

</script>
<style lang="scss">
  @import "myorder.scss";
</style>

<template>
  <!--我的个人中心-->
    <div id="mycenter">
      <el-collapse accordion  v-model="activeNames">
        <el-collapse-item  name="1">
          <template slot="title">
            个人信息<i class="header-icon el-icon-info"></i>
          </template>
          <div class="myinfo">
            <div class="avtar">
              <img :src="userinfos.userimg" alt="">
              <span>个人头像</span>
            </div>
            <div class="infos">
              <p>
                <label for="">用户名</label>
                <span>{{userinfos.username}}</span>
              </p>
              <p>
                <label for="">手机号</label>
                <span>{{userinfos.userphone}}</span>
              </p>
              <p>
                <label for="">我的收藏</label>
                <span>Saturn</span>
              </p>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            常用收货地址<i class="header-icon el-icon-phone"></i>
          </template>
          <div class="addr-list-wrap">
            <div class="addr-list">
              <ul>
                <li v-for="(address,key) in myaddress" :key="key">
                  <dl>
                    <dt>{{address.userName}}</dt>
                    <dd class="address">{{address.streetName}}</dd>
                    <dd class="tel">{{address.tel}}</dd>
                  </dl>
                  <div class="addr-opration addr-edit">
                    <i class="el-icon-edit-outline"></i>
                  </div>
                  <div class="addr-opration addr-del">
                    <a href="javascript:;" class="addr-del-btn">
                      <i class="el-icon-delete"></i>
                    </a>
                  </div>
                  <div class="addr-opration addr-default" v-if="address.isDefault">默认地址</div>
                </li>
                <li class="addr-new">
                  <div class="add-new-inner">
                    <i class="el-icon-plus">
                    </i>
                    <p>添加新地址</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="shipping-addr-more">
              <a class="addr-more-btn up-down-btn" href="javascript:;">
                more
                <i class="i-up-down">
                  <i class="i-up-down-l"></i>
                  <i class="i-up-down-r"></i>
                </i>
              </a>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
</template>
<script>
  import {fetchUserAddress,queryUser} from '@/api/shop';
    export default {
        name: '',
        data() {
            return {
              myaddress:[],//用户常用地址
              activeNames: ['1'],
              userinfos:[],//用户个人信息
            }
        },
        mounted() {
          this.getmyAddress();//获取用户常用地址
          this.getmyinfo();//获取用户个人信息
        },
        methods:{
          //获取用户常用地址
          getmyAddress(){
            fetchUserAddress().then(res=>{
              console.log('地址',res)
              if(res.code==20000){
                this.myaddress = res.data.items;
              }
            })
          },
          //获取用户个人信息
          getmyinfo(){
            queryUser({"userid":"lixiaoshuang"}).then(result=>{
              console.log('结果',result)
              this.userinfos = result.data.items[0];
            })
          },
        }

    }

</script>


<style>
 @import "mycenter.css";

</style>

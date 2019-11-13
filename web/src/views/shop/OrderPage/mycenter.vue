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
              <img src="shop_img/shop.png" alt="">
              <span>个人头像</span>
            </div>
            <div class="infos">
              <p>
                <label for="">用户名</label>
                <span>Saturn</span>
              </p>
              <p>
                <label for="">手机号</label>
                <span>13743413123</span>
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
                <li>
                  <dl>
                    <dt>林佳虹</dt>
                    <dd class="address">北京市朝阳区朝阳公园</dd>
                    <dd class="tel">12345678901</dd>
                  </dl>
                  <div class="addr-opration addr-edit">
                    <i class="el-icon-edit-outline"></i>
                  </div>
                  <div class="addr-opration addr-del">
                    <a href="javascript:;" class="addr-del-btn">
                      <i class="el-icon-delete"></i>
                    </a>
                  </div>
                  <div class="addr-opration addr-default">默认地址</div>
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
    export default {
        name: '',
        data() {
            return {
              msg: 'vue模板页',
              activeNames: ['1']
            }

        },
        mounted() {
        }

    }

</script>


<style>
 @import "mycenter.css";

</style>

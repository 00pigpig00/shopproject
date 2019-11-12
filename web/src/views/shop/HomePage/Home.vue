<template>
    <div id="homepage">
      <el-container>

        <el-header class="header_index">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item,index) in lunbo" :key="index">
              <h3 class="medium"><img :src="item.img1" class="image"></h3>
            </el-carousel-item>
          </el-carousel>
        </el-header>

        <el-container>

          <el-main class="main_index">

            <div class="product_list">
              <div>
                <h2 class="title">宽带套餐</h2>
              </div>
              <el-row>
                <el-col class="ka" :span="8" v-for="(o, index) in kuandai" :key="index" :offset="2">
                  <el-card :body-style="{ padding: '0px' }">
                    <img :src="o.img2" class="image">
                    <div style="padding: 14px;">
                      <span class="biaoti">{{o.title}}</span>
                      <div class="bottom clearfix">
                        <el-button type="text" class="button">商品详情</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>

            <div class="product_list">
              <div>
                <h2 class="title">手机</h2>
              </div>
              <el-row>
                <el-col class="ka" :span="8" v-for="(o, index) in phoneimgs" :key="index" :offset="2">
                  <el-card :body-style="{ padding: '0px' }">
                    <img :src="o.img3" class="image">
                    <div style="padding: 14px;">
                      <span type="text" class="biaoti">{{o.title}}</span>
                      <span type="text" class="neicun">{{o.neicun}}</span><br>
                      <span type="text" class="jiage">{{o.jiage}}</span>
                      <div class="bottom clearfix">
                        <el-button type="text" class="button">商品详情</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>

            <div class="product_list">
              <div>
                <h2 class="title">特惠大惊喜</h2>
              </div>
              <el-row>
                <el-col class="ka" :span="8" v-for="(o, index) in shangwang" :key="index" :offset="2">
                  <el-card :body-style="{ padding: '0px' }">
                    <img :src="o.img4" class="image">
                    <div style="padding: 14px;">
                      <span class="biaoti">{{o.title}}</span>
                      <div class="bottom clearfix">
                        <el-button type="text" class="button">商品详情</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>

          </el-main>

        </el-container>
      </el-container>
    </div>
</template>


<script>

    export default {
        name: 'home',
        data() {

            return {

              lunbo:[
                {
                  img1:'shop_img/5Gtaocan.jpg'
                },
                {
                  img1:'shop_img/danshen.jpg'
                },
                {
                  img1:'shop_img/lianghao.jpg'
                },
                {
                  img1:'shop_img/shouji.jpg'
                },
              ],
              kuandai:[
                {
                  img2:'shop_img/l50.png',
                  title:'超快 50M 🏎跑车速度'
                },
                {
                  img2:'shop_img/l100.png',
                  title:'超快 100M 🚀火箭速度'
                },
                {
                  img2:'shop_img/l1000.png',
                  title:'超快 1000M 🛸飞碟速度'
                },
              ],
              phoneimgs:[
                {
                  img3:'shop_img/shouji1.jpg',
                  title:'华为 Mate30 5G版',
                  neicun:'256GB',
                  jiage:'￥5499'
                },
                {
                  img3:'shop_img/shouji3.jpg',
                  title:'华为 P30',
                  neicun:'128GB',
                  jiage:'￥4999'
                },
                {
                  img3:'shop_img/shouji5.jpg',
                  title:'vivo NEX3 5G版',
                  neicun:'256GB',
                  jiage:'￥5698'
                },
              ],
              shangwang:[
                {
                  img4:'shop_img/shangwang2.jpg',
                  title:'大流量套餐'
                },
                {
                  img4:'Img/shangwang4.png',
                  title:'畅爽冰淇淋'
                },
                {
                  img4:'shop_img/shangwang5.jpg',
                  title:'5G畅爽套餐'
                },
              ],

            }

        },
        mounted() {
        }

    }

</script>

<style scoped>
  @import "home.css";

</style>



<template>
    <div id="homepage">
      <el-container>

        <el-header class="header_index">
          <el-carousel :interval="3000" type="card" height="180px">
            <el-carousel-item v-for="(item,index) in lunbo" :key="index">
              <h3 class="medium"><img :src="item.img1" class="image"></h3>
            </el-carousel-item>
          </el-carousel>
        </el-header>

        <el-container>
          <el-aside width="130px" class="aside_index">
            <div>
                <el-button type="text">宽带专区</el-button>
                <el-button type="text">手机专区</el-button>
                <el-button type="text">流量专区</el-button>
                <el-button type="text" icon="el-icon-phone">客服</el-button>
            </div>
          </el-aside>



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
                        <el-popover
                          placement="top-start"
                          :title="o.title"
                          width="285"
                          height="150"
                          trigger="hover"
                          :content="o.content">
                          <el-button type="text" class="button" slot="reference">商品详情</el-button>
                        </el-popover>
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
                        <el-popover
                          placement="top-start"
                          :title="o.title"
                          width="285"
                          height="150"
                          trigger="hover"
                          :content="o.content">
                        <el-button type="text" class="button" slot="reference">商品详情</el-button>
                        </el-popover>
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
                        <el-popover
                          placement="top-start"
                          :title="o.title"
                          width="285"
                          height="150"
                          trigger="hover"
                          :content="o.content">
                          <el-button type="text" class="button" slot="reference">商品详情</el-button>
                        </el-popover>
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
<!--这是一段没有用的话-->

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
                  title:'超快 50M 🏎跑车速度',
                  content:'50M宽带给你跑车般的速度体验'
                },
                {
                  img2:'shop_img/l100.png',
                  title:'超快 100M 🚀火箭速度',
                  content:'100M宽带给你火箭般的速度体验'
                },
                {
                  img2:'shop_img/l1000.png',
                  title:'超快 1000M 🛸飞碟速度',
                  content:'1000M宽带给你飞碟般的速度体验'
                },
              ],
              phoneimgs:[
                {
                  img3:'shop_img/shouji1.jpg',
                  title:'华为 Mate30 5G版',
                  neicun:'256GB',
                  jiage:'￥5499',
                  content:'突破视觉的边界，洞见影像的力量,探索性能的未来，释放能量的可能'
                },
                {
                  img3:'shop_img/shouji3.jpg',
                  title:'华为 P30',
                  neicun:'128GB',
                  jiage:'￥4999',
                  content:'看的更远，看清更多，探索更近一步'
                },
                {
                  img3:'shop_img/shouji5.jpg',
                  title:'vivo NEX3 5G版',
                  neicun:'256GB',
                  jiage:'￥5698',
                  content:'NEX系列5G首发，跨越时代，直通未来，NEX 3 采用高通骁龙855 Plus处理器，带来强劲运算与图形性能，多任务运行顺畅无阻。'
                },
              ],
              shangwang:[
                {
                  img4:'shop_img/shangwang2.jpg',
                  title:'大流量套餐',
                  content:'梦王卡专享中石加油卡，充值9.4折，多充多减！'
                },
                {
                  img4:'shop_img/shangwang4.png',
                  title:'畅爽冰淇淋',
                  content:'4G畅爽冰激凌国内流量不限量-129元/月、4G畅爽冰激凌国内流量不限量-199元/月、畅爽全国冰激凌套餐398元档。'
                },
                {
                  img4:'shop_img/shangwang5.jpg',
                  title:'5G畅爽套餐',
                  content:'畅爽冰激凌5G套餐129元、159元、199元产品提供5G优享服务，下行速率最高500Mbps，上行速率最高100Mbps；299元、399元、599元产品提供5G极速服务，下行速率最高1Gbps，上行速率最高100Mbps。'
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



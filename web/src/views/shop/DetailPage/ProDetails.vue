<template>
  <div class="container" id="prodetails">
    <div class="productInfo">
      <div class="productImg">
        <div class="bigImg">
            <div class="item-pic magnifier-box" style="height:480px;width:480px;">
                <pic-zoom :url="bigUrl" :scale="2"></pic-zoom>
            </div>
            <!-- <img src="shop_img/huawei.png"> -->
        </div>
        <div class="imgBox">
          <div class="miniImgBox">
            <ul class="miniImg">
              <li v-for="(pic,index) in miniPic" :key="index">
                <a href="javascript:"  @click="showbigpic(pic.img1)" ><img :src="pic.img1"></a>
              </li>              
            </ul>
          </div>
          <a href="javascript:" class="stoleft"></a>
          <a href="javascript:" class="storight"></a>
        </div>
      </div>
      <div class="productContent">
        <div class="d-name">HUAWEI MATE30</div>
        <div class="prices"><span class="n-price">￥6899.00</span><span class="o-price">￥6899.99</span></div>
        <div class="starScore">
							<span class="star">
								<img src="shop_img/bon-star.png">
								<img src="shop_img/bon-star.png">
								<img src="shop_img/bon-star.png">
                <img src="shop_img/bon-star.png">
                <img src="shop_img/boff-star.png">
							</span>4.5 <span style="color:#cccccc;margin:0 10px">|</span>
          <span class="reviewsCount">5 条评论</span>
        </div>
        <div class="quantityColor">
          <div class="color">颜色：
            <div class="colorList"><span class="colorPiece"><span style="background:#000000;"></span></span></div>
          </div>
          <div class="quantity">
            <span style="margin-right:40px;">数量：</span>
            <a class="slow" href="javascript:" v-on:click="changeCount(-1)">-</a>
            <input type="text" class="qty" value="1" v-model="counter" disabled>
            <a class="add" href="javascript:" v-on:click="changeCount(1)">+</a>
          </div>

        </div>
        <div class="toCart">
          <a href="http://localhost:9527/#/mycarts">加入购物车
          <button type="button" id="addCart">加入购物车</button></a>
        </div>
      </div>


    </div>


  </div>
     
  <!--    <div id=""> {{msg}}</div>-->

</template>


<script>
import PicZoom from 'vue-piczoom'
export default {
    name: 'prodetails',
    components: {
        PicZoom
    },
    data() {
        return {
            msg: '商品详情',
            counter: 1,
            bigUrl:'shop_img/huawei.png',
            miniPic:[
                {
                    img1:'shop_img/huawei.png'
                },
                {
                    img1:'shop_img/huawei1.png'
                },
                {
                    img1:'shop_img/huawei2.png'
                },
                {
                    img1:'shop_img/huawei3.png'
                }, {
                    img1:'shop_img/huawei4.png'
                },
            ],
        }
    },
    methods: {
        changeCount: function (way) {
            if (way > 0) {
                this.counter++;
            } else {
                this.counter--;
                if (this.counter < 1) {
                this.counter = 1;
                }
            }    
        },
        showbigpic(minipic){
            this.bigUrl = minipic;
        }
    },
}
</script>
<style lang="scss">
  @import './ProDetails.scss';
</style>

<template>
  <div class="container">
    <div class="productInfo">
      <div class="productImg">
        <div class="bigImg"><img src="shop_img/huawei.png"></div>
        <div class="imgBox">
          <div class="miniImgBox">
            <ul class="miniImg">
              <li>
                <a href="javascript:"><img src="shop_img/huawei.png"></a>
              </li>
              <li>
                <a href="javascript:"><img src="shop_img/huawei1.png"></a>
              </li>
              <li>
                <a href="javascript:"><img src="shop_img/huawei2.png"></a>
              </li>
              <li>
                <a href="javascript:"><img src="shop_img/huawei3.png"></a>
              </li>
              <li>
                <a href="javascript:"><img src="shop_img/huawei4.png"></a>
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

  export default {
    name: 'prodetails',
    data() {

      return {
        msg: '商品详情',
        counter: 1,
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
        console.log();
      }
    },
    mounted() {
    }

  }

</script>


<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .productInfo {

    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    margin-top: 50px;

  }

  .productImg {
    align-self: flex-start;
  }

  .imgBox {
    position: relative;
    width: 500px;
    margin: 0 auto;
    margin-top: 35px;
  }

  .miniImgBox {
    width: 475px;
    margin: 0 auto;
    overflow: hidden;
    /*margin-left:-10px;*/
    /*margin-right:-10px;*/
  }

  ul.miniImg {
    width: 20000px;
    overflow: hidden;
    list-style: none;
    padding: 0;

  }

  ul.miniImg li {
    margin: 0 5px;
    float: left;

  }

  ul.miniImg li a {
    display: block;
    width: 85px;
    height: 85px;
    border: 1px solid #CCCCCC;
    position: relative;
  }

  ul.miniImg li a img {
    max-width: 100%;
    max-height: 83px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .storight, .stoleft {
    top: 40%;
    display: block;
    position: absolute;
    height: 24px;
    width: 14px;
  }

  .stoleft {

    left: 0;
    background-image: url("../../../../public/shop_img/dtoleft.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  .storight {
    right: 0;
    background-image: url("../../../../public/shop_img/dtoright.png");
    background-repeat: no-repeat;
    background-position: center;

  }

  .bigImg {
    width: 500px;
    height: 500px;
    position: relative;
    border: 1px solid #E6E6E6;
  }

  .bigImg img {
    max-height: 500px;
    max-width: 100%;
    width: 500px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .productContent {
    align-self: flex-start;
    margin-left: 30px;

  }

  .d-name {
    font-size: 20px;
    color: #333333;
    margin-bottom: 20px;
  }

  .starScore {

    color: #333333;
    font-size: 14px;
    margin-top: 10px;
  }

  .reviewsCount {
    /*margin-left:10px;*/
    display: inline-block;
    border-bottom: 1px solid #333333;
    line-height: 1;
  }

  .n-price {

    color: #1A1A1A;
    font-size: 36px;
    font-weight: bolder;

  }

  .o-price {
    color: #999999;
    text-decoration: line-through;
    font-size: 13px;
    margin-left: 13px;

  }

  .quantityColor {
    margin-top: 20px;
    padding: 25px 20px;
    background: #F9F9F9;
    color: #333333;
  }

  .colorList {
    display: inline-block;
    margin-left: 30px;
  }

  .colorList span {
    display: inline-block;
  }

  .colorList .colorPiece {

    width: 30px;
    height: 30px;
    padding: 4px;
    border: 1px solid #4D4D4D;
  }

  .colorPiece span {
    width: 20px;
    height: 20px;
  }

  a.slow, a.add {
    width: 30px;
    height: 30px;
    background: #F9F9F9;
    outline: none;
    border: 1px solid #CCCCCC;
    color: #333333;
    font-size: 20px;
    text-align: center;
    line-height: 26px;
    display: inline-block;
    text-decoration: none;
    float: left;

  }

  a.slow {
    border-right: none;
  }

  a.add {
    border-left: none;
  }

  input.qty {
    width: 50px;
    height: 30px;
    text-align: center;
    background: #F9F9F9;
    outline: none;
    border: 1px solid #CCCCCC;
    float: left;
    border-left: none;
    border-right: none;

  }

  .quantity {
    color: #373636;
    font-size: 13px;
    margin-top: 20px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }

  .toCart {
    color: #4D4D4D;
    font-size: 18px;
    margin-top: 15px;
  }

  button#addCart {
    width: 294px;
    text-transform: uppercase;
    line-height: 42px;
    text-align: center;
    border: none;
    color: #ffffff;
    font-size: 16px;
    background: #333333;
    outline: none;
    cursor: pointer;
  }


</style>

<template>
  <div id="order">
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="个人中心">
        <myorder></myorder>
      </el-tab-pane>
      <el-tab-pane label="我的订单">
        <mycenter></mycenter>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
  import myorder from './myorder.vue';
  import mycenter from './mycenter.vue';
export default {
    name:'order',
    components:{myorder,mycenter},
    data(){
      return{
        tabPosition:"left"
      }
    }
}
</script>

<style scoped>
    @import './order.css';
</style>

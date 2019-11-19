<template>
  <div id="order">
    <el-tabs :tab-position="tabPosition" type="border-card" style="height: 600px;margin-top: 15px;">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-star-off"></i> 个人中心</span>
        <mycenter></mycenter>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-goods"></i> 我的订单</span>
        <myorder></myorder>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
  import myorder from './myorder.vue';
  import mycenter from './mycenter.vue';
export default {
    name:'order',
    components:{
      myorder,
      mycenter
    },
    data(){
      return{
        tabPosition:"left",

      }
    }
}
</script>
<style lang="scss">
#order{
    height:100%;
    min-width: 1280px;
    max-width: 1280px;
    margin: 0 auto;
    .el-tabs__content{
        margin-top:20px;
    }
}
</style>

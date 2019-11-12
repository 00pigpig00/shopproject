<template>
<el-container>
  <el-header>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <i class="el-icon-office-building" style="float: left;line-height: 60px;color: white;font-size: 15px">商城首页</i>
      <i class="el-icon-location" style="float: left;line-height: 60px;color: white;font-size: 15px">广东</i>

      <el-submenu index="1" style="float: right">
        <template slot="title">处理中心</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2" style="float: right">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <!--<el-submenu index="2-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
        <!--</el-submenu>-->
      </el-submenu>
      <el-menu-item index="3" style="float: right">消息中心</el-menu-item>
      <el-menu-item index="4" style="float: right"><a href="https://www.baidu.com" target="_blank">订单管理</a></el-menu-item>
    </el-menu>

  </el-header>
  <el-main>
    <div class="main_heaad">
      <div style="margin-top: 15px;float: right">
        <el-input  placeholder="请输入内容" v-model="input" class="input-with-select" style="width:230px;background-color: #fff">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="logo">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573537163652&di=bcb2797afd25bc7b3badce06ad77b426&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01bcc557fb4b2ea84a0e282b76272e.png" style="width: 200px;height: 135px">
        <a href="#none" class="text" style="color: #666666;font-size: 18px ;font-weight: bold;width: 100px;height: 40px">
          购物车
        </a>
      </div>
    </div>
    <template>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="商品"
          width="350">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="num"
          label="单价"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="name"
          label="数量"
          width="220">
          <el-input-number v-model="num" :step="1" :min="1" :max="5" style="width: 100px"></el-input-number>
        </el-table-column>
        <el-table-column
          prop="num"
          label="小计"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="操作"
          show-overflow-tooltip>
          <el-button icon="el-icon-delete"></el-button>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </template>
  </el-main>
  <el-footer>
    <div class="fixde-bottom">
      <div class="cart-checkbox">

      </div>
    </div>

  </el-footer>

</el-container>
       
</template>


<script>

    export default {
        name: 'mycarts',
        data() {

            return {
              num: 1,
              activeIndex: '1',
              activeIndex2: '1',
              input: '',
              tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                num: '1',
                address: '上海市普陀区金沙江路 1518 弄'

              }, {
                date: '2016-05-02',
                name: '王小虎',
                num:'2',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                num:'3',
                address: '上海市普陀区金沙江路 1518 弄'
              }],
              multipleSelection: []
            };

        },
        mounted() {

        },
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          },
          toggleSelection(rows) {
            if (rows) {
              rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
              });
            } else {
              this.$refs.multipleTable.clearSelection();
            }
          },
          handleSelectionChange(val) {
            this.multipleSelection = val;
          }
        },

    }

</script>


<style>
@import "Carts.css";

</style>

<template>
  <el-container>
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
            property="goodsName"
            label="商品"
            width="350">
            <template slot-scope="scope">
              <img :src="scope.row.image" style="width: 50px;height: 50px">
              {{scope.row.goodsName}}
            </template>
          </el-table-column>
          <el-table-column
            property="price"
            label="单价"
            show-overflow-tooltip>
            <template slot-scope="scope">
              ¥{{scope.row.price}}
            </template>
          </el-table-column>
          <el-table-column
            property="number"
            label="数量"
            width="220">
            <template slot-scope="scope">
              <el-button size="mini"  @click="handleSubtract(scope.$index, scope.row)">-</el-button>
              {{scope.row.number}}
              <el-button size="mini" type="danger" @click="handleAdd(scope.row)">+</el-button>
            </template>

          </el-table-column>

          <el-table-column
            label="操作"
            show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button size="mini" @click="remove(scope.$index)">移除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </template>
    </el-main>
    <el-footer>
      <div class="fixde-bottom">
        <a href="#">
          <el-button label="去结算" style="width:100px;height: 50px;background-color: red;float: right;line-height: 50px;text-align: center;color: #ffffff" >去结算</el-button>
        </a>
        <div style="float: right;line-height: 50px;padding-right: 80px">总价：&nbsp;&nbsp;¥{{calculate}}</div>
      </div>

    </el-footer>

  </el-container>
     
</template>


<script>
  import picture1 from '../../../common/images/phone1.jpg'
  import picture2 from '../../../common/images/phone2.jpg'
  import picture3 from '../../../common/images/phone3.jpg'
  import picture4 from '../../../common/images/num1.png'

  export default {
    name: 'mycarts',
    data() {

      return {
        productList:[],
        totalMoney: 0,
        num: 1,
        activeIndex: '1',
        activeIndex2: '1',
        input: '',
        tableData:  [
          {
            goodsName: "iphone7",
            price: 2555,
            number: 1,
            image:picture1
          },
          {
            goodsName: "iphone8",
            price: 4399,
            number: 1,
            image:picture2
          },
          {
            goodsName: "iphone9",
            price: 5999,
            number: 1,
            image:picture3
          },
          {
            goodsName: "iphone10",
            price: 7299,
            number: 1,
            image:picture4
          }
        ],
        currentRow: null,
        multipleSelection:[],
      };
    },
    components: {},
    mounted() {

    },
    computed: {

      calculate: function() {
        // this.tableData.forEach(val=>{})
        // this.multipleSelection
        var sum = 0;
        if(this.multipleSelection.length>0){

          for (var i = 0; i < this.multipleSelection.length; i++) {
            sum += this.multipleSelection[i].price * this.multipleSelection[i].number;
          }

        }
        return sum;
      }
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
        // this.multipleSelection.forEach(value=>{value.status = true})
        console.log('val',this.multipleSelection)
      },

      handleSubtract(index, row,event) {
        if(row.number>1){
          row.number-=1;
        }
      },
      handleAdd(row) {
        row.number += 1;
      },
      remove(index) {

        this.$confirm('您确认删除该商品么?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index, 1);

          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  };

</script>


<style>
  @import "Carts.css";

</style>

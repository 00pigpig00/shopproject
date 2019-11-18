<template>
    <el-container>
        <div id="cartspage">
            <div class="main_heaad">
                <div class="logo">
                <a href="#none" class="text" style="color: #666666;font-size: 18px ;font-weight: bold;width: 100px;height: 40px">
                    我的购物车
                </a>
                </div>
                <div style="margin-top: 15px;float: right">
                    <el-input  placeholder="请输入内容" v-model="input" class="input-with-select" style="width:230px;background-color: #fff">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </div>
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
            <div class="fixde-bottom">
                <div class="cancel-select"><el-button @click="toggleSelection()">取消选择</el-button></div>
                <div class="allcount"><div style="padding-right: 40px">总价：&nbsp;&nbsp;¥{{calculate}}</div>
                <el-button label="去结算" type="danger" @click="goCount">去结算</el-button></div>
            </div>
        </div>
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
    computed: {
        calculate: function() {
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
        },
        goCount(){
            this.$router.push('/order')
        }
    }
  };

</script>


<style lang="scss">
  @import "Carts.scss";

</style>
<style scoped>
  .el-container{
    min-height:750px;
  }
</style>

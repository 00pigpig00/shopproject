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
                        <img :src="userinfos.userimg" alt="">
                        <span>个人头像</span>
                    </div>
                    <div class="infos">
                        <p>
                            <label for="">用户名</label>
                            <span>{{userinfos.username}}</span>
                        </p>
                        <p>
                            <label for="">手机号</label>
                            <span>{{userinfos.userphone}}</span>
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
                    <ul class="addr-ul">
                        <li v-for="(address,key) in myaddress" :key="key" v-if="key<defaultShow">
                        <dl>
                            <dt>{{address.userName}}</dt>
                            <dd class="address">{{address.province}}{{address.city}}{{address.county}}{{address.streetName}}</dd>
                            <dd class="tel">{{address.tel}}</dd>
                        </dl>
                        <div class="addr-opration addr-edit" @click="handleEdit(address )">
                            <i class="el-icon-edit-outline"></i>
                        </div>
                        <div class="addr-opration addr-del" @click="handleDel(address,key)">
                            <a href="javascript:;" class="addr-del-btn">
                            <i class="el-icon-delete"></i>
                            </a>
                        </div>
                        <div class="addr-opration addr-default" v-if="address.isDefault">默认地址</div>
                        </li>
                        <li class="addr-new" @click="addNewAddress">
                        <div class="add-new-inner">
                            <i class="el-icon-plus">
                            </i>
                            <p>添加新地址</p>
                        </div>
                        </li>
                    </ul>
                    </div>
                    <div class="shipping-addr-more">
                    <a class="addr-more-btn up-down-btn" href="javascript:;" @click="showMore">
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
        <!-- 增加收货地址弹框 -->
        <el-dialog :title="modalType" :visible.sync="showAddress">
            <el-form :model="form">
                <el-form-item label="收件人名称" label-width="120px">
                    <el-input v-model="form.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="收件人手机" label-width="120px">
                    <el-input v-model="form.tel" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="收件人地址" label-width="120px">
                    <v-distpicker :placeholders="placeholders" @selected="getarea" :province="form.province" :city="form.city" :area="form.county"></v-distpicker>
                    <el-input style="margin-top:15px;" placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元室等" v-model="form.streetName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="设为默认地址" label-width="120px">
                    <el-switch
                        v-model="form.isDefault"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                    </el-switch>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showAddress = false">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
  import {fetchUserAddress,queryUser} from '@/api/shop';
  import VDistpicker from 'v-distpicker'
    export default {
        name: '',
        components:{VDistpicker},
        data() {
            return {value:true,
                myaddress:[],//用户常用地址
                activeNames: ['1'],
                userinfos:[],//用户个人信息
                showAddress:false,
                areas:'',
                modalType:'增加收货地址',
                defaultShow:3,
                placeholders: {
                    province: '------- 省 --------',
                    city: '--- 市 ---',
                    area: '--- 区 ---',
                },
                form: {
                    userName: '',
                    isDefault:false,
                    tel: '',
                    streetName:'',
                    province:'',
                    city:'',
                    dist:'',
                },
                tempForm:{}
            }
        },
        mounted() {
            this.getmyAddress();//获取用户常用地址
            this.getmyinfo();//获取用户个人信息
        },
        methods:{
            //获取用户常用地址
            getmyAddress(){
                fetchUserAddress().then(res=>{
                    if(res.code==20000){
                        this.myaddress = res.data.items;
                    };
                    console.log('地址',res)
                })
            },
            //获取用户个人信息
            getmyinfo(){
                queryUser({"userid":"lixiaoshuang"}).then(result=>{
                console.log('结果',result)
                this.userinfos = result.data.items[0];
                })
            },
            addNewAddress(){
                this.form.userName = null;
                this.form.isDefault = null;
                this.form.tel = null;
                this.form.streetName = null;
                this.form.city = null;
                this.form.province = null;
                this.form.dist = null;
                this.showAddress = true;
                this.modalType = '增加收货地址';
            },
            getarea(area){
                console.log(area)
                this.areas = `${area.province.value}${area.city.value}${area.area.value}`;
                this.form.province =area.province.value;
                this.form.city = area.city.value;
                this.form.dist = area.area.value;
            },
            //  确认新增收货地址
            confirm(){
                if(this.modalType == '增加收货地址' ){
                    this.form.streetName = `${this.areas} ${this.form.streetName}`;
                    let arr = this.myaddress;
                    arr.push(this.form);
                    this.myaddress= [...arr];
                    this.showMore()
                    console.log('----',this.myaddress)
                }else{
                    let index = this.myaddress.indexOf(this.tempForm);
                    this.myaddress.splice(index,1,this.form);
                }
                this.showAddress = false;
            },
            //修改操作
            handleEdit(address){
                this.tempForm = address;
                this.modalType = '修改收件人地址';
                this.showAddress = true;this.form = Object.assign({},this.tempForm);
            },
            // 删除操作
            handleDel(address,index){
                this.$confirm('您确认删除该地址么?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.myaddress.splice(index,1);

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
            // 点击显示更多
            showMore(){
                if(this.defaultShow==3){
                    this.defaultShow = this.myaddress.length;
                }else{
                    this.defaultShow=3;
                }
            }
        }

    }

</script>


<style lang="scss" scoped>
 @import "mycenter.scss";
</style>

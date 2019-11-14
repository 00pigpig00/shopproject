<template>       
    <div id="app">
      <div id="header">
        <p>
          <img src="shop_img/timg.jpg" id="p_bg">
        </p>
      </div>

      <div id="body">
        <el-tabs v-model="activeTab" @tab-click="handleClick" :stretch="true" id="lr">
          <!--登录分页-->
          <el-tab-pane name="first" label="登录">
            <div id="login">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="userName">
                  <el-input v-model.userName="ruleForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <!--<el-form-item label="确认密码" prop="checkPass">-->
                <!--<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="验证码" prop="check">-->
                <!--<el-input v-model.check="ruleForm.check"></el-input>-->
                <!--</el-form-item>-->
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm1')">提交</el-button>
                  <el-button @click="resetForm('ruleForm1')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <!--注册分页-->
          <el-tab-pane name="second" label="注册">
            <div id="register">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="userName">
                  <el-input v-model.userName="ruleForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input v-model.email="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="register('ruleForm')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>


<script>
  export default {
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if(value.length < 1){
          callback(new Error('用户名长度最小2位'));
        }else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请填写邮箱'));
        } else {
          if (value !== '') {
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的邮箱'));
            }
          }
          callback();
        }
      };
      var checkCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请填写验证码'));
        } else {
          if (value !== '') {
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的邮箱'));
            }
          }
          callback();
        }
      };
      return {
        activeTab:'first',
//        ruleForm1: {
//          userName:'',
//          pass: '',
//          check: ''
//        },
        ruleForm: {
          userName:'',
//          userName1:'',
          pass: '',
//          pass1: '',
          checkPass: '',
          email:'',
          check:''
        },
//        rules1: {
//          userName1: [
//            { validator: validateName, trigger: 'blur' }
//          ],
//          pass1: [
//            { validator: validatePass, trigger: 'blur' }
//          ],
//          check: [
//            { validator: checkCode, trigger: 'blur' }
//          ]
//        },
        rules: {
          userName: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          email:[
            { validator: validateEmail, trigger: 'blur' }
          ],
          check: [
            { validator: checkCode, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      register(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功!');
            this.activeTab='first';
            this.$refs[formName].resetFields();
          }
          else {
            console.log('注册失败!!');
            return false;
          }
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功!');
            this.$router.push('./home');
          }
//          else if (valid == ''){
//            alert('请输入账号或密码!');
//          }
          else {
            console.log('登录失败!!');
          return false;
      }
      });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>


<style scoped>
#app{
  width: 100% !important;
}
#body{
  background-image: url("../../../../public/shop_img/map.png");
  height: 740px;
}
#p_bg{
  width: 200px;
  height: 135px;
}

#lr{
  width: 500px;
  margin: auto;
  margin-top: 50px;
  padding: 20px 0;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #e5e5e5;
}
#login,#register{
  width: 350px;
  margin-top: 30px;
}
#header{
  border-bottom: 5px solid #f1404b;
}
#header>p{
  width: 80%;
  margin: 0 auto;
}
</style>

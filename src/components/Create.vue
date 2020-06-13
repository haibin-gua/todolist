<template>
    <el-form ref="form" :model="journal" label-width="100px">
    <el-form-item label="请输入姓名：">
        <el-input type="textarea" v-model="journal.content"></el-input>
    </el-form-item>
     <el-form-item label="请输入年龄：">
        <el-input type="textarea" v-model="journal.age"></el-input>
    </el-form-item>
     <el-form-item label="请输入职务：">
        <el-input type="textarea" v-model="journal.post"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form-item>
    </el-form>
</template>

<script>
let moment = require("moment")  //引入moment组件
  export default {
    data() {
      return {
        date:new Date().toLocaleString(),
        journal: {
          date : moment(this.date).format('YYYY-MM-DD HH:mm'),   //使用moment插件格式化日期
          content:"",
          age:"",
          post:""
        }
      }
    },
    methods: {
      onSubmit() {
        if(this.journal.content == ""){
          this.$alert('别忘了输入内容', {
          confirmButtonText: '确定'
        });
        }else{
          this.$http.post('journal',this.journal).then(res=>{
          this.$message({
          showClose: true,
          message: '创建成功',
          type: 'success'
        });
        this.$router.push('/journal/whole')
        })
        }
      }
    }
  }
</script>
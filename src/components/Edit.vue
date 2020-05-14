<template>
    <el-form ref="form" :model="journal" label-width="100px">
    <el-form-item label="请输入内容：">
        <el-input type="textarea" v-model="journal.content"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="edit">修改</el-button>
         <el-button @click="back">取消</el-button>
    </el-form-item>
    </el-form>
</template>
<script>
  export default {
    data() {
      return {
        journal: {
          
        }
      }
    },
    methods:{
        edit(){
            this.$http.put(`journal/${this.$route.params.id}`,this.journal).then(res=>{
                this.$message({
                    showClose: true,
                    message: '修改成功',
                    type: 'success'
            })
            this.$router.push('/journal/whole')
        });
        },
        back(){
            this.$router.push('/journal/whole')
        }
    },
    created(){
        this.$http.get(`journal/${this.$route.params.id}`).then(res=>{     //需要去路由里面的id
            this.journal = res.data
        })             
    }
  }
</script>
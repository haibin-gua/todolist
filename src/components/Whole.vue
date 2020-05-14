<template>
<div>
    <el-table :data="journal">
        <el-table-column prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="content" label="内容">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteBtn(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
    </el-table-column>
    </el-table>
</div>
</template>

<script>
let moment = require("moment")
  export default {
    data() {
      return{
        journal:[{
          date:""
        }]
      }
    },
    methods:{
      deleteBtn(id){
        this.$http.delete(`journal/${id}`).then(res=>{
        })
        this.$http.get('journal',this.journal).then(res=>{
        this.journal = res.data
      })
      },
      edit(id){
        this.$router.push(`/journal/${id}/edit`)
      }
    },
    created(){
      this.$http.get('journal',this.journal).then(res=>{
        this.journal = res.data
      })
    }
  };
</script>
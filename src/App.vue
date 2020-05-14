<template>
    <el-container style="height: 610px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']" router>
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-date"></i>查看</template>
            <el-menu-item-group>
            <el-menu-item index="/journal/whole">全部</el-menu-item>
            <el-menu-item index="/journal/create">新建</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
    </el-aside>
    
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
        </el-header>
        
    <el-main>
      <router-view></router-view>
    </el-main>
    </el-container>
    </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>



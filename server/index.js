const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(require('cors')())   //引入跨域组件
app.use(express.json()) //表示express识别json
mongoose.connect('mongodb://localhost:27017/journal',{  //创建数据库
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:true
})
const Journal = mongoose.model('Journal',new mongoose.Schema({  //创建数据库模型
    content:{type:String},
    date:{type:String}
}))

app.get('/',async(req,res)=>{
    res.send('index')
})

//新建日志
app.post('/api/journal',async(req,res)=>{
    const journal = await Journal.create(req.body)
    res.send(journal)
})

//查看日志
app.get('/api/journal',async(req,res)=>{
    const journal = await Journal.find(req.body)
    res.send(journal)
})

//删除日志
app.delete('/api/journal/:id',async(req,res)=>{
    await Journal.findByIdAndDelete(req.params.id)   //并不需要返回参数
    res.send({
        status:true
    })
})

//日志详情
app.get('/api/journal/:id',async(req,res)=>{
    const journal = await Journal.findById(req.params.id)
    res.send(journal)
})

//修改日志
app.put('/api/journal/:id',async(req,res)=>{
    const journal = await Journal.findByIdAndUpdate(req.params.id,req.body)  //需要返回修改后的参数
    res.send(journal)
})


app.listen('3000',()=>{
    console.log('3000端口启动成功')
})
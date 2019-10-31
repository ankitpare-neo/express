const express = require('express');
const path = require('path')

const app = express();
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'../templates'))
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req, res)=>{
    res.render('index',{title:'Express'})
})

app.listen(3000,()=>{
    console.log('Listen at Port 3000') 
})


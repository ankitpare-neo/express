const express = require('express');
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express();
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'../templates/views'))
// app.set('partials',path.join(__dirname,'../templates/partials'))
app.use(express.static(path.join(__dirname,'../public')))
hbs.registerPartials(path.join(__dirname,'../templates/partials'))
app.get('',(req, res)=>{
    res.render('index',{title:'Express'})
})
app.get('/about',(req, res)=>{
    res.render('about',{name:'Ankit',company:'NeoSOFT'})
})
app.get('/contact',(req, res)=>{
    res.render('contact',{name:'Ankit',company:'NeoSOFT'})
})  


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

 
app.listen(3000,()=>{
    console.log('Listen at Port 3000') 
})


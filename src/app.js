const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')



const path=require('path')
const express = require('express')
const app=express()
const port=process.env.PORT || 3000


const pathDirectoryName=path.join(__dirname,'../public')
// app.set('view engine','hbs')
 
app.use(express.static(pathDirectoryName))

// below code will not run as we use app.use(express.static(pathDirectoryName))
// app.get('',(req,res)=>{
//     res.send('<h1>HELLO HARSH</h1>')
// })


app.get('/help',(req,res)=>{
    res.send({
        help: 'this is help',
        thanks: 'thanks for opening the website'
    })
})
// app.get('',(req,res)=>{
//     app.render('index',{
//         title: 'Weather App',
//         name: 'Created by harsh Mehta'
//     })
// })

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Please provide the address '
        })
    }
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({
                error
            })
        }
        forecast(data.latitude,data.longitude,(error,forecastData)=>{
            if(error){
                return res.send({
                    error
                })
            }
            res.send({
                location1: data.location,
                forecastData: forecastData
            })
            console.log(data.location)
            console.log(forecastData)
        })
    })
    
    
    
    
    
    
    
    // console.log(req.query.address)
    // res.send({
    //     address: req.query.address,
    //     weather: 'COLD',
    //     temprature: 'LOW'
    // })
})
app.listen(port,()=>{
    console.log('done'+port)
})

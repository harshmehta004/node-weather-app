const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/b5532711f6b9fe3c1ee827c81eb9be76/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?units=si'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect',undefined)
        }else if(response.body.error){
            callback('Unable to find the location',undefined)
    
        }else{
            callback(undefined,{
                temperature: response.body.currently.temperature,
                summary: response.body.currently.summary
            })
            // console.log(response.body.currently)
        }
    })
    
}
module.exports =forecast
const request=require('request')

const geocode=(address,callback)=>{
    const geoUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiaGFyc2htZWh0YSIsImEiOiJjazJ5cWJybXcwMTJ6M2hqd3hpY3VwNDA5In0.7i7vnCmdWW3k8p83doIHfA'
    request({url:geoUrl,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect',undefined)
        }else if(response.body.features.length===0){
            callback('Unable to find location',undefined)
        }else{
            const latitude=response.body.features[0].center[1]
            const longitude=response.body.features[0].center[0]
            console.log(response.body.features[0].place_name)
            console.log(latitude,longitude)
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports = geocode
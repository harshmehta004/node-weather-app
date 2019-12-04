console.log('helllo')
const msg1=document.querySelector('#msg1')
const msg2=document.querySelector('#msg2')
const weatherForm = document.querySelector('form')
const search=document.querySelector('input')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    msg1.textContent='Loading...'
    msg2.textContent=''
    const location=search.value
    console.log(location)

    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            msg1.textContent=data.error
        }
        else{
            console.log(data)
            msg1.textContent=data.location1
            msg2.textContent='Temprature is '+data.forecastData.temperature+' degree Celcius. '+data.forecastData.summary
        }
    })
})
})
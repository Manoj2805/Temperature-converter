let celsius=document.querySelector('#celsius >input')
let fahrenheit=document.querySelector('#fahrenheit >input')
let kelvin=document.querySelector('#kelvin >input')
let btn=document.querySelector('.button button')
function roundnumber(number){
    return Math.round(number*100)/100
}
celsius.addEventListener('input',function(){
    let ctemp=parseFloat(celsius.value)
    let ftemp=(ctemp*(9/5))+32
    let ktemp=ctemp+273.15
    fahrenheit.value=roundnumber(ftemp)
    kelvin.value=roundnumber(ktemp)
})
fahrenheit.addEventListener('input',function(){
    let ftemp=parseFloat(fahrenheit.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp=(ftemp-32)*(5/9)+273.15
    celsius.value=roundnumber(ctemp)
    kelvin.value=roundnumber(ktemp)
})
kelvin.addEventListener('input',function(){
    let ktemp=parseFloat(kelvin.value)
    let ctemp=ktemp-273.15
    let ftemp=(ktemp-273.15)*(9/5)+32
    celsius.value=roundnumber(ctemp)
    fahrenheit.value=roundnumber(ftemp)
})
btn.addEventListener('click',()=>{
    celsius.value=""
    fahrenheit.value=""
    kelvin.value=""
})
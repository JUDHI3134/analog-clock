let hrElement = document.querySelector(".hr")
let minElement = document.querySelector(".min")
let secElement = document.querySelector(".sec")


setInterval(()=>{
    let date = new Date();
    let hr = date.getHours()*30
    let min = date.getMinutes()*6
    let sec = date.getSeconds()*6

    hrElement.style.transform = `rotateZ(${(hr) + min/12}deg)`
    minElement.style.transform = `rotateZ(${min}deg)`
    secElement.style.transform = `rotateZ(${sec}deg)`

})
setInterval(()=>{
    const date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    document.querySelector('.hours').textContent = hours
    document.querySelector('.minutes').textContent = minutes
    document.querySelector('.seconds').textContent = seconds

}, 1000)
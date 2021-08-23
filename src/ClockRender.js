function ClockRender(){
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()+1
    let date = today.getDate()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    return String(year)+ '년 '
            + String(month) + '월 '
            + String(date) + '일 '
            + String(hours).padStart(2,'0') + '시 '
            + String(minutes).padStart(2,'0') + '분 '
            + String(seconds).padStart(2,'0') + '초'
}

function parserHour(hours,day){
    if(day==='PM') hours=String(12+parseInt(hours))
    return hours
}

function parserDay(hour,minutes){
    let time = ''
    if(hour>12) {
        time='오후 '
        hour-=12 
    }
    else time='오전 '

    hour = String(hour).padStart(2,'0')
    time+=hour + '시 '+minutes+'분'

    return time
}

export {
    ClockRender,
    parserHour,
    parserDay
}
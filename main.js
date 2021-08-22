require('./main.css')
const { InitialRoutes, historyRoutePush } = require('./router')
const {checkAlarm} = require('./src/Alarm')
const AppDiv = document.querySelector('.contents')

InitialRoutes(AppDiv)
window.onload = () => {
    const historyLinker = document.querySelectorAll('.link')

    historyLinker.forEach(el => {
      el.addEventListener('click', (event) => {
        const pathname = event.target.getAttribute('route')
        historyRoutePush(pathname, AppDiv)
      })
    })
  
}

let localAlarmObj = JSON.parse(localStorage.getItem('alarm-array'))
let localAlarmList= []
if(localAlarmObj) localAlarmObj.map(el=>localAlarmList.push(el.item))

function Clock () {
    const clock = document.querySelector('.clock')
    let today = new Date()
    
    let year = today.getFullYear()
    let month = today.getMonth()+1
    let date = today.getDate()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    let alarmCheck = String(hours).padStart(2,'0')+String(minutes).padStart(2,'0')

    if(localAlarmList.includes(alarmCheck)){
      alert(hours+"시 "+minutes+"분"+" 알람")
      
      let index = localAlarmList.indexOf(alarmCheck)
      localAlarmList.splice(index,1)

      localAlarmObj=localAlarmObj.filter(el=>el.item!==alarmCheck)
      localStorage.setItem('alarm-array',JSON.stringify(localAlarmObj))
      
      const path = document.querySelector("section div")
      if(path.classList.contains("Alarm")) checkAlarm()
      
    }

    clock.innerText = String(year)+ '년 '
                        + String(month) + '월 '
                        + String(date) + '일 '
                        + String(hours).padStart(2,'0') + '시 '
                        + String(minutes).padStart(2,'0') + '분 '
                        + String(seconds).padStart(2,'0') + '초'
}


Clock()
setInterval(Clock,1000)

import './main.css'
import { InitialRoutes, historyRoutePush } from './router'
import {checkAlarm,isAlarmChange} from './src/Alarm'

const ALARM_KEY = 'alarm-array'
const AppDiv = document.querySelector('.contents')

// 첫 페이지 실행
InitialRoutes(AppDiv)

window.onload = () => {
    const historyLinker = document.querySelectorAll('.link')

    // 페이지 넘어갈 버튼 생성
    historyLinker.forEach(el => {
      el.addEventListener('click', (event) => {
        const pathname = event.target.getAttribute('route')
        historyRoutePush(pathname, AppDiv)
      })
    })
  
}

// local storage에 저장된 알람 객체
let localAlarmObj = JSON.parse(localStorage.getItem(ALARM_KEY))
// 알람 객체에서 시간만 저장된 배열
let localAlarmArr= []
if(localAlarmObj) localAlarmObj.map(el=>localAlarmArr.push(el.item))

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

    // 시계 생성
    clock.innerText = String(year)+ '년 '
                        + String(month) + '월 '
                        + String(date) + '일 '
                        + String(hours).padStart(2,'0') + '시 '
                        + String(minutes).padStart(2,'0') + '분 '
                        + String(seconds).padStart(2,'0') + '초'


    
    //알람 앱에서 추가되거나 삭제된 것이 있는지 확인
    if(isAlarmChange()){
      // 추가나 삭제되었을 때 알람 배열 갱신
      localAlarmObj = JSON.parse(localStorage.getItem(ALARM_KEY))
      localAlarmArr= []
      if(localAlarmObj) localAlarmObj.map(el=>localAlarmArr.push(el.item))
    }
    
    // local stoarge에 저장된 알람과 현재 시간이 일치하는지 확인
    if(localAlarmArr.includes(alarmCheck)){
      // 알람 실행
      alert(hours+"시 "+minutes+"분"+" 알람")
      
      let index = localAlarmArr.indexOf(alarmCheck)
      localAlarmArr.splice(index,1)

      // local stoarge에서 울린 알람 삭제
      localAlarmObj=localAlarmObj.filter(el=>el.item!==alarmCheck)
      localStorage.setItem(ALARM_KEY,JSON.stringify(localAlarmObj))
      
      // 알람 앱에서 알람이 실행된 경우 HTML에 있는 알람 시간 element 삭제
      const path = document.querySelector("section div")
      if(path.classList.contains("Alarm")) checkAlarm()
      
    }
  
}


Clock()
setInterval(Clock,1000)

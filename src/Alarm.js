const ALARM_KEY = 'alarm-array'
let alarmList
let alarmArr = localStorage.getItem(ALARM_KEY)
let alarmChange = false
function alarm(){
    let alarmNewBtn = document.querySelector('.alarm-new')
    let alarmBackBtn = document.querySelector('.alarm-back')
    let inputform = document.querySelector('.alarm-input-form')
    let saveAlarmBtn = document.querySelector('.save-alarm')
    alarmList = document.querySelector('.alarm-list')
    alarmArr = localStorage.getItem(ALARM_KEY)

    // local storage에 저장된 알람
    if(!alarmArr) alarmArr=[]
    else alarmArr = JSON.parse(alarmArr)
    alarmArr.forEach(renderAlarmList)

    // 뒤로 가기
    alarmBackBtn.addEventListener('click',()=>{
        window.history.back()
    })

    // 알람 생성 버튼 클릭시 이벤트
    alarmNewBtn.addEventListener('click',()=>{
        inputform.classList.remove('invisible')
    })

    // 알람 저장 버튼 클릭시 이벤트
    saveAlarmBtn.addEventListener('click',()=>{
        let day= document.getElementById('day')
        let hours= document.getElementById('hours')
        let minutes= document.getElementById('minutes')
        day = day.options[day.selectedIndex].value
        hours = hours.options[hours.selectedIndex].value
        minutes = minutes.options[minutes.selectedIndex].value

        // 오후인 경우 시에 12를 더함
        if(day==='PM') hours=String(12+parseInt(hours))

        let newAlarm = {
            id : Date.now(),
            item : hours+minutes
        }

        // 새로 생긴 알람 local storage에 저장
        renderAlarmList(newAlarm)
        alarmArr.push(newAlarm)
        localStorage.setItem(ALARM_KEY,JSON.stringify(alarmArr))

        // 알람이 추가됨
        alarmChange = true
        inputform.classList.add('invisible')
    })

}

// 알람 랜더링 함수
function renderAlarmList(newAlarm){
    let time = newAlarm.item
    let hour = parseInt(time.slice(0,2))
    let minutes = time.slice(2)

    if(hour>12) {
        time='오후 '
        hour=String(hour-12).padStart(2,'0')
    }
    else time='오전 '

    time+=hour + '시 '+minutes+'분'

    const li = document.createElement("li")
    li.id = newAlarm.id
    const span = document.createElement("span")
    span.innerText=time
    const button = document.createElement("button")
    button.innerText="삭제"
    button.addEventListener("click",deleteAlarm)
    li.appendChild(span)
    li.appendChild(button)
    alarmList.appendChild(li)
}

// 알람 제거 함수
function deleteAlarm(event){
    const target_li = event.target.parentElement

    // 동일한 시간 알람이 한번에 삭제되는 것을 막기 위해 ID로 비교해서 삭제
    alarmArr=alarmArr.filter(el=>el.id!==parseInt(target_li.id))
    localStorage.setItem(ALARM_KEY,JSON.stringify(alarmArr))
    target_li.remove()

    alarmChange = true
}

// 알람이 울렸을 때 HTML 에서 울린 알람 element 삭제
function checkAlarm(){
    alarmArr = JSON.parse(localStorage.getItem(ALARM_KEY))
    let alarmContainer = document.querySelector('.alarm-container')

    alarmList.remove()
    let ul = document.createElement('ul')
    ul.classList.add('alarm-list')
    
    alarmContainer.appendChild(ul)
    alarmList=ul
    alarmArr.forEach(renderAlarmList)
}

// 알람 변경을 확인하는 함수
function isAlarmChange(){
    if(alarmChange) {
        alarmChange=false
        return true
    }
    return false
}

export {
    alarm,
    checkAlarm,
    isAlarmChange
}
const ALARM_KEY = 'alarm-array'

function alarm(){
    const alarmNewBtn = document.querySelector('.alarm-new')
    const alarmBackBtn = document.querySelector('.alarm-back')
    const inputform = document.querySelector('.alarm-input-form')
    const saveAlarmBtn = document.querySelector('.save-alarm')
    const alarmList = document.querySelector('.alarm-list')

    let alarmArr = localStorage.getItem(ALARM_KEY)
    if(!alarmArr) alarmArr=[]
    else alarmArr = JSON.parse(alarmArr)
    alarmArr.forEach(renderAlarmList)

    alarmBackBtn.addEventListener('click',()=>{
        window.history.back()
    })

    saveAlarmBtn.addEventListener('click',()=>{
        let day= document.getElementById('day')
        let hours= document.getElementById('hours')
        let minutes= document.getElementById('minutes')
        day = day.options[day.selectedIndex].value
        hours = hours.options[hours.selectedIndex].value
        minutes = minutes.options[minutes.selectedIndex].value

        if(day==='PM') hours=String(12+parseInt(hours))

        let newAlarm = {
            id : Date.now(),
            item : hours+minutes
        }
        renderAlarmList(newAlarm)
        alarmArr.push(newAlarm)
        localStorage.setItem(ALARM_KEY,JSON.stringify(alarmArr))

        inputform.classList.add('invisible')
    })

    alarmNewBtn.addEventListener('click',()=>{
        inputform.classList.remove('invisible')
    })
    
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
        button.innerText="X"
        button.addEventListener("click",deleteAlarm)
        li.appendChild(span)
        li.appendChild(button)
        alarmList.appendChild(li)
    }

    function deleteAlarm(event){
        const target_li = event.target.parentElement
        alarmArr=alarmArr.filter(el=>el.id!==parseInt(target_li.id))
        localStorage.setItem(ALARM_KEY,JSON.stringify(alarmArr))
        target_li.remove()
    }
}

module.exports = {
    alarm
}
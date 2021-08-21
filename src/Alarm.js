function alarm(){
    const { historyRoutePush } = require('../router')
    const alarmNewBtn = document.querySelector('.alarm-new')
    const alarmBackBtn = document.querySelector('.alarm-back')
    const inputform = document.querySelector('.alarm-input-form')
    const saveAlarmBtn = document.querySelector('.save-alarm')
    const alarmList = document.querySelector('.alarm-list')
    
    
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

        inputform.classList.add('invisible')
    
    })
    alarmNewBtn.addEventListener('click',()=>{
        inputform.classList.remove('invisible')
    })
    
    
}

module.exports = {
    alarm
}
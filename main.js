require('./main.css')

const { InitialRoutes, historyRoutePush } = require('./router')
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

function Clock () {
    const clock = document.querySelector('.clock')
    let today = new Date()
    
    let year = today.getFullYear()
    let month = today.getMonth()+1
    let date = today.getDay()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    clock.innerText = String(year)+ '년 '
                        + String(month) + '월 '
                        + String(date) + '일 '
                        + String(hours).padStart(2,'0') + '시 '
                        + String(minutes).padStart(2,'0') + '분 '
                        + String(seconds).padStart(2,'0') + '초'
}

Clock()
setInterval(Clock,1000)
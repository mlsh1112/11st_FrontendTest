import home_template from './Pages/home.hbs'
import alarm_template from './Pages/alarm.hbs'
import memo_template  from './Pages/memo.hbs'
import image_template  from './Pages/image.hbs'

import {alarm} from './src/Alarm'
import {memo} from './src/Memo'
import {image} from './src/Image'

const Home = home_template()
const Alarm = alarm_template()
const Memo = memo_template()
const Image = image_template()


const routes = {
    '/':Home,
    '/alarm': Alarm,
    '/memo' : Memo,
    '/image': Image
}

// 최초 경로 실행
function InitialRoutes(element){
    element.innerHTML=routes['/']
    window.onpopstate=()=>{
        element.innerHTML=routes[window.location.pathname]
        window.location.reload()
    }
}

// 넘어간 페이지 push 해서 저장
function historyRoutePush(pathname,element){
    // 이전 페이지 저장
    window.history.pushState({},pathname,window.location.origin+pathname)
    // 넘어간 페이지 렌더링
    element.innerHTML=routes[pathname]

    // 페이지로 넘어가면 해당 페이지의 함수 실행
    if(pathname==='/alarm') alarm()
    else if(pathname==='/memo') memo()
    else if(pathname==='/image') image()
}

export {
    InitialRoutes,
    historyRoutePush
}
const home_template = require('./Pages/home.hbs')
const alarm_template = require('./Pages/alarm.hbs')
const memo_template = require('./Pages/memo.hbs')
const image_template = require('./Pages/image.hbs')

const Home = home_template()
const Alarm = alarm_template()
const Memo = memo_template()
const Image = image_template()

const {alarm} = require('./src/Alarm')
const {memo} = require('./src/Memo')
const {image} = require('./src/Image')

const routes = {
    '/':Home,
    '/alarm': Alarm,
    '/memo' : Memo,
    '/image': Image
}


function InitialRoutes(element){
    element.innerHTML=routes['/']
    window.onpopstate=()=>{
        element.innerHTML=routes[window.location.pathname]
        window.location.reload()
    }
}

function historyRoutePush(pathname,element){
    window.history.pushState({},pathname,window.location.origin+pathname)
    element.innerHTML=routes[pathname]
    if(pathname==='/alarm') alarm()
    else if(pathname==='/memo') memo()
    else if(pathname==='/image') image()
}


module.exports = {
    InitialRoutes,
    historyRoutePush
}
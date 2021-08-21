const ICONARR_KEY = 'icon-array'
const HTML = {
    "alarm" : "<div class = 'link-box alarm' draggable='true'><span class = 'link' route='/alarm'>알람</span></div>",
    "memo" : "<div class = 'link-box memo' draggable='true'  ><span class = 'link' route='/memo'>메모</span></div>",
    "image" : " <div class = 'link-box image' draggable='true' ><span class = 'link' route='/image'>사진</span></div>",
}

const Icons = document.querySelectorAll(".drop-zone")
let iconsArray = localStorage.getItem(ICONARR_KEY)
let inital_iconArr = ['alarm','image','memo']

if(!iconsArray){
    localStorage.setItem(ICONARR_KEY,JSON.stringify(inital_iconArr))
}
else{
    iconsArray=JSON.parse(iconsArray)
}

iconsArray.map((el,i)=>{
    Icons[i].innerHTML = HTML[el]
})




const alarmIcon = document.querySelector('.alarm')
const imageIcon = document.querySelector('.image')
const memoIcon = document.querySelector('.memo')

alarmIcon.addEventListener('dragover',allowDrop)
imageIcon.addEventListener('dragover',allowDrop)
memoIcon.addEventListener('dragover',allowDrop)

function allowDrop(ev){
    console.log(ev)
    ev.preventDefault()
}


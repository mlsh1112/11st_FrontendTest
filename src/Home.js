const ICON_KEY = 'icon-array'
const BTNHTML = {
    "alarm" : "<span class = 'link' id='alarm'  route='/alarm'>alarm</span>",
    "memo" : " <span class = 'link' id='memo'   route='/memo'>memo</span>",
    "image" : "<span class = 'link' id='image'  route='/image'>image</span>",
}

const Icons = document.querySelectorAll(".drop-zone")
const linkBoxes = document.querySelectorAll('.link-box')

// 아이콘 순서 배열
let iconsArray = localStorage.getItem(ICON_KEY)
let inital_iconArr = ['alarm','image','memo']

if(!iconsArray){
    iconsArray=inital_iconArr
}
else{
    iconsArray=JSON.parse(iconsArray)
}

renderingIcons()
linkBoxes[0].addEventListener('dragstart',drag)
linkBoxes[1].addEventListener('dragstart',drag)
linkBoxes[2].addEventListener('dragstart',drag)
Icons[0].addEventListener('dragover',allowDrop)
Icons[1].addEventListener('dragover',allowDrop)
Icons[2].addEventListener('dragover',allowDrop)
Icons[0].addEventListener('drop',drop)
Icons[1].addEventListener('drop',drop)
Icons[2].addEventListener('drop',drop)

let startInx = -1 , startIcon = ''
let destInx = -1 , destIcon = ''

function allowDrop(ev){
    ev.preventDefault()
}

function drag(ev){
    startIcon = ev.target.innerText
    startInx=iconsArray.indexOf(startIcon)
}

function drop(ev){
    ev.preventDefault()
    destIcon = ev.target.innerText
    destInx = iconsArray.indexOf(destIcon)

    // 배열 순서 다시 저장
    iconsArray.splice(startInx,1)
    iconsArray.splice(destInx,0,startIcon)
    
    // 재배치된 아이콘에 맞게 랜더링
    renderingIcons()
    window.location.reload()
}

// Home 화면에 배열 순서에 맞게 랜더링
function renderingIcons(){
    iconsArray.map((el,i)=>{
        linkBoxes[i].innerHTML = BTNHTML[el]
    })
    localStorage.setItem(ICON_KEY,JSON.stringify(iconsArray))
}
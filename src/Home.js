const ICONARR_KEY = 'icon-array'
const HTML = {
    "alarm" : "<span class = 'link' id='alarm'  route='/alarm'>alarm</span>",
    "memo" : " <span class = 'link' id='memo'   route='/memo'>memo</span>",
    "image" : "<span class = 'link' id='image'  route='/image'>image</span>",
}

const Icons = document.querySelectorAll(".drop-zone")
const linkBoxes = document.querySelectorAll('.link-box')

let iconsArray = localStorage.getItem(ICONARR_KEY)
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

    iconsArray.splice(startInx,1)
    iconsArray.splice(destInx,0,startIcon)
    
    renderingIcons()
    window.location.reload()
}

function renderingIcons(){
    iconsArray.map((el,i)=>{
        linkBoxes[i].innerHTML = HTML[el]
    })
    localStorage.setItem(ICONARR_KEY,JSON.stringify(iconsArray))
}

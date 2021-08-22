

function image(img1){
    const imageBackBtn = document.querySelector('.image-back')
    const imgScrollView = document.querySelector('.img-scroll-view')
    const imgView = document.querySelector('.img-view')
    

    imageBackBtn.addEventListener('click',()=>{
        window.history.back()
    })

    for(let i=1;i<=10;i++){
        let img_src = require('../src/img/img'+String(i)+'.jpg').default
        const img = document.createElement('img')
        img.src=img_src
        img.classList.add('img-preview')

        img.addEventListener('click',imgClick)
        imgScrollView.appendChild(img)
    }
    
    let exOpenImg = ''
    function imgClick(e){
        const openImg = e.target
        openImg.classList.add('draw-boarder')
        if(exOpenImg){
            exOpenImg.classList.remove('draw-boarder')
            imgView.removeChild(imgView.childNodes[0])
        }
        const img = document.createElement('img')
        img.src = openImg.src
        imgView.appendChild(img)

        exOpenImg=openImg
    }
}

module.exports={
    image
}
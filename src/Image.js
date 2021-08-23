export function image(){
    const imageBackBtn = document.querySelector('.image-back')
    const imgScrollView = document.querySelector('.img-scroll-view')
    const imgView = document.querySelector('.img-view')
    
    // 뒤로 가기
    imageBackBtn.addEventListener('click',()=>{
        window.history.back()
    })

    // 화면에 이미지들을 미리보기 크기로 랜더링
    for(let i=1;i<=10;i++){
        let img_src = require('../src/img/img'+String(i)+'.jpg').default
        const img = document.createElement('img')
        img.src=img_src
        img.classList.add('img-preview')

        img.addEventListener('click',imgClick)
        imgScrollView.appendChild(img)
    }
    
    // 이미지 클릭했을 시 이벤트 함수
    let exOpenImg = ''
    function imgClick(e){
        // 현재 클릭된 이미지 테두리선 추가
        const nowOpenImg = e.target
        nowOpenImg.classList.add('draw-boarder')

        // 이전에 클릭된 이미지에 테두리선 제거 & 전체화면에서 이미지 삭제
        if(exOpenImg){
            exOpenImg.classList.remove('draw-boarder')
            imgView.removeChild(imgView.childNodes[0])
        }

        // 클릭된 이미지 전체화면에 랜더링
        const img = document.createElement('img')
        img.src = nowOpenImg.src
        imgView.appendChild(img)

        exOpenImg=nowOpenImg
    }
}


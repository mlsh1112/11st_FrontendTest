const MEMO_KEY = 'memo-array'

export function memo(){
    const memoBackBtn = document.querySelector('.memo-back')
    const memoNewBtn = document.querySelector('.memo-new')
    const memoInputForm = document.querySelector('.memo-input-form')
    const memoInput = document.querySelector('.memo-input')
    const memoList = document.querySelector('.memo-list')
    
    // local stoarge에 저장된 메모
    let memoArr = localStorage.getItem(MEMO_KEY)
    if(!memoArr) memoArr=[]
    else memoArr=JSON.parse(memoArr)

    // 저장된 메모 랜더링
    memoArr.forEach(renderMemo)

    // 뒤로 가기
    memoBackBtn.addEventListener('click',()=>{
        window.history.back()
    })

    // 메모 새로 만들기 버튼
    memoNewBtn.addEventListener('click',()=>{
        memoInputForm.classList.remove('invisible')
    })

    // 메모를 작성하고 enter key를 클릭했을시 local storage에 저장하고 랜더링하는 이벤트
    memoInput.addEventListener('keypress',(event)=>{
        if(event.keyCode===13){
            let value = event.target.value
            renderMemo(value)
            
            memoArr.push(value)
            localStorage.setItem(MEMO_KEY,JSON.stringify(memoArr))
            memoInputForm.classList.add('invisible')
        }
    })
    
    // 메모를 랜더링하는 함수
    function renderMemo(newMemo){
        const li = document.createElement('li')
        const span = document.createElement('span')
        const hr = document.createElement('hr')

        span.innerText=newMemo
        span.classList.add('ellipsis2')
        span.addEventListener('click',clickMemo)

        li.appendChild(span)
        li.appendChild(hr)
        memoList.appendChild(li)
    }

    // 메모를 클릭했을때 함수
    let exOpenMemo = ''
    function clickMemo(e){
        let nowOpenMemo = e.target
        // 이전 메모는 다시 두줄로 표시
        if(exOpenMemo) exOpenMemo.classList.add('ellipsis2')
        // 클릭된 메모는 모두 보이게 표시
        nowOpenMemo.classList.remove('ellipsis2')
        exOpenMemo = nowOpenMemo
    }
}

const MEMO_KEY = 'memo-array'

function memo(){
    const memoBackBtn = document.querySelector('.memo-back')
    const memoNewBtn = document.querySelector('.memo-new')
    const memoInputForm = document.querySelector('.memo-input-form')
    const memoInput = document.querySelector('.memo-input')
    const memoList = document.querySelector('.memo-list')
    
    let memoArr = localStorage.getItem(MEMO_KEY)
    if(!memoArr) memoArr=[]
    else memoArr=JSON.parse(memoArr)

    memoArr.forEach(renderMemo)

    memoBackBtn.addEventListener('click',()=>{
        window.history.back()
    })

    memoNewBtn.addEventListener('click',()=>{
        memoInputForm.classList.remove('invisible')
    })
    memoInput.addEventListener('keyup',(event)=>{
        if(event.keyCode===13){
            let value = event.target.value
            renderMemo(value)
            memoArr.push(value)
            localStorage.setItem(MEMO_KEY,JSON.stringify(memoArr))
            memoInputForm.classList.add('invisible')
        }
    })
    
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

    let exOpenMemo = ''
    function clickMemo(e){
        let memo = e.target
        if(exOpenMemo) exOpenMemo.classList.add('ellipsis2')
        memo.classList.remove('ellipsis2')
        exOpenMemo = memo
    }
}

module.exports={
    memo
}
# 11번가 검색서비스 Frontend분야 사전과제

## 실행 방법
### 모듈 설치
`npm install`
### 실행
`npm start`
### 접속
http://localhost:8080/ 로 접속

## 모듈
    "clean-webpack-plugin": "^4.0.0-alpha.0",
    "css-loader": "^6.2.0",
    "file-loader": "^6.2.0",
    "handlebars": "^4.7.7",
    "handlebars-loader": "^1.7.1",
    "html-webpack-plugin": "^5.3.2",
    "mini-css-extract-plugin": "^2.2.0",
    "url-loader": "^4.1.1",
    "webpack": "^5.51.1",
    "webpack-cli": "^4.8.0",
    "webpack-dev-server": "^4.0.0"

## 파일 구조
<img src="https://user-images.githubusercontent.com/59257758/130381295-5c7a01cd-e3f7-492c-9afe-3c03c20655ba.png" width="180px">


### HTML
- index.html : 기본 페이지(Single page)
- home.hbs : home 화면 DOM
- alarm.hbs : alarm 화면 DOM
- image.hbs : image 화면 DOM
- memo.hbs : memo 화면 DOM

### JS
- main.js : clock 및 모든 앱에서 alarm alert 기능
- route.js : page 간 라우터 기능
- Alarm.js : alarm 생성 및 local storage 에 alarm 저장
- Home.js : icon 간에 drag-drop 기능 및 local storage 에 icon 순서 저장
- Image.js : image 앱 기능
- Memo.js : memo 생성 및 local storage 에 memo 저장

## 시연 영상
### HOME
  - Home 화면에서 아이콘 간의 위치 이동 / local storage에 위치 배열 저장 / 상단에 clock 활성화
  <img width = "200px" src="https://user-images.githubusercontent.com/59257758/130382083-78242d0e-1732-48b9-9527-ac3f6f690980.gif">
  
### ALARM
  - Alarm 화면에서 알람 생성 및 local storage에 저장 / 해당 시간이 되었을 때 alert창 확인 후 삭제
  <img width = "200px" src="https://user-images.githubusercontent.com/59257758/130382115-c2e63cfd-4dec-42bd-88c6-f566f1f98725.gif">
  
  - 저장된 알람의 시간이 되었을 때 다른 앱에서 알람 동작
  
  <div style={flex-direction:"row";}>
  &nbsp;&nbsp;Image app 에서 알람 동작&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;Home 에서 알람 동작&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;Memo app 에서 알람 동작<br/>
    <img width = "200px" src="https://user-images.githubusercontent.com/59257758/130382128-dfeede58-59ec-4ab4-b4be-3c1146e59e17.gif"> 
    <img width = "200px" src="https://user-images.githubusercontent.com/59257758/130382542-55038cdd-ed9b-4fbc-883a-9fa0a51e3076.gif">
    <img width = "200px" src= "https://user-images.githubusercontent.com/59257758/130383607-0c891cff-0a2a-4eb5-8c7e-b9f26eb3cc95.gif">
  
  </div>
  
### MEMO
  - Memo 클릭 시 전체 보기 / local storage 에 메모 저장
  <img width = "200px" src="https://user-images.githubusercontent.com/59257758/130383103-0fc82e90-5f4c-4ccb-b05a-288364c762f5.gif">
  
### IMAGE
  - Image 클릭 시 전체 보기 및 테두리 기능
  <img width = "200px" src="https://user-images.githubusercontent.com/59257758/130383389-f3767f80-746c-4108-b688-0520d512be59.gif">

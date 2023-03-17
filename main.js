// 1. 랜덤번호 지장 
// 2. 유저가 번호를 입력하고, go라는 버튼을 누름 
// 3. 만약에 번호를 맞추면 "맞췄습니다"
// 4. 랜덤 번호 < 유저번호 다운! 
// 5. 랜덤 번호 > 유저번호 업! 

// 6. 리셋버튼을 누르면 게임이 리셋된다. 
// 7. 5번의 기회를 다 쓰면 게임이 끝난다. ( 버튼을 클릭할 수 없음! )

// 8. 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않는다. 
// 9. 유저가 이미 입력한 숫자를 또 입력하면, 알려주고 기회를 깎지 않음. 


let computerNum = 0
let playButton = document.querySelector('#play-button');
let userInput = document.querySelector('#user-input');
let resultImg = document.querySelector('#result-img');
let resultArea = document.querySelector('#result');
let resetButton = document.querySelector('#reset-button');
let chance = 5
let gameOver = false
let chanceArea = document.querySelector('#chance-area');
let history = []

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', function(){
  userInput.value = ''
})


function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;

  if(userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자를 입력해 주세요!"
    return;
  }
  if(history.includes(userValue)) {
    resultArea.textContent ='이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요'
    return;
  } 

  chance--;
  chanceArea.textContent = `남은기회 : ${chance}번`

  if (userValue < computerNum) {
    resultImg.src =
    "./up.gif";
    resultArea.textContent = "UP!!!"
  } else if (userValue > computerNum) {
    resultImg.src =
      "./down.gif";
    resultArea.textContent = "DOWN!!!"

   } else {
    resultImg.src =
    "./200w.webp";
    resultArea.textContent = "RIGHT!!!"
   }

    history.push(userValue)
    console.log(history);

    if (chance < 1) {
    gameOver = true
  }
    if (gameOver === true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = ""
  pickRandomNum()

  resultArea.textContent = "결과값이 여기 나옵니다."
}

pickRandomNum()








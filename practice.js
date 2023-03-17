// // logic 
// 1. 랜덤 번호 저장 (random 함수 사용)
// 답 입력
// 2. 유저의 숫자가 답보다 적으면 up! 
// 3. 유저의 숫자가 답보다 크면 down! 
// 4. 정답을 맞추면 right! 띄우기 
// 5. 남은 기회 차감하기!
// 6. 리셋 누르면 다시 시작하기. 
// 7. 중복 숫자 입력하면 기회 차감 안하게


let correctNumber = 0;
let playButton = document.querySelector('#play-button')
let userInput = document.querySelector('#user-input')
let resultPage = document.querySelector('#result')
let resultImg = document.querySelector('#result-img')
let chanceArea = document.querySelector('#chance-area')
let chance = 5
let noMoreChance = false
let resetButton = document.querySelector('#reset-button')



playButton.addEventListener('click' , play )
resetButton.addEventListener('click', reset)
userInput.addEventListener('focus', function(){
  userInput.value = ''
})


function numPlay() {
  correctNumber = Math.floor(Math.random() * 100) + 1; 
  console.log("정답은",correctNumber);
}

function play () {
  let userValue = userInput.value 

  if ( userValue < 1 || userValue > 100) {
    resultPage.textContent = "1부터 100까지 숫자만 입력하세요!"
    resultImg.src = "./img/error.gif"
    return;
  }

  chance--;
  chanceArea.textContent =`남은 기회 : ${chance}번 입니다.`


  if(userValue > correctNumber) {
    resultPage.textContent = "Down!! 👇"
    resultImg.src = "./img/down.gif"
  } else if ( userValue < correctNumber) {
    resultPage.textContent = "UP!! 👆"
    resultImg.src = "./img/up.gif"
  } else {
    resultPage.textContent = "Right !!👌"
    resultImg.src = "./img/200w.webp"
  }
  if (chance < 1) {
    noMoreChance = true;
  }
  if (noMoreChance === true) {
    playButton.disabled = true;
    chanceArea.textContent ="다시 도전해 보세요!"
    resultImg.src = "./img/fail.gif"
  }
}

// reset 버튼 누르면 페이지 새로고침 되고, 다시 시작하게 됨!
function reset () {
   chanceArea.textContent = "✅ 남은 chance :5번"
   chance = 5;
   if (self.name != 'reload') {
    self.name = 'reload';
    self.location.reload(true);
}
else self.name = ''; 
}

numPlay()
reset()


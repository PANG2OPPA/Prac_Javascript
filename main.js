// box 태그를 가진 최초의 html 찾기
const boxEl = document.querySelector('.box');

boxEl.classList.add('active'); // <div class="box active">box!<div/> 형태로 저장됨
boxEl.classList.remove('active'); // class에 있던 active 항목이 제거됨
let isContains = boxEl.classList.contains('active'); // class에 active가 포함되어 있나
console.log(isContains);
console.log(boxEl);

// 사용자의 입력을 감지하여 해당 함수를 실행함
boxEl.addEventListener('click', function() {
    console.log("click!!!!");
    boxEl.classList.add('active');
    console.log(boxEl.classList.contains('active'));
    boxEl.classList.remove('active');
    console.log(boxEl.classList.contains('active'));

    // boxEl이 가진 text요소만 가져옴, 값을 얻는 용도
    console.log(boxEl.textContent);

    // 값을 넣는 용도
    boxEl.textContent = 'KIM!!!';
    console.log(boxEl.textContent);
})

// box 태그를 가진 모든 html 찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// boxEls의 처음부터 끝까지 순회
boxEls.forEach(function(boxEl, index) {
    boxEl.classList.add(`order-${index+1}`);
    console.log(index, boxEl);
});

const a = 'Hello~';

// split : 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse : 배열을 뒤집기
// join : 배열을 인수 기준으로 문자로 병합해 반환
const b = a.split('').reverse().join(''); // 메소드 체이닝

console.log(a);
console.log(b);
// html #hello 찾아오기
// querySelector('.클래스 이름')
let hello = document.getElementById('hello');
let changeBtn = document.getElementById('txt-change-btn');

// console.log(hello, changeBtn);

// 안녕하세요를 안녕? 으로 바꾸기
hello.innerHTML = '안녕?';
// 스타일요소의 컬러 레드로
hello.style.color = 'red';

// 클릭 이벤트 추가
changeBtn.addEventListener('click', () => {
  hello.innerHTML = 'Hello';
  hello.style.color = 'blue'
})

// querySelectorAll 은 .item class를 모두 찾는다.
let items = document.querySelectorAll('.item');
console.log(items)


// Vanilla Js
document.querySelectorAll('.item')[0].style.color = 'blue';
document.querySelectorAll('.item')[1].style.color = 'blue';
document.querySelectorAll('.item')[2].style.color = 'blue';

// ||

// item.style.color = 'blue';


// jQuery 
$('.item').css('color', 'red')



// 반복문 for
for (let i = 0; i < items.length; i++){
  items[i].innerHTML = 'for 반복문';
  console.log(i)
};



// 배열 반복 forEach
// 배열.forEach((element) => {
  // element : 원하는 명을 만듦
// });


// items.forEach((item) => {
//   // console.log(item)
//   item.innerHTML = '반복문';
// })


// 자료형
// Number
let num = 5;

// console.log(typeof(num)) num의 타입
// console.log(num) num에 들어 있는 값

// String
let num1 = '5';
console.log(num1)
console.log(typeof(num1))
// 숫자, 문자, 변수
// 문자열은 따옴표 안에
let txt = '안녕하세요!';
console.log('txt')
console.log(typeof('txt'))
console.log(txt)
console.log(typeof(txt))



// Array(배열), Object
// 여러 자료를 한번에 담을 때 
// Array : []
// Object : {}

let arr = ['jung', 3890, '러ㅏ인', txt];
// 배열에서 원하는 값 가져오기 => 배열이름[숫자]
console.log(arr[3])
// console.log(typeof(arr[3]))

// {key : value}
let obj = {  
  이름 : 'jung',
  나이 : 20,
  전화 : 01012345678
}

console.log(obj.나이)

let hi = '안녕하세요 저는';
let name = '현정화';
// console.log(hi, name)

// 변수, 문자열
// ``backtick
let my = hi + name + '입니다';
let my1 = `안녕하세요 저는 ${name} 입니다`;

// 문자열
// ''
// ""
// ``  *이걸로 외우는게 편함
console.log(my1)
console.log(typeof(my1))


// 매개변수(parameter)로 이름값
function info(myName){
  console.log(`안녕하세요 저는 ${myName} 입니다`);
}

info('현정화');


// @@이해 안되면 외우기라도 !!!!

// 배열(Array), Object | [], {}
// 배열 원한느 값 / 배열이름[num] / 배열의 시작은 0부터

// Object 원하는 값 / 오브젝트이름.키값
// key : value, key, value
// 여러 값을 입력하고 싶을 때는 , 로 구분한다.

// 변수, 문자열
// 문자열 : '', "", `` (따옴표, 큰따옴표, 백틱)
// 문자열 사이에 변수 바인딩하는 방법 두 가지
// + : 변수 + '문자열'
// ex) '안녕' + name(변수) + '나는' + age(변수)
// `` : `안녕 ${name} 나는 ${age}` 

// Parameter(매개변수)
// 함수를 호출할 때 넘겨주는 값
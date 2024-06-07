// let logo = document.querySelectorAll('.logo');
// let dark = document.querySelector('.dark');
// let light = document.querySelector('.light');

// console.log(logo, dark, light);

// dark.addEventListener('click', () =>{
  // dark.innerHTML='light';
  // dark.style.background-color='black';
// })



// dark_btn class안 텍스트를 가져온다.
// 텍스트가 Dark일 경우(조건)
// dark_btn 클릭하면 (클릭이벤트) 텍스트를 'Light'로 바꾼다.
// header 태그에 dark class add

let darkBtn = document.querySelector('.dark_btn');
let count = 0;
// console.log(darkTxt);

function modeToggle(){
  
  let darkTxt = darkBtn.innerHTML;
  let header = document.querySelector('header');

  count += 1;
  console.log (count) 
if (count % 2 == 0){
  // this는 modeBtn을 의미함
  this.innerHTML = 'Dark';
  header.classList.remove('dark');
} else {
  this.innerHTML = 'Light'
  header.classList.add('dark');
}


  // console.log(mondeToggle);
  if(darkTxt == 'Dark'){
    // 텍스트를 'Light'로 바꾼다.
    darkTxt = 'Light';
    // header 태그에 dark class add
    // document.querySelector('header').classList.
    header.classList.add('dark');
  } else {
    darkTxt = 'Dark';
    header.classList.add('light');
  }
}

//dark_btn 클릭하면 (클릭이벤트)
darkBtn.addEventListener('click', modeToggle);

// mondeToggle();
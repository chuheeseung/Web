const $div = document.querySelector('.container');
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

// 1. 이벤트 핸들러

// $div.onclick = handleClick;

// function handleClick () {
//     console.log("clicked");
// }

// $div.onclick = () => console.log("clicked");
// $div.onclick = () => alert("clicked");

// 2. addEventListener

// $div.addEventListener('click', () => handleClick);
// $div.addEventListener('click', () => alert('clicked'));

// 3. revmoveEventListener

// $div.removeEventListener('click', handleClick);


// 이벤트 인자

$div.addEventListener('click', handleClick);

function handleClick (event) {
    // console.log(event);
    console.log(event.target.innerText);
}

// form 

$input.addEventListener('change', handleChange);

function handleChange(event) {
    console.log("change : ", event.target.value);
}

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const inputValue = $input.value;
    console.log("submit : ", inputValue);
    $input.value = ''; // 입력창 초기화
} 

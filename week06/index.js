// // setItem : 로컬스토리지에 정보를 저장할 때 사용하는 메소드
// localStorage.setItem('name', 'chuheeseung');
// localStorage.setItem('age', 100);

// // getItem : 로컬스토리지에서 정보를 가져올 때 사용하는 메소드
// const result = localStorage.getItem('age');
// console.log(result);
// console.log(typeof result);

// // JSON.stringify, JSON.parse

// const travel = {
//     destinations : ['paris', 'sydney', 'taipei'],
//     days : 100,
//     mate : undefined,
//     isAvailable : true
// };

// // localStorage.setItem('travel', travel);
// localStorage.setItem('travel', JSON.stringify(travel));

// const data = JSON.parse(localStorage.getItem('travel'));
// console.log(data);

// // removeItem
// localStorage.removeItem('name');
// localStorage.clear();



// 실습 체크리스트
// localStorage에 getItem으로 문자열, 리스트, JSON을 넣고 다시 getItem으로 돌려받기
const jsonjson = {
    json0 : 'json0',
    json1 : 'json1'
}
localStorage.setItem('stringType', 'stringstring');
localStorage.setItem('listType', ['list0', 'list1', 'list02']);
localStorage.setItem('jsonType', jsonjson);

console.log(localStorage.getItem('stringType'));
console.log(localStorage.getItem('listType'));
console.log(localStorage.getItem('jsonType'));

// 위의 실습에서 stringify, parse 를 이용해보고 typeof 로 원래의 타입으로 변환되었는지 확인하기
localStorage.setItem('jsonType', JSON.stringify(jsonjson));

const data = JSON.parse(localStorage.getItem('jsonType'));
console.log(data);
console.log(typeof data);
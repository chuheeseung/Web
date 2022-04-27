// setItem : 로컬스토리지에 정보를 저장할 때 사용하는 메소드
localStorage.setItem('name', 'chuheeseung');
localStorage.setItem('age', 100);

// getItem : 로컬스토리지에서 정보를 가져올 때 사용하는 메소드
const result = localStorage.getItem('age');
console.log(result);
console.log(typeof result);

// JSON.stringify, JSON.parse

const travel = {
    destinations : ['paris', 'sydney', 'taipei'],
    days : 100,
    mate : undefined,
    isAvailable : true
};

// localStorage.setItem('travel', travel);
localStorage.setItem('travel', JSON.stringify(travel));

const data = JSON.parse(localStorage.getItem('travel'));
console.log(data);

// removeItem
localStorage.removeItem('name');
localStorage.clear();
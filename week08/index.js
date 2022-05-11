// fetch, axios

// 1. fetch : fetch(url, options)
// 1-1. promise

const result = []

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     // .then(data => result.push(data))
//     // .then(data => data.map(item => result.push(item)))
//     .then(data => data.map(item => result.push(item.name)))
//     .catch(error => console.log(error));

// console.log(result);


// // 1-2. async await

// const dataFetch1 = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // response라는 변수에 fetch의 응답값을 저장하기 위해서 await을 사용
//     const data = await response.json();
    
//     return data;
// }

// // const dataResult1 = dataFetch1();
// console.log(dataFetch1());


// // 2. axios

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => console.log(response.data));


const dataFetch = async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users").data;

    return response;
};

const dataResult = dataFetch();
console.log(dataResult);

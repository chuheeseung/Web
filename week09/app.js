const express = require('express');
const app = express(); // app이라는 것이 express를 사용한다
const port = 5500; // port 번호

app.use(express.json()); // express를 json으로 사용한다고 명시

const users = [
    {
        id: 1,
        name: "james",
        username: "joker",
        email: "james101@gmail.com",
        phonenumber: "123-456-7979",
    },
    {
        id: 2,
        name: "christine",
        username: "crystal",
        email: "christine101@gmail.com",
        phonenumber: "453-326-1299",
    },
    {
        id: 3,
        name: "jammie",
        username: "jam",
        email: "jammie101@gmail.com",
        phonenumber: "963-332-3719",
    },
];

// http request method 중 geth 메소드
app.get('/', (req, res) => { // req : 사용자가 보낸 요청, res : 보내줄 응답값
    res.send('Welcome!'); // 사용자가 요청한 주소가 home일 때 응답값을 준다
});

app.get('/users', (req, res) => { 
    res.json(users); 
});

app.get('/users/:userId', (req, res) => { // userId : 사용자가 접근하고 싶은 특정 유저의 id
    // res.json(users); 
    // console.log(req.params.userId); // 사용자가 입력한 것을 가져올 수 있다

    // users 배열 요소를 하나하나 접근을 하면서 각각을 user로 받아서
    // user.id가 req.params.id와 같으면 만족하는 첫번째 요소를 find()의 리턴값으로 반환
    // parseInt : 문자열 -> 정수 형변환, 같은 타입이어야 비교를 하니까
    const user = users.find((user) => user.id === parseInt(req.params.userId));

    if(!user) { // 예외 처리 : user가 undefined인 경우
        res.status(404).send("요청한 userId를 찾을 수 없습니다.");
    }

    res.status(200).json(user);
});

app.post('/users', (req, res) => {
    const newUser = req.body;

    // 객체의 key들만 뽑아서 배열 생성
    if(Object.keys(newUser).length === 0) { // 배열이 아예  비어있는 경우 
        res.status(400).send('user에 관한 정보를 입력해주세요.');
    }
    else if(Object.keys(newUser).length < 4) { // 배열의 정보가 빠진 경우
        res.status(400).send('user를 추가하기 위한 정보를 모두 입력해주세요.');
    }
    else { // 정상적인 경우
        users.push({
            id : users[users.length -1].id + 1,
            ...newUser // spread operator로 안의 내용물을 하나씩 복사해서 새로운 객체 안에 집어넣음
        });
    }

    res.json(users);
});

app.put("/users/:userId", (req, res) => {
    // userId와 일치하는 데이터를 찾기 -> findIndex()
    const id = users.findIndex(
        (user) => user.id === parseInt(req.params.userId) // 배열의 인덱스를 반환
    );
    // console.log(id);

    if(id === -1) { //userId 예외처리
        res.status(404).send('요청한 id를 찾을 수 없습니다.');
    }

    users[id] = {
        ...users[id],
        ...req.body
    }

    res.status(200).json(users);
});

app.delete("/users/:userId", (req, res) => {
    const id = users.findIndex(
        (user) => user.id === parseInt(req.params.userId)
    );

    if(id === -1) { //userId 예외처리
        res.status(404).send('요청한 id를 찾을 수 없습니다.');
    }

    users.splice(id, 1);

    res.status(200).json(users);
});




app.listen(port, () => {
    console.log(`서버 실행중... ${port}`);
});
// 동기 vs 비동기

console.log('1')
setTimeout(function() {
    console.log('2')
}, 10)
console.log('3')
console.log('4')
setTimeout(function() {
    console.log('5')
}, 5)
console.log('6')
setTimeout(function() {
    console.log('7')
}, 40)
console.log('8')
setTimeout(function() {
    console.log('9')
}, 30)
console.log('10')



// 콜백함수 비동기 vs 동기 

function syncFunc(syncCallback) {
    syncCallback();
}

function asyncFunc(asyncCallback) {
    setTimeout(asyncCallback, 3000);
}

syncFunc(() => console.log('sync'));
asyncFunc(() => console.log('async'));

function syncFunc(syncCallback) {
    syncCallback();
}

function asyncFunc(asyncCallback) {
    setTimeout(() => {
        asyncCallback();
        syncFunc(() => console.log('sync'));
    }, 3000);
}

asyncFunc(() => console.log('async'));



// callback

const posts = [
    {post_id: 1, post_title: '첫번째 글'},
    {post_id: 2, post_title: '두번째 글'},
    {post_id: 3, post_title: '세번째 글'},
];

const comments = [
    {post_id: 1, comment_id: 1, comments: '첫번째 글 첫번째 코멘트'},
    {post_id: 2, comment_id: 1, comments: '두번째 글 첫번째 코멘트'},
    {post_id: 2, comment_id: 2, comments: '두번째 글 두번째 코멘트'},
    {post_id: 2, comment_id: 3, comments: '두번째 글 세번째 코멘트'},
    {post_id: 3, comment_id: 1, comments: '세번째 글 첫번째 코멘트'},
    {post_id: 3, comment_id: 2, comments: '세번째 글 두번째 코멘트'},
];

const postNum = 2;

const getPost = (id, onSuccess, onError) => {
    setTimeout(() => {
        const post = posts.find(post => post.post_id === id);
        if(post) {
            onSuccess(post.post_id);
        }
        else {
            onError("찾는 포스트가 없습니다.");
        }
    }, 3000)
}

const getComments = (post_id, onSuccess, onError) => {
    setTimeout(() => {
        const result = comments.filter(comment => comment.post_id === post_id);
        if(result.length > 0) {
            onSuccess(result);
        }
        else {
            onError("찾는 포스트의 코멘트가 없습니다.");
        }
    }, 4000)
}

getPost(
    postNum, 
    (postId) => {
        console.log("Post", postId);
        getComments(
            postId, 
            (result) => console.log("Comments : ", result),
            (message) => console.log(message)
        )
    },
    (message) => {
        console.log(message);
    })



// promise

const getPost = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find(post => post.post_id === id);
            if(post) {
                resolve(post.post_id);
            }
            else {
                reject("찾는 포스트가 없습니다.");
            }
        }, 1000)
    })
}

const getComments = (post_id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = comments.filter(comment => comment.post_id === post_id);
            if(result.length > 0) {
                resolve(result);
            }
            else {
                reject("찾는 포스트의 코멘트가 없습니다.");
            }
        }, 2000)
    })
}

getPost(postNum)
    .then(postId => {
        console.log("Post", postId);
        return getComments(postId) // return을 꼭 써줘야 한다 아래의 then이 받는게 return
    })
    .then(result => console.log("Comments", result))
    .catch(message => console.log(message));

    

// async await

async function getResult() {
    const postIdResult = await getPost(postNum); 
    console.log(postIdResult); // await 없으면 Promise 출력됨

    const commentsResult = await getComments(postIdResult);
    console.log(commentsResult);
}

getResult();
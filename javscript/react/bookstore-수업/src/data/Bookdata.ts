export interface Book{
    id : number;
    title : string;
    content : string;
    price : number;
    author : string;
    star : string;
}

const bookdata : Book[] = [
    {
        id : 4,
        title : '모던자바스크립트&Node.js',
        content : '초보자를 위한 입문서입니다.',
        price : 34000,
        author : '이창현',
        star : '⭐⭐⭐⭐⭐'
    },
    {
        id : 5,
        title : '내 생애 첫번째 코딩 앱인벤터',
        content : '코딩을 처음 시작하는 초보자를 위한 입문서입니다.',
        price : 22000,
        author : '이창현',
        star : '⭐⭐⭐⭐⭐'
    },
    {
        id : 6,
        title : 'C# 프로그래밍의 정석',
        content : '닷넷을 시작하는 초보자를 위한 입문서입니다.',
        price : 26000,
        author : '이창현',
        star : '⭐⭐⭐⭐⭐'
    }
]

export default bookdata;
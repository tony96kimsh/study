const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const BK = 10;
const SL = 1;

// 해시 테이블 생성
let hashtable = Array.from({ length: BK }, () => []);

// 해시 함수
function Hash(nKey) {
    return nKey % 10;
}

// 값 삽입 함수
function InsertValue(nKey) {
    const bucket = Hash(nKey);
    if (!hashtable[bucket].includes(nKey)) {
        hashtable[bucket].push(nKey);
    }
}

// 값 찾기 함수
function FindValue(nKey) {
    const bucket = Hash(nKey);
    return hashtable[bucket].includes(nKey);
}

// 사용자 입력 받기
let inputCount = 0;
let keys = [];

function askQuestion() {
    if(inputCount < 5) {
        rl.question(`${inputCount + 1}번째 값을 입력하세요: `, (key) => {
            InsertValue(parseInt(key, 10));
            inputCount++;
            askQuestion();
        });
    } else {
        rl.question('검색할 키를 입력하세요: ', (key) => {
            if (FindValue(parseInt(key, 10))) {
                console.log("검색되었습니다.")
            } else {
                console.log('검색되지 않았습니다.')
            }
            rl.close();
        });
    }
}

askQuestion();
/**
 * C++에서 작성한 싱글톤 패턴 코드를 자바스크립트 코드로 변환하라. 

문법 체크포인트)
1. 자스에서는 생성자 이름을  constructor()로 사용함.
2. :: 연산자 대신 . 연산자를 사용
3. 전달인자에 타입 지정하지 않음.
 */
class Sgt {
    static ist = null;
    static total = 0;

    constructor() {
        if(Sgt.ist) {
            console.error("생성자 신규 불가!");
            return Sgt.ist;
        }
    }

    static getIncetance(value = 10) {
        if(Sgt.ist === null) {
            Sgt.ist = new Sgt();
            Sgt.total = value;
        }
        return Sgt.ist
    }
    
    setTotal(num){
        Sgt.total = num;
    }
    getTotal(){
        return Sgt.total
    }
}

// 출력 및 멤버함수 호출
const ist1 = Sgt.getIncetance(20);
const ist2 = Sgt.getIncetance(30);
const ist3 = Sgt.getIncetance(40);

console.log("생성자로 초기값 수정 시 => 초기값만 적용되며, 새로운 인스턴스 생성 불가(값 적용X)");
console.log(ist1.getTotal());
console.log(ist2.getTotal());
console.log(ist3.getTotal());

console.log("멤버함수 값 변경 모든 인스턴스 값 변경")
ist1.setTotal(100);
console.log(ist1.getTotal());
console.log(ist2.getTotal());
console.log(ist3.getTotal());
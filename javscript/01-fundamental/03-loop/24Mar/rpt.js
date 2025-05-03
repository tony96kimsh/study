/*
Array 객체를 사용하여 길이가 3인 배열 arr1과 arr2를 선언한다. 
arr1배열은 선언과 동시에 {1,2,3}으로 초기화하였다.
arr1을 arr2에 복사하되 역순으로 복사하고,
arr2 배열의 요소를 모두 출력하라.
*/
let arr1 = [1, 2, 3]
let arr2 = []

for(let i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[arr1.length - i - 1];
    console.log(arr2[i]);
}
// var arr = [  2, 6, 13, 19, 21, 21, 23, 29, 35, 48, 62, 89, 90, 95, 99, 102, 109, 208, 629];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var key =  1;

var lower = 0;
var upper = arr.length - 1;
var mid = upper / 2;
console.log("size: " + upper);


let setIndex = () => {

  for (let i = 0; i < 1000; i++) {
    
    (lower + upper) % 2 ? 
      mid = (lower + upper - 1) / 2
      : mid = (lower + upper) / 2;

     //test
    console.log("count loop: " + i);
    console.log("mid: " + mid);

    //result
    if (key == arr[mid]) {
      console.log(mid + 1 + "번째에 있습니다.");
      break;
    };
    if (upper < lower) {
      console.log("키 값이 없습니다.");
      break;
    }

    // search
    arr[mid] > key ? upper = mid - 1 : lower = mid + 1;
  }
}
key = prompt("test")
setIndex();
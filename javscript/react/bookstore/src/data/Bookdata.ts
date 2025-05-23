interface BookInfo {
  id: number;
  title: string;  
  author: string;
  price: number;
  score: number;  
}
const Bookdata: BookInfo[] = [
  {
    id: 1,
    title: "노르웨이의 숲",
    author: "무라카미 하루키",
    price: 25000,
    score: 4,
  },
  {
    id: 2,
    title: "도시와 그 불확실한 벽",
    author: "무라카미 하루키",
    price: 35000,
    score: 2,
  },
  {
    id: 3,
    title: "해변의 카프카 1",
    author: "무라카미 하루키",
    price: 11000,
    score: 5,
  }

]

export default Bookdata;
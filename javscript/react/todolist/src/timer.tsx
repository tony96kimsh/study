import { useState } from 'react';
import 'react-bootstrap';

import Button from 'react-bootstrap/Button'; // Button 컴포넌트 직접 가져오기
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 스타일도 불러오기



const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);
  return (
    <div className="board">
      <h4>타이머 : {seconds} 초</h4>
      <Button onClick={
        () => {
            setInterval(() => {
                setSeconds((a) => {
                    return a + 1
                })
            }, 1000)
        }
      }>시작 </Button>
    </div>
  );
}


export default Timer;
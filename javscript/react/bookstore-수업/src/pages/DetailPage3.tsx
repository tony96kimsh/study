// import { Component } from "react";
// interface LifeCycleExampleState {
//   count : number;
// }
// class DetailPage2 extends Component <{}, LifeCycleExampleState> {
//     constructor(props: {}) {
//         super(props);
//         this.state = { count: 0 }
//         console.log('constructor');
//     }
//     componentDidMount(): void {
//         console.log("Mount");
//     }
//     componentDidUpdate(): void {
//         console.log("Update");
//     }
//     componentWillUnmount(): void {
//         console.log("Unmount");
//     }
    
//     render () {
//         return (
//             <div>
//               <p>Count : {this.state.count}</p>
//               <button onClick={() => this.setState({ count: this.state.count + 1})}>증가</button>
//             </div>
//         )
//     }

// }

import { useEffect, useState } from "react"


const DetailPage2:React.FC = () => {
  
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(()=> {
      setSeconds(prevSeconds => prevSeconds + 1)
    }, 1000)
    return () => {
      clearInterval(timerId);
    }
  }, [])
  return(
    <>
      <div>
        <h1>타이머 : {seconds}초</h1>
      </div>
    </>
  )

}

export default DetailPage2
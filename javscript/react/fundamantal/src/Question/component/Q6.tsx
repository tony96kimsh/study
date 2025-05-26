import { Component, useState } from 'react';

type Props = {
    props: number;
}
class MessageDisplayClass extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count : props.props,
        }        
    }
    Increase = () => {
        this.setState({count: this.state.count + 1})
    }
    render() {
        return(
            <>
                <h2>Class</h2>
                <hr></hr>
                <p>props : {this.state.count}</p>
                <button onClick={this.Increase}
                >증가</button>
                <button onClick = {() => (alert("확인됨!!"))}>확인</button>
            </>
        )
    }
}

const MessageDisplayFunc: React.FC<Props> = ({props}) => {
    const [count, setCount] = useState<number>(props);
    const Increase = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h2>Function</h2>
            <hr />
            <p>props : {count}</p>
            <button onClick={Increase}
            >증가</button>
            <button onClick = {() => (alert("확인됨!!"))}>확인</button>
        </>
    )
}

export {MessageDisplayClass, MessageDisplayFunc};
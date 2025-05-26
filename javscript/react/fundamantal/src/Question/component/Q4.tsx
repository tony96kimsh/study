import { Component } from 'react';
type State = {
  count : number;
}
type Props = {

}

class CountButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count : 0,
    }
  }
  render() {
    return (
      <>
        <p> 카운트: {this.state.count} </p>
        <button onClick={() => this.setState({count : this.state.count + 1})}
        >증가</button>
      </>
    )
  }
}

export default CountButton;
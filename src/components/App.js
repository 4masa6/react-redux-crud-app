import {Component} from "react";


const App = () => (<Counter></Counter>)

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    onClickPlus = () => {
        this.setState({count: this.state.count + 1})
    }

    onClickMinus = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <>
                <div>{this.state.count}</div>
                <button onClick={this.onClickPlus}>+1</button>
                <button onClick={this.onClickMinus}>-1</button>
            </>
        )
    }
};

export default App;

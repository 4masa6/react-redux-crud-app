import { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

class App extends Component {

    render() {
        const props = this.props;
        console.log(props)
        return (
            <>
                <div>value: { props.value }</div>
                <button onClick={props.increment}>+1</button>
                <button onClick={props.decrement}>-1</button>
            </>
        )
    }
}

// mapStateToProps:
// stateの情報からこのコンポーネントに必要なものを取り出して、コンポーネント内のpropsとしてマッピングする。
// 引数: state(状態のトップレベル)
// 戻り値: propsとして対応させるオブジェクト
const mapStateToProps = state => ({ value: state.count.value })

// mapDispatchToProps
// dispatch関数を引数に置いて、このコンポーネントに必要なdispatch関数を宣言する
// dispatch: あるアクションが発生した時に、Reducerにtypeに応じた状態遷移をさせる関数
// ボタンクリック時に該当のアクションをdispatchに渡して実行させることで状態遷移をさせることができる。
// incrementをキーに、increment関数を引数に持つdispatch関数を値に
// decrementをキーに、decrement関数を引数に持つdispatch関数を値に
// 定義したmapToDispatch関数を定義する
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
})



export default connect(mapStateToProps, mapDispatchToProps)(App)

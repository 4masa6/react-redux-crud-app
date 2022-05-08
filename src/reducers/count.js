// アプリケーションの事実上の状態を持つReducerファイル

// Actionのtypeをインポート
import { INCREMENT, DECREMENT } from "../actions";

// 状態の初期値を設定
const initialState = { value: 0 }

// count Reducerを定義
// 第一引数のstateに状態の初期値を設定
// 第二引数で受け取ったactionのtypeによってstateを更新し、結果をreturnする
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
 }
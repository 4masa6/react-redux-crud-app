// Reducerのトップレベルのファイル
// 全Reducerを一つにまとめる
import { combineReducers } from "redux";
import count from "./count";

// このアプリケーションが使うReducerをcombineReducersに列挙する
//export default combineReducers({ foo, bar, hoge, fuga })
export default combineReducers({ count })
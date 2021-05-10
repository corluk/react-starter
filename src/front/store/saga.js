import { call, put, takeLatest } from "redux-saga/effects";
import {fetchDefault } from "./fetch";
import { DEFAULT_ACTION, DEFAULT_ERROR } from "./redux";
function* fetch1(){

    try{
        const data = yield call(fetchDefault);
        put({type: DEFAULT_ACTION, payload: data});
    }catch(err){
        put({type: DEFAULT_ERROR});
    }
}


function* gen(){
    yield takeLatest(DEFAULT_ACTION, fetch1);
}

export default gen;

import { call, put, takeLatest } from "@redux-saga/core/effects";
import API from "../api/default";
import { DEFAULT_ERROR } from "./default";
export const SEARCH_REQUESTED = "app/search/requested";
export const SEARCH_TYPED = "app/search/typed";
export const SEARCH_RESULT = "app/search/result";

const initialState = { error: null };
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_RESULT:
      return { ...state, ...{ searched: action.payload } };
    case DEFAULT_ERROR:
      return { ...state, ...{ error: action.payload } };
  }
  return state;
};

function* genKeywordRequest(action) {
  console.log("keyword request something");
  try {
    const data = yield call(API.search, action.payload);
    put({ type: SEARCH_RESULT, payload: data });
  } catch (err) {
    yield put({ type: DEFAULT_ERROR, payload: err.message });
  }
}

export function* saga() {
  yield takeLatest(SEARCH_REQUESTED, genKeywordRequest);
}

export const Actions = {
  searchRequested: (value) => ({ type: SEARCH_REQUESTED, payload: value }),
};

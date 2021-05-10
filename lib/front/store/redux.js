"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerDefaultAction = exports.default = exports.DEFAULT_ACTION_REQUESTED = exports.DEFAULT_ERROR = exports.DEFAULT_ACTION = void 0;
const DEFAULT_ACTION = "app/default/action";
exports.DEFAULT_ACTION = DEFAULT_ACTION;
const DEFAULT_ERROR = "app/default/error";
exports.DEFAULT_ERROR = DEFAULT_ERROR;
const DEFAULT_ACTION_REQUESTED = "app/default/action_requested";
exports.DEFAULT_ACTION_REQUESTED = DEFAULT_ACTION_REQUESTED;
const initialState = {};

var _default = (state = initialState, action = {}) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return { ...state,
        ...action.payload
      };

    case DEFAULT_ERROR:
      return { ...state,
        ...{
          error: action.payload
        }
      };

    default:
      return state;
  }
};

exports.default = _default;

const triggerDefaultAction = value => {
  return {
    type: DEFAULT_ACTION,
    payload: value
  };
};

exports.triggerDefaultAction = triggerDefaultAction;
import {THEME_SET_STATUS} from '../actionTypes';

const initialState = {themeStatus: 'null'};

export default function (state = initialState, action) {
  switch (action.type) {
    case THEME_SET_STATUS: {
      let result = {...state};

      result.themeStatus = action.themeStatus;
      return result;
    }
    default:
      return state;
  }
}

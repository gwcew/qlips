import {SIDEBAR_SET_STATUS, THEME_SET_STATUS} from '../actionTypes';

const initialState = {themeStatus: 'null', sideBarCollapsed: false};

export default function (state = initialState, action) {
  switch (action.type) {
    case THEME_SET_STATUS: {
      let result = {...state};

      result.themeStatus = action.themeStatus;
      return result;
    }
    case SIDEBAR_SET_STATUS: {
      let result = {...state};

      result.sideBarCollapsed = !!(action.sideBarCollapsed);

      return result;
    }
    default:
      return state;
  }
}

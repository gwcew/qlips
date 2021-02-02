import {
  SIDEBAR_SET_STATUS,
  THEME_SET_STATUS,
  MODAL_LOGINFORM_SET_STATUS,
  MODAL_REGISTERFORM_SET_STATUS,
} from '../actionTypes';

const initialState = {themeStatus: 'null', sideBarCollapsed: false, loginFormStatus: false, registerFormStatus: false};

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
    case MODAL_LOGINFORM_SET_STATUS: {
      let result = {...state};

      result.loginFormStatus = (action.loginFormStatus);

      return result;
    }
    case MODAL_REGISTERFORM_SET_STATUS: {
      let result = {...state};

      result.registerFormStatus = (action.registerFormStatus);

      return result;
    }
    default:
      return state;
  }
}

import {
  SIDEBAR_SET_STATUS,
  THEME_SET_STATUS,
  MODAL_LOGINFORM_SET_STATUS,
  MODAL_REGISTERFORM_SET_STATUS,
  MODAL_REGISTERFORM_USER_LIST_STATUS,
  SIDEBAR_SET_SELECTED_PAGE_ID,
} from '../actionTypes';

const initialState = {
  themeStatus: 'null',
  sideBarCollapsed: false,
  loginFormStatus: false,
  registerFormStatus: false,
  registerFormUserListStatus: false,
  sidebarPageID: 1,
};

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
    case SIDEBAR_SET_SELECTED_PAGE_ID: {
        let result = {...state};

        result.sidebarPageID = Number(action.sidebarPageID);

        return result;
    }
    case MODAL_REGISTERFORM_USER_LIST_STATUS: {
        let result = {...state};

        result.registerFormUserListStatus = Boolean(action.registerFormUserListStatus);

        return result;
    }
    default:
      return state;
  }
}

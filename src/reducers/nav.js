import { produce } from 'immer';

const initialState = {
  isToken: false,
  isClickSearch: true,
  isClickUserInfoButton: false,
  isOpenLoginModal: false,
};

export const TOKEN_EXIST = 'TOKEN_EXIST';
export const TOKEN_DELETE = 'TOKEN_DELETE';

export const CLICK_SEARCHBAR = 'CLICK_SEARCHBAR';

export const CLICK_USER_INFO_BUTTON = 'CLICK_USER_INFO_BUTTON';

export const OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';

export const SWITCH_TO_LOGIN_MODAL = 'SWITCH_TO_LOGIN_MODAL';

export const WINDOW_RELOAD = 'WINDOW_RELOAD';

export const clickSearchBar = () => ({
  type: CLICK_SEARCHBAR,
});

export const clickUserInfoButton = () => ({
  type: CLICK_USER_INFO_BUTTON,
});

export const openLoginModal = () => ({
  type: OPEN_LOGIN_MODAL,
});

export const switchModal = () => ({
  type: SWITCH_TO_LOGIN_MODAL,
});

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case TOKEN_EXIST: {
        draft.isToken = true;
        break;
      }
      case TOKEN_DELETE: {
        draft.isToken = false;
        break;
      }
      case CLICK_SEARCHBAR: {
        draft.isClickSearch = !draft.isClickSearch;
        break;
      }
      case CLICK_USER_INFO_BUTTON: {
        draft.isClickUserInfoButton = !draft.isClickUserInfoButton;
        break;
      }
      case OPEN_LOGIN_MODAL: {
        draft.isOpenLoginModal = !draft.isOpenLoginModal;
        break;
      }
      case SWITCH_TO_LOGIN_MODAL: {
        draft.isOpenLoginModal = !draft.isOpenLoginModal;
        draft.isClickUserInfoButton = !draft.isClickUserInfoButton;
        break;
      }
    }
  });
};

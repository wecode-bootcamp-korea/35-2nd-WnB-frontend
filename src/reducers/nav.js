import { produce } from 'immer';

const initialState = {
  isToken: false,
};

export const TOKEN_EXIST = 'TOKEN_EXIST';
export const TOKEN_DELETE = 'TOKEN_DELETE';

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
    }
  });
};

import { FETCH_LIST } from './action';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LIST:
      // 只能返回对象，不能返回数组
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};

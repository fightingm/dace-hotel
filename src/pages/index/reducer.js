import { FETCH_BANNER } from './action';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BANNER:
      // 只能返回对象，不能返回数组
      return {
        ...state,
        banner: action.payload
      };
    default:
      return state;
  }
};

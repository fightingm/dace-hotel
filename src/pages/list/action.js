export const FETCH_LIST = 'fetch_post';
export const fetchList = () => async (dispatch, getState, api) => {
  const { list } = getState();
  console.log('?????', list, !list);
  if (!list) {
    const res = await api.get('http://yapi.demo.qunar.com/mock/16428/list');
    return dispatch({
      type: FETCH_LIST,
      payload: res.data.data
    });
  }
  return null;
};

export const FETCH_BANNER = 'fetch_banner';
export const fetchBanner = () => async (dispatch, getState, api) => {
  const { banner } = getState();
  if (!banner) {
    const res = await api.get('http://yapi.demo.qunar.com/mock/16428/banner');
    return dispatch({
      type: FETCH_BANNER,
      payload: res.data.data
    });
  }
  return null;
};

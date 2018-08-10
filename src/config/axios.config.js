import axios from 'axios';
import isEnvNode from '$self-util/isEnvNode';
import { loading } from '$self-component/loading';
import Tracker from '$self-util/Tracker';

axios.defaults.xsrfCookieName = 'eventCsrfToken';
axios.defaults.xsrfHeaderName = 'x-csrf-token';

if (isEnvNode) {
  axios.defaults.baseURL = `http://127.0.0.1:${process.env.PORT}`;
}

axios.interceptors.request.use((config) => {
  if (!isEnvNode && config.needLoading) {
    loading.show();
  }
  config.startTime = (new Date()).getTime();
  return config;
}, error => Promise.reject(error));

axios.interceptors.response.use((response) => {
  if (!isEnvNode) {
    response.config && response.config.needLoading && loading.hide();
    response.request.responseURL && Tracker.ajaxTrack(response.config.startTime, response.request.responseURL);
  }
  const { status = -1, message = '请求异常，请您重试', data } = response.data;

  if (response.config.needAllResult) {
    return response.data;
  }
  if (status === 0) {
    return data;
  }
  const error = { status, message };
  return Promise.reject(error);
}, (error) => {
  if (!isEnvNode) {
    loading.hide();
    Tracker.notifyError(error);
  }
  const errData = { status: -1, message: '服务端请求异常，请您重试', error };
  return Promise.reject(errData);
});

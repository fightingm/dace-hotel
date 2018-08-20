import hysdk from './hysdk';
import axios from './axios';

/**
 * 通过GPS获取经纬度
 * @param {number} timeout 定位超时时间 默认5秒
 * @param {number} maximumAge 可以接受的缓存定位结果时间 默认半个小时
 * @return {object} 返回Promise对象
 */
function getLocation(timeout = 5000, maximumAge = 30 * 60 * 1000) {
  return new Promise((resolve, reject) => {
    hysdk.getLocation({
      type: 'wgs84',
      timeout,
      maximumAge,
      success: (res) => {
        const result = {
          latitude: res.coords.latitude,
          longitude: res.coords.longitude
        };
        resolve(result);
      },
      fail: (e) => {
        reject(e);
      }
    });

    // 在微信浏览器，用户拒绝授权时，hysdk没有执行fail回调
    // 所以在此强制reject
    setTimeout(() => {
      reject();
    }, timeout);
  });
}

/**
 * 通过定位获取城市
 * @param {number} timeout 定位超时时间 默认5秒
 * @param {number} maximumAge 可以接受的缓存定位结果时间 默认半个小时
 * @return {object} 返回Promise对象
 */
function getCityByGPS(timeout = 5000, maximumAge = 30 * 60 * 1000, latitude, longitude) {
  const url = '/api/location/getCityByGPS.json';
  if (latitude && longitude) {
    return axios({
      url,
      params: {
        latitude,
        longitude
      }
    }).then(data => data.city);
  }
  return new Promise((resolve, reject) => {
    getLocation(timeout, maximumAge)
      .then((res) => {
        axios({
          url,
          params: {
            latitude: res.latitude,
            longitude: res.longitude
          }
        }).then(data => resolve(data.city)).catch(e => reject(e));
      }).catch(e => reject(e));
  });
}

export {
  getLocation,
  getCityByGPS
};

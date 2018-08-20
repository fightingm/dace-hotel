import isEnvNode from './isEnvNode';

// 单例模式
const Cookie = function () {
  if (!isEnvNode) {
    this.originalString = document.cookie;
  }
};

if (!isEnvNode) {
  Cookie.prototype = {
    /**
         * 获得cookie 字符串
         */
    read() {
      this.originalString = document.cookie;
    },
    /**
         * 获得cookieHash
         */
    _getCookieHash(raw) {
      const cookieArr = document.cookie.split(';');
      const cookieHash = {};
      const decode = !raw ? unescape : decodeURIComponent;
      for (let i = 0; i < cookieArr.length; i++) {
        const pos = cookieArr[i].indexOf('=');
        if (pos !== -1) { cookieHash[cookieArr[i].substring(0, pos).replace(/(^\s*)/g, '').replace(/(\s*$)/g, '')] = decode(cookieArr[i].substring(pos + 1)).replace(/(^\s*)/g, '').replace(/(\s*$)/g, ''); }
      }
      return cookieHash;
    },
    /**
         * 设定cookie
         */
    setCookie(sName, sValue, dExpire, sDomain, sPath, raw) {
      const encode = !raw ? escape : encodeURIComponent;
      let _cookieString = `${sName}=${encode(sValue)}`;
      if (dExpire) { _cookieString += `; expires=${dExpire.toGMTString()}`; }
      if (sDomain) { _cookieString += `; domain=${sDomain}`; }
      if (sPath) { _cookieString += `; path=${sPath}`; }
      document.cookie = _cookieString;
    },
    /**
         * 获得指定cookie
         */
    getCookie(value) {
      return value && this._getCookieHash()[value];
    },
    /**
         * 移除指定cookie
         */
    deleteCookie(sName) {
      const _date = new Date(1);
      document.cookie = `${sName}=;expires=${_date.toGMTString()}`;
    },
    /**
         * 清空所有cookies
         */
    clearCookies() {
      const keys = document.cookie.match(/[^ =;]+(?==)/g);
      if (keys) {
        for (let i = keys.length; i--;) { this.deleteCookie(keys[i]); }
      }
    }
  };
}

export default new Cookie();

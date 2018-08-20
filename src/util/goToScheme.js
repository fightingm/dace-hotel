import hysdk from './hysdk';
import Sniff from './sniff';
import isEnvNode from './isEnvNode';

let goToScheme = () => {};

if (!isEnvNode) {
  const { qunar, scheme } = Sniff;
  const qunarReg = /qunar\.com/;

  const openNative = (url) => {
    window.location.href = url.toLocaleLowerCase().startsWith('qunar') ? url : (`${scheme}://${url}`);
  };

    // 默认以无 native 头的方式打开
  const openHyHttp = (url, navibar = 'navibar-none') => {
    if (qunarReg.test(url)) {
      window.location.href = `${scheme}://hy?url=${encodeURIComponent(url)}&type=${navibar}`;
    } else {
      hysdk.openWebView({
        url,
        type: 'browser',
        features: 'resizable,scrollbars,status'
      });
    }
  };

  goToScheme = (url, navibar) => {
    let startWidthHttp = url.toLocaleLowerCase().startsWith('http');
    if (!startWidthHttp) {
      const isRelativePath = url.startsWith('/') && /\.htm/.test(url);
      if (isRelativePath) {
        startWidthHttp = true;
        url = `${window.location.protocol}//${window.location.host}${url}`;
      }
    }
    if (qunar) {
      if (startWidthHttp) {
        openHyHttp(url, navibar);
      } else {
        openNative(url);
      }
      return;
    }

    if (startWidthHttp) {
      window.location.href = url;
    }
  };
}

export default goToScheme;

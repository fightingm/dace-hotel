import hysdk from '@qnpm/hysdk';
import '@qnpm/hysdk-qunar';

hysdk.config({
  debug: false,
  wechatSupport: true
});

hysdk.webview.showLoading({
  show: false
});

export default hysdk;

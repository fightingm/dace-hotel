import hysdk from './hysdk';
import isEnvNode from './isEnvNode';

let Sniff = {};

if (!isEnvNode) {
    Sniff = hysdk.sniff;
    Sniff.qunar = !!Sniff.qunar;
    Sniff.wechat = !!Sniff.browsers.wechat;
    Sniff.scheme = Sniff.scheme || 'touch';
    Sniff.isIphoneX = navigator.userAgent.indexOf('m/10.3') >= 0 || navigator.userAgent.indexOf('m/10.6') >= 0;

    Sniff.viewport = {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    };
}

export default Sniff;

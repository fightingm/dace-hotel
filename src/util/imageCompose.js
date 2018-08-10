import Toast from '$self-yo-component/toast';
import axios from 'axios';
import { loading } from '$self-component/loading';

let Canvas;

/**
 * 合成图片和二维码 并上传到图片服务器
 * @param {String} qrUrl 二维码Url
 * @param {String} bgUrl 背景图片Url
 * @param {Boolean} needUpload 是否需要上传 需要则返回imgzz地址 不需要则直接返回base64
 * @param {Number} posX 左上角为准 二维码与背景图片的相对横向位置
 * @param {Number} posY 左上角为准 二维码与背景图片的相对纵向位置
 * @return {Promise} 返回一个Promise对象 Promise的resolve返回生成好的图片的imgQunarzz地址
 */
const imageCompose = (qrUrl, bgUrl, needUpload = true, posX = 0, posY = 0) => {
    if (!Canvas) {
        Canvas = document.createElement('canvas');
    }

    const imgLoadArr = [qrUrl, bgUrl].map(url => {
        return _loadImage(url);
    })

    return new Promise((resolve, reject) => {
        loading.show();
        Promise.all(imgLoadArr)
            .then(res => {
                const dataUrl = _composeImage(res[0], res[1], posX, posY);

                if (!needUpload) {
                    resolve(dataUrl);
                    return;
                }

                const formData = new FormData();
                formData.append('file', _dataURLtoBlob(dataUrl), 'pic.png');

                axios({
                    method: 'POST',
                    url :'/api/upload/uploadimage.json',
                    data: formData,
                    needAllResult: true,
                    needLoading: true
                }).then(data => {
                    if (data.ret) {
                        resolve(data.data.img);
                        return;
                    }
                    reject(res.data);
                });
            })
            .catch(() => {
                loading.hide();
                Toast.show('图片获取失败');
            });
    })
}

function _loadImage(url) {
    return new Promise((resolve, reject) => {
        const _img = new Image();
        _img.crossOrigin = 'Anonymous';
        _img.onload = () => { resolve(_img) };
        _img.onerror = reject;
        _img.src = url;
    })
}

function _composeImage(qrImg, bgImg, posX, posY) {
    Canvas.width = bgImg.width;
    Canvas.height = bgImg.height;

    const ctx = Canvas.getContext('2d');

    ctx.drawImage(bgImg, 0, 0);
    ctx.drawImage(qrImg, 0, 0, qrImg.width, qrImg.height, posX, posY, qrImg.width, qrImg.height);
    const dataUrl = Canvas.toDataURL('image/png');

    return dataUrl;
}

function _dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

export default imageCompose;
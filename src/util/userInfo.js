import isEnvNode from './isEnvNode';
import cookie from './cookie';

let UserInfo = {};

if (!isEnvNode) {
  let QN241 = decodeURIComponent(cookie.getCookie('QN241') || '');
  const QN270 = decodeURIComponent(cookie.getCookie('QN270') || '');
  const QN1 = decodeURIComponent(cookie.getCookie('QN1') || '');
  UserInfo = {
    uid: '',
    gid: '',
    vid: '',
    pid: '',
    cid: ''
  };

  if (QN270 && QN270.split(',').length === 5) {
    const arr = QN270.split(',');
    [
      UserInfo.uid,
      UserInfo.vid,
      UserInfo.cid,
      UserInfo.gid,
      UserInfo.pid
    ] = arr;
  } else if (QN241) {
    QN241 = JSON.parse(QN241);
    UserInfo.vid = QN241.vid;
    UserInfo.pid = QN241.pid;
    UserInfo.uid = QN241.uid;
    UserInfo.cid = QN241.cid;
    UserInfo.gid = QN241.gid;
  } else if (QN1) {
    // QN1常用来作为touch端用户唯一标识，用以统计uv
    UserInfo.gid = QN1;
    UserInfo.vid = 'touch';
  }
}

export default UserInfo;

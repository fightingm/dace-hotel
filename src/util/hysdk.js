import isEnvNode from './isEnvNode';

const hysdk = isEnvNode ? null : require('$self-config/hysdk.config').default;

export default hysdk;

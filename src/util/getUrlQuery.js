import qs from 'qs';
import isEnvNode from './isEnvNode';

export default isEnvNode ? {} : qs.parse(window.location.search, { ignoreQueryPrefix: true });

import qs from 'qs';
import isEnvNode from './isEnvNode';

export default isEnvNode ? {} : qs.parse(location.search, { ignoreQueryPrefix: true });

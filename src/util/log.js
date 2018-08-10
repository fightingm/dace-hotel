import axios from './axios';

const log = (data, url = '/api/log.do') => axios.post(url, data);

export default log;

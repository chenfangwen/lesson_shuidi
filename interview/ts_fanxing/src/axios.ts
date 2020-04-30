import { AxiosRequestConfig} from './type/index';
import xhr from './xhr';
// xmlhttprequest
function axios(config: AxiosRequestConfig) {
  // url
  // data
  // params
  xhr(config);
}
export default axios;
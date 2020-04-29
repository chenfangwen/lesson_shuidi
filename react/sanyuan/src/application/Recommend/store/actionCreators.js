import { getBannerRequest } from '../../../api/request';
import { fromJS } from 'immutable';
import * as actionTypes from './constants';

export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: fromJS(data)
});

export const getBannerList = () => {
    return (dispatch) => {
        console.log('轮播图')
      getBannerRequest().then(data => {
          console.log(data.banners,'/////')
        const action = changeBannerList(data.banners);
        dispatch(action);
      }).catch(() => {
        console.log("轮播图数据传输错误");
      }) 
    }
};
import React, { useEffect } from 'react';
// import { renderRoutes } from 'react-router-config'
import {Content} from './style'
import * as actionTypes from './store/actionCreators';
import { connect } from 'react-redux'
import Slider from '../../components/slider';
import RecommendList from '../../components/recommendList';
import { forceCheck } from 'react-lazyload';
import { EnterLoading } from './../Singers/style';
import Scroll from '../../baseUI/scroll';
import Loading from '../../baseUI/loading-v2/index';

function Recommend(props){
    // const {route} = props
    const { bannerList, recommendList,enterLoading } = props;
    const { getBannerDataDispatch, getRecommendListDataDispatch } = props;
    useEffect(() => {
        if(!bannerList.size){
          getBannerDataDispatch();
        }
        if(!recommendList.size){
          getRecommendListDataDispatch();
        }
    }, []);
    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendListJS = recommendList ? recommendList.toJS() :[];
    return (
        <Content >
          <Scroll className="list" onScroll={forceCheck}>
            <div>
              <Slider bannerList={bannerListJS}></Slider>
              <RecommendList recommendList={recommendListJS}></RecommendList>
            </div>
          </Scroll>
          {enterLoading? <EnterLoading><Loading></Loading></EnterLoading> : null}
      </Content> 
    );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    // 不要再这里将数据toJS,不然每次diff比对props的时候都是不一样的引用，还是导致不必要的重渲染, 属于滥用immutablebannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  bannerList: state.getIn(['recommend', 'bannerList']),
  enterLoading: state.getIn(['recommend', 'enterLoading'])

});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionTypes.getBannerList());
        },
        getRecommendListDataDispatch() {
            dispatch(actionTypes.getRecommendList());
        },
    }
};

// 将ui组件包装成容器组件
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Recommend));


import React, { useEffect } from 'react';
// import { renderRoutes } from 'react-router-config'
import * as actionTypes from './store/actionCreators';
import { connect } from 'react-redux'
import Slider from '../../components/slider';
import RecommendList from '../../components/list';
function Recommend(props){
    // const {route} = props
    const { bannerList } = props;
    const { getBannerDataDispatch } = props;
    useEffect(() => {
        if(!bannerList.size){
          getBannerDataDispatch();
        }
    }, []);
    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendList = [1,2,3,4,5,6,7,8,9,10].map ((item,index) => {
        return {
          id: index,
          picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
          playCount: 17171122,
          name: "朴树、许巍、李健、郑钧、老狼、赵雷"
        }
      });
    return (
        <div>
            <Slider bannerList={bannerListJS}></Slider>
            <RecommendList recommendList={recommendList}></RecommendList> 
        </div>
    );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    // 不要再这里将数据toJS,不然每次diff比对props的时候都是不一样的引用，还是导致不必要的重渲染, 属于滥用immutable
    bannerList: state.getIn(['recommend', 'bannerList'])
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionTypes.getBannerList());
        }
        // getRecommendListDataDispatch() {
        //     dispatch(actionTypes.getRecommendList());
        // },
    }
};

// 将ui组件包装成容器组件
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Recommend));

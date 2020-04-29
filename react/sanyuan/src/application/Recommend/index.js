
import React, { useEffect } from 'react';
// import { renderRoutes } from 'react-router-config'
import * as actionTypes from './store/actionCreators';
import { connect } from 'react-redux'
function Recommend(props){
    console.log(props.bannerList,'---')
    // const {route} = props
    const { bannerList } = props;
    const { getBannerDataDispatch } = props;
    useEffect(() => {
        if(!bannerList.size){
          getBannerDataDispatch();
          console.log(bannerListJS,'+++')
        }
        // eslint-disable-next-line
    }, []);
    const bannerListJS = bannerList ? bannerList.toJS() : [];
    return (
        <div>
            Recommend
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

import React, { useState, useEffect } from 'react';
import Horizen from '../../baseUI/horizen-item';
import { categoryTypes, alphaTypes } from '../../api/config';
import Loading from '../../baseUI/loading';
import { EnterLoading } from './../Singers/style';
import {
    NavContainer,
    ListContainer,
    List,
    ListItem,
} from "./style";
import {
    getSingerList,
    getHotSingerList,
    changeEnterLoading,
    changePageCount,
    changeCategory,
    changeAlpha,
    refreshMoreSingerList,
    changePullUpLoading,
    changePullDownLoading,
    refreshMoreHotSingerList,
    changeLoading
} from './store/actionCreators';
import Scroll from './../../baseUI/scroll/index';
import { connect } from 'react-redux';

function Singers(props) {
    // let [category, setCategory] = useState('');
    // let [alpha, setAlpha] = useState('');
    const { alpha, category, singerList, updateDispatch, pullUpRefreshDispatch
    , pullDownRefreshDispatch, pullUpLoading, pullDownLoading,pageCount, loading } = props
    let handleUpdateAlpha = (val) => {
        // setAlpha(val);

        updateDispatch(category, val);
    }

    let handleUpdateCatetory = (val) => {
        // setCategory(val);
        updateDispatch(val, alpha);
    }
    useEffect(() => {
        updateDispatch(category, alpha);
    }, [])
    const singerListJS = singerList ? singerList.toJS() : [];

    const handlePullUp = () => {
        pullUpRefreshDispatch(category, alpha, category === '', pageCount);
    };

    const handlePullDown = () => {
        pullDownRefreshDispatch(category, alpha);
    };
    // 渲染函数，返回歌手列表
    const renderSingerList = () => {
        return (
            <List>
                {
                    singerListJS.map((item, index) => {
                        return (
                            <ListItem key={item.accountId + "" + index}>
                                <div className="img_wrapper">
                                    <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                                </div>
                                <span className="name">{item.name}</span>
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    };
    return (
        <div>
            <NavContainer>
                <Horizen
                    list={categoryTypes}
                    title={"分类 (默认热门):"}
                    handleClick={(val) => handleUpdateCatetory(val)}
                    oldVal={category}></Horizen>
                <Horizen
                    list={alphaTypes}
                    title={"首字母:"}
                    handleClick={val => handleUpdateAlpha(val)}
                    oldVal={alpha}></Horizen>
            </NavContainer>
            <ListContainer>
                <Scroll
                    pullUp={handlePullUp}
                    pullDown={handlePullDown}
                    pullUpLoading={pullUpLoading}
                    pullDownLoading={pullDownLoading}
                >
                    {renderSingerList()}
                    { loading ? <EnterLoading><Loading></Loading></EnterLoading> : null }
                </Scroll>
            </ListContainer>
        </div>
    )
}

const mapStateToProps = (state) => ({
    singerList: state.getIn(['singers', 'singerList']),
    enterLoading: state.getIn(['singers', 'enterLoading']),
    loading: state.getIn(['singers', 'loading']),
    pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
    pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
    pageCount: state.getIn(['singers', 'pageCount']),
    category: state.getIn(['singers', 'category']),
    alpha: state.getIn(['singers', 'alpha'])
});
const mapDispatchToProps = (dispatch) => {
    return {
        getHotSingerDispatch() {
            dispatch(getHotSingerList());
        },
        updateDispatch(category, alpha) {
            dispatch(changeCategory(category));
            dispatch(changeAlpha(alpha));
            dispatch(changePageCount(0));//由于改变了分类，所以pageCount清零
            dispatch(changeEnterLoading(true));//loading，现在实现控制逻辑，效果实现放到下一节，后面的loading同理
            // dispatch(changeLoading(true));
            dispatch(getSingerList(category, alpha));
            
        },
        // 滑到最底部刷新部分的处理
        pullUpRefreshDispatch(category, alpha, hot, count) {
            dispatch(changePullUpLoading(true));
            dispatch(changePageCount(count + 1));
            if (hot) {
                dispatch(refreshMoreHotSingerList());
            } else {
                dispatch(refreshMoreSingerList(category, alpha));
            }
        },
        //顶部下拉刷新
        pullDownRefreshDispatch(category, alpha) {
            dispatch(changePullDownLoading(true));
            dispatch(changePageCount(0));//属于重新获取数据
            if (category === '' && alpha === '') {
                dispatch(getHotSingerList());
            } else {
                dispatch(getSingerList(category, alpha));
            }
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));
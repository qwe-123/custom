import * as api from './service';
import queryString from 'query-string';

export default {
  namespace: 'notice',
  state: {
    noticeList: '',   //公告列表数据
    userCode: '',   //登录人ID
    noticeDetail: '',   //公告详情
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/home') {
          dispatch({
            type: 'getTrafficLogListForIndex',
            payload: {
              inDate: '2019-05-20'
            }
          })
        }
      })
    }
  },
  effects: {
    *getTrafficLogListForIndex({payload,}, { put, call, select }) {
      const { data } = yield call(api.getTrafficLogListForIndex, queryString.stringify(payload));
      if(data.success){
        yield put ({
          type:"save",
          payload:{
            noticeList: data.data,
          }
        })
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

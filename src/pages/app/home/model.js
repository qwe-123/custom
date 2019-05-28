import * as api from './service';
import queryString from 'query-string';

export default {
  namespace: 'travelHome',
  state: {
    travelList: '',
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
      let response = JSON.parse(data);
      if(response.IsSuccess){
        yield put ({
          type:"save",
          payload:{
            travelList: response.TSY,
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

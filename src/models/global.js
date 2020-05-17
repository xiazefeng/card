import { queryNotices } from '@/services/api';
import { queryCaptcha,validateCaptcha ,createOrder} from "@/services/user";

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
    validateCode:'',
  },

  effects: {
    *fetchNotices(_, { call, put, select }) {
      const data = yield call(queryNotices);
      yield put({
        type: 'saveNotices',
        payload: data,
      });
      const unreadCount = yield select(
        state => state.global.notices.filter(item => !item.read).length
      );
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: data.length,
          unreadCount,
        },
      });
    },
    *clearNotices({ payload }, { put, select }) {
      yield put({
        type: 'saveClearedNotices',
        payload,
      });
      const count = yield select(state => state.global.notices.length);
      const unreadCount = yield select(
        state => state.global.notices.filter(item => !item.read).length
      );
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: count,
          unreadCount,
        },
      });
    },
    *changeNoticeReadState({ payload }, { put, select }) {
      const notices = yield select(state =>
        state.global.notices.map(item => {
          const notice = { ...item };
          if (notice.id === payload) {
            notice.read = true;
          }
          return notice;
        })
      );
      yield put({
        type: 'saveNotices',
        payload: notices,
      });
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: notices.length,
          unreadCount: notices.filter(item => !item.read).length,
        },
      });
    },
    *fetchCaptcha({ payload, callback }, { call }) {
      const res = yield call(queryCaptcha, { ...payload });
      if (typeof callback === 'function') {
        callback(res);
      }
    },
    *validateCaptcha({ payload, callback }, { call, put }) {
      const res = yield call(validateCaptcha, { ...payload });
      if(res && res.status == 'ok'){
        yield put({
          type: 'saveChangeCode',
          payload:res.validateCode
        });
      }
      if (typeof callback === 'function') {
        callback(res);
      }
    },
    *createOrder({ payload, callback }, { call, put }) {
      const res = yield call(createOrder, { ...payload });
      // if(res && res.status == 'ok'){
      //   yield put({
      //     type: 'saveChangeCode',
      //     payload:res.validateCode
      //   });
      // }
      if (typeof callback === 'function') {
        callback(res);
      }
    },
  },

  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state, { payload }) {
      return {
        ...state,
        notices: payload,
      };
    },
    saveClearedNotices(state, { payload }) {
      return {
        ...state,
        notices: state.notices.filter(item => item.type !== payload),
      };
    },
    saveChangeCode(state, { payload }) {
      return {
        ...state,
        validateCode:payload
      }
    },
  },

  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};

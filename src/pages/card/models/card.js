import { queryCaptcha,validateCaptcha ,createOrder,queryCardList,queryResult} from "@/services/user";
export default {
  namespace: 'card',

  state: {
    cardList: [    ],
    payLog:{},
  },

  effects: {
    *fetchCardList(_, { call, put }) {
      const res = yield call(queryCardList);
      if(res && res.status == 'ok'){
        yield put({
          type: 'setCardList',
          payload:res.sellCardVOList
        });
      }
    },
    *fetchResult({payload,callback}, { call, put }) {
      const res = yield call(queryResult,payload);
      if(typeof callback==="function"){
        callback(res);
      } 
    },
  },
  reducers: {
    setCardList(state, action) {
      return {
        ...state,
        cardList: action.payload,
      };
    },
  },
};

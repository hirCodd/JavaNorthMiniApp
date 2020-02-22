// 测试请求about页面
import * as ApiService from '../services/index'

export default {
  namespace: 'about',
  state: {
    about: ''
  },
  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    //dva中是action的处理器，用于处理异步操作
    // eslint-disable-next-line no-unused-vars
    *load({ payload },{ call, put}){
      const { data } = yield call(ApiService.getAbout);
      yield put({
        type: 'save',
        payload: {
          about: data.data
        }
      })
    }
  }
}

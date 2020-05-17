import request from '@/utils/request';
import API from './api.path';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

/**
 * 获取验证码
 */
export async function queryCaptcha(params) {
  return request(`${API.CAPTCHA_QUERY.path}${params.mobile}`,{
    method:API.CAPTCHA_QUERY.method,
  });
}
/**
 * 校验验证码
 */
export async function validateCaptcha(params) {
  return request(`${API.CAPTCHA_VALIDATE.path}`,{
    method:API.CAPTCHA_VALIDATE.method,
    data:{...params}
  });
}
/**
 * 获取商品明细
 */
export async function queryCardList(params) {
  return request(`${API.CARD_LIST.path}`,{
    method:API.CARD_LIST.method,
    data:{...params}
  });
}

/**
 * 获取下单
 */
export async function createOrder(params) {
  return request(`${API.CREATE_ORDER.path}`,{
    method:API.CREATE_ORDER.method,
    data:{...params}
  });
}
/**
 * 获取订单结果
 */
export async function queryResult(params) {
  return request(`${API.ORDER_RESULT.path}`,{
    method:API.ORDER_RESULT.method,
    data:{...params}
  });
}
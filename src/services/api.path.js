/*
 * @Description: 接口URL地址
 * @Author: xiazf
 * @Date: 2019-07-18 15:11:54
 * @LastEditors: xiazf
 * @LastEditTime: 2019-10-16 17:33:07
 */
const no_token_path = '/noToken'
export default {
  //获取验证码
  'CAPTCHA_QUERY': { path: `${no_token_path}/code/sms/`, method: 'GET', },
  //校验验证码
  'CAPTCHA_VALIDATE': { path: `${no_token_path}/code/sms`, method: 'POST', },
  
  /**
   * 获取商品明细
   */
  'CARD_LIST':{ path: `${no_token_path}/shop/card/list`, method: 'GET', },
  /**
   * 下单
   */
  'CREATE_ORDER':{ path: `${no_token_path}/shop/card/order`, method: 'POST', },
   /**
   * 订单结果
   */
  'ORDER_RESULT':{ path: `${no_token_path}/shop/card/detail`, method: 'POST', },
}
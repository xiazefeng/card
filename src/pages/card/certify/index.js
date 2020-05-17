import React, { PureComponent, Fragment } from 'react';
import { Card, Steps, Icon, Row, Col, Form, Spin, Table, Modal } from 'antd';
import moment from 'moment';
import router from 'umi/router';
import Result from '@/components/Result'
import { connect } from 'dva';
import styles from '../index.less'
import styles1 from './index.less';
const { Step } = Steps;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


@connect(({ card, loading }) => ({
  card,
  loading: loading.effects['card/fetchResult'],
}))
export default class Certify extends PureComponent {
  state = {
    getData: false,
    timer: null,
    cardOrderDetailList: [],
    msg: '',
  }

  componentDidMount() {
    const { location: { query: { out_trade_no, seller_id } },
      dispatch,
      match: { params: { mobile } } } = this.props;
    if (mobile && seller_id) {
      let orderId = out_trade_no.substring(out_trade_no.length - 8);
      orderId = parseInt(orderId)
      this.loopData(mobile, orderId);
    } else {
      if (!this.modal1) {
        this.modal1 = Modal.confirm({
          title: '提示',
          content: '我已支付完成！',
          okText: '确定',
          cancelText: '取消',
          onOk: () => {
            this.loopData(mobile, out_trade_no);
          },
          onCancel: () => {
            this.setState({
              getData: true,
            })
          },

        })
      }
    }

  }
  columns = [{
    title: '卡号',
    dataIndex: 'cardNo',
    key: 'cardNo',
    render: (val) => val || `/`
  }, {
    title: '密码',
    dataIndex: 'cardPwd',
    key: 'cardPwd',
    render: (val) => val || `/`
  }, {
    title: '过期时间',
    key: 'cardExpireTime',
    render: (val) => val ? moment(val).format('YYYY-MM-DD HH:mm') : `/`
  }];
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  loopData = (mobile, orderId) => {
    const { dispatch } = this.props;
    this.state.timer = setInterval(() => {
      dispatch({
        type: 'card/fetchResult',
        payload: { mobile, orderId },
        callback: (res) => {
          if (res.status == 'ok') {
            this.setState({
              getData: true,
              cardOrderDetailList: res.cardOrderDetailList,
              msg: res.msg,
            })
            clearInterval(this.state.timer);
          }
        }
      });
    }, 1000);
  };

  render() {
    const { location: { query: { out_trade_no, total_amount }, state }, children, card, loading } = this.props;

    const information = (
      <div className={styles.information}>
        <Table size="small" columns={this.columns} dataSource={this.state.cardOrderDetailList} pagination={false} />
      </div>
    );
    const result = this.state.cardOrderDetailList && this.state.cardOrderDetailList.length > 0 ?
      <Result
        type="success"
        title="购买成功"
        description="以下为卡密详情，请截图或拍照保存，以免数据丢失。"
        extra={information}
        className={styles.result}
      />
      :
      <Result
        type="error"
        title={this.state.msg || "购买失败"}
        description="如果有任何疑问，请联系客服。"
        // extra={information}
        className={styles.result}
      />
    return (
      <>
        <Card title="订单详情" size="small"
          headStyle={{
            color: "black",
            fontSize: "18px",
            fontWeight: "bold"
          }}
          style={{ maxWidth: "1200px", margin: "24px auto", padding: " 5px 16px" }}>
          <Row>
            <Col xs={24} sm={8} >
              订单号：
              {out_trade_no}
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={8} >
              金额：
              <span>￥</span>
              <span style={{ color: "red", fontSize: '24px' }}>{total_amount}</span> 元
            </Col>
          </Row>
        </Card>
        <Spin spinning={!this.state.getData} tip={"正在操作中, 请稍后..."} size="large" >
          <Card style={{ maxWidth: "1200px", minHeight: "500px", margin: "auto", marginBottom: "24px" }}>
            {this.state.getData
              &&
              result
            }
          </Card>
        </Spin>
      </>
    );
  }
}

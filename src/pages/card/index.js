import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import {
    Card,
    Tabs,
    Alert,
    Row,
    Col,
    Button,
    Form,
    Modal,
    Input,
    InputNumber,
    Checkbox,
    message,
    Divider,
    Spin,
    Radio
} from 'antd';
import { Content50DataSource } from '../data.source';
import QueueAnim from 'rc-queue-anim';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import router from 'umi/router';
import styles from './index.less';

const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};
const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};

// 购买界面
const CreateForm = Form.create()(props => {
    const { modalVisible, form, currentItem, ruleChecked, onRuleChange, number, step, mLoading, onGetCaptcha,
        codeLoading, count,
        handleNumberChange,
        handleAdd, handleModalVisible } = props;
    const okHandle = () => {
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            // form.resetFields();
            handleAdd({
                ...fieldsValue,
                sellCardId: currentItem.sellCardId,
                categoryName: `${currentItem.classifyOne}${currentItem.goodsName}`
            });
        });
    };
    const getCaptcha = () => {
        form.validateFields(['mobile'], (err, fieldsValue) => {
            if (err) return;
            onGetCaptcha(fieldsValue.mobile);
        });
    }
    const dis = !ruleChecked && { disabled: true };
    const dis0 = step != 0 && { disabled: true };
    const dis1 = step == 2 && { disabled: true };
    return (
        <Modal
            className={styles.modalStyle}
            destroyOnClose
            title={"交易详情"}
            width={600}
            visible={modalVisible}
            onOk={okHandle}
            onCancel={() => handleModalVisible(false)}
            footer={[
                <div key="rule" style={{ float: 'left' }}>
                    <Checkbox
                        checked={ruleChecked}
                        onChange={onRuleChange}
                        {...dis0}
                    >
                    </Checkbox>
                    &nbsp;我同意并遵守平台<a href="https://www.baidu.com" target="_blank">《购买规范相关条例》</a>
                </div>,
                <Button key="back" onClick={() => handleModalVisible(false)}>
                    取消
                </Button>,
                <Button key="submit" type="primary" onClick={okHandle} {...dis} loading={mLoading} >
                    {step == 0 && "下一步"}
                    {step == 1 && "验证"}
                    {step == 2 && "去支付"}
                </Button>
            ]}
        >
            {currentItem &&
                <>
                    <FormItem {...formItemLayout} label="商品名">
                        {currentItem.classifyOne}{currentItem.goodsName}
                    </FormItem>
                    <FormItem {...formItemLayout} label="价格">
                        {parseFloat(currentItem.price * number).toFixed(2)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="购买数量">
                        {form.getFieldDecorator('number', {
                            initialValue: number,
                            rules: [{ required: true, message: '请选择商品数量！' }],
                        })
                            (<InputNumber min={1} max={300} onChange={handleNumberChange} {...dis0} />)
                        }
                    </FormItem>

                    <Spin spinning={mLoading} tip={"处理中..."} >
                        {step != 0 &&
                            <div >
                                <Divider />
                                <FormItem  {...formItemLayout} label="手机号:" >
                                    {form.getFieldDecorator('mobile', {
                                        initialValue: "",
                                        rules: [{ required: true, message: '请输入手机号', },
                                        {
                                            pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
                                            message: '请输入正确的手机号',
                                        }
                                        ],
                                    })(<Input placeholder="请输入手机号" style={{ width: "220px" }} {...dis1} />)}
                                </FormItem>
                                <FormItem  {...formItemLayout} label="验证码:">
                                    <Row type="flex" justify="space-between" style={{ width: "220px" }}>
                                        <Col span={11}>
                                            {form.getFieldDecorator('code', { rules: [{ required: true, message: '请输入验证码', },], })(<Input placeholder="短信验证码"   {...dis1} />)}
                                        </Col>
                                        <Col span={12}>
                                            <Button
                                                style={{ width: "100%" }}
                                                disabled={count}
                                                loading={codeLoading}
                                                // className={styles.getCaptcha}
                                                onClick={getCaptcha}
                                                type="primary" ghost
                                                {...dis1}
                                            >
                                                {count
                                                    ? `${count} s`
                                                    : (codeLoading ? "loading" : formatMessage({ id: 'app.register.get-verification-code' }))}
                                            </Button>
                                        </Col>
                                    </Row>
                                </FormItem>

                            </div>
                        }
                        {step == 2 &&
                            <>
                                <Divider />
                                <FormItem  {...formItemLayout} label="姓名:" >
                                    {form.getFieldDecorator('name', {
                                        initialValue: "",
                                        rules: [{ required: true, message: '请输入姓名', },
                                        {
                                            pattern: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
                                            message: '请输入正确的姓名',
                                        }
                                        ],
                                    })(<Input placeholder="请输入正确的姓名" style={{ width: "220px" }} />)}
                                </FormItem>
                                <FormItem  {...formItemLayout} label="身份证:" >
                                    {form.getFieldDecorator('identityCard', {
                                        initialValue: "",
                                        rules: [{ required: true, message: '请输入身份证号', },
                                        {
                                            pattern: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0\d|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
                                            message: '请输入正确的身份证号',
                                        }
                                        ],
                                    })(<Input placeholder="请输入身份证号" style={{ width: "220px" }} />)}
                                </FormItem>
                                <FormItem  {...formItemLayout} label="提卡方式:" >
                                    {form.getFieldDecorator('sendGoodsType', {
                                        initialValue: 1,
                                    })(
                                        <RadioGroup name="radiogroup" >
                                            <Radio style={radioStyle} value={1}>网页  <span style={{ color: '#ccc' }}>(支付完成后，成功界面直接展示卡密)</span></Radio>
                                            <Radio style={radioStyle} value={2}>短信  <span style={{ color: '#ccc' }}>(通过短信方式发送卡密到手机)</span></Radio>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                            </>
                        }
                    </Spin>
                </>
            }
        </Modal>
    );
});







@connect(({ card, loading }) => ({
    card,
    loading: loading.models.card,
}))
class CardIndex extends PureComponent {
    state = {
        defaultKey: "1",
        activeKey: "",
        ruleChecked: false,
        number: 1,
        step: 0,
        mLoading: false,
        codeLoading: false,
        count: 0,
    };

    componentDidMount() {
        const { dispatch, location: { state } } = this.props;
        if (state) {
            this.setState({
                activeKey: state
            })
        }
        dispatch({
            type: 'card/fetchCardList'
        })
    }

    Astop() {
        this.refs.mar.stop();
    }

    Astart() {
        this.refs.mar.start();
    }
    handleTabClick = (val) => {
        this.setState({
            activeKey: val
        })
    }
    handleMouseEnter = (id) => {
        this.setState({
            mouseKey: id
        })
    }
    handleMouseLeave = () => {
        this.setState({
            mouseKey: ''
        })
    }
    //购买第一步
    handleBuy = (obj) => {
        this.setState({
            currentItem: obj
        }, () => {
            this.handleModalVisible(true);
        })
    }
    handleModalVisible = flag => {
        this.setState({
            modalVisible: !!flag,
            number: 1,
            step: 0,
            mLoading: false,
        })
    }
    onRuleChange = (e) => {
        this.setState({
            ruleChecked: e.target.checked
        })
    }
    handleNumberChange = (val) => {
        this.setState({
            number: val
        })
    }
    handleAdd = (val) => {
        const { dispatch } = this.props;
        const { currentItem, step } = this.state;
        const money = parseFloat(currentItem.price * val.number);
        const _this = this;
        if (money > 3000) {
            message.error("单日消费金额不能超过3000元！")
        } else {
            if (step == 0) {
                _this.setState({ mLoading: true }, () => {
                    setTimeout(() => {
                        this.setState({
                            step: "1",
                            mLoading: false,
                        })
                    }, 300)
                })
            } else if (step == 1) {

                _this.setState({
                    mLoading: true
                }, () => {
                    dispatch({
                        type: 'global/validateCaptcha',
                        payload: {
                            mobile: val.mobile,
                            code: val.code
                        },
                        callback: (res) => {
                            if (res.status == 'ok') {
                                this.setState({
                                    step: "2",
                                    mLoading: false,
                                })
                                message.success('验证成功！');
                            } else {
                                message.error('验证失败！');
                                this.setState({
                                    mLoading: false,
                                })
                            }
                        }
                    })
                })
            } else if (step == 2) {
                _this.setState({
                    mLoading: true
                }, () => {
                    dispatch({
                        type: 'global/createOrder',
                        payload: {
                            ...val
                        },
                        callback: (res) => {
                            if (res.status == 'ok') {
                                this.handleModalVisible(false);
                                message.success("下单成功，正在跳转支付！请稍后……", 1, () => {
                                    if (res.payString) {
                                        var issafariBrowser = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
                                        if(issafariBrowser){
                                            Modal.confirm({
                                                title:'授权',
                                                content:'正在跳转支付宝支付页面，需要您的授权！',
                                                onOk:()=>{
                                                    const myWindow = window.open('');
                                                    myWindow.document.write(res.payString);
                                                    myWindow.focus();
                                                    router.push({
                                                        pathname:'/card/certify/'+val.mobile,
                                                        query:{
                                                            out_trade_no:res.cardOrderId,
                                                            total_amount:money
                                                        }
                                                    })
                                                },onCancel:()=>{
                                                    
                                                }
                                            })
                                        }else{
                                            const myWindow = window.open('');
                                            myWindow.document.write(res.payString);
                                            myWindow.focus();
                                            router.push({
                                                pathname:'/card/certify/'+val.mobile,
                                                query:{
                                                    out_trade_no:res.cardOrderId,
                                                    total_amount:money
                                                }
                                            })
                                        }
                                    }
                                });

                                // const div=document.createElement('divform');
                                // div.innerHTML= res.payString;                                    ;
                                // document.body.appendChild(div);
                                // document.forms[0].acceptCharset='utf-8';//保持与支付宝默认编码格式一致，如果不一致将会出现：调试错误，请回到请求来源地，重新发起请求，错误代码 invalid-signature 错误原因: 验签出错，建议检查签名字符串或签名私钥与应用公钥是否匹配
                                // document.forms[0].submit();
                            } else {
                                this.handleModalVisible(false);
                                message.error('下单失败！请稍后再操作');
                            }
                        }
                    })
                })
            }
        }
    }
    resetCount = (o, count) => {
        console.log(count);
        this.setState({ count });
    }
    onGetCaptcha = (mobile) => {
        const { dispatch, currentUser, form } = this.props;
        this.setState({ codeLoading: true });

        dispatch({
            type: 'global/fetchCaptcha',
            payload: { mobile },
            callback: (res) => {
                this.setState({ codeLoading: false });
                if (res.status == 'ok') {
                    message.success(res.msg);
                    let count = 59;
                    this.resetCount(mobile, count);
                    this[`interval${mobile}`] = setInterval(() => {
                        count -= 1;
                        this.resetCount(mobile, count);
                        if (count === 0) {
                            clearInterval(this[`interval${mobile}`]);
                        }
                    }, 1000);
                } else {
                    message.error(res.msg);
                }
            }
        })
    };
    render() {
        const { card: { cardList } } = this.props;
        const { modalVisible, currentItem, ruleChecked, number, step, mLoading, codeLoading, count, } = this.state;
        const createProps = {
            modalVisible,
            currentItem,
            ruleChecked,
            number,
            step,
            count,
            mLoading,
            codeLoading,
            handleModalVisible: this.handleModalVisible,
            onRuleChange: this.onRuleChange,
            handleNumberChange: this.handleNumberChange,
            handleAdd: this.handleAdd,
            onGetCaptcha: this.onGetCaptcha,
        };
        return (
            <>
                <div></div>
                <Card bordered={false} style={{ maxWidth: "1200px", margin: "auto" }} >
                    <div style={{ margin: "20px" }} >
                        {!sessionStorage.getItem('AlertClose')
                            &&
                            <Alert
                                style={{ backgroundColor: "#f1f1f1", borderWidth: "0", }}
                                message={
                                    <marquee style={{ verticalAlign: "middle", color: "#47a7ff" }} scrollamount='10' ref="mar" onMouseOver={this.Astop.bind(this)} onMouseOut={this.Astart.bind(this)}>
                                        <img src="./12.gif" style={{ width: "30px", height: "auto", marginRight: "5px" }} />
                                敬告：凡购买本商城任意卡密产品者，均需提交手机和身份证信息验证确保购买人的真实可靠，保证交易安全，防止违规操作！感谢您的理解和支持！</marquee>
                                }
                                onClose={() => sessionStorage.setItem('AlertClose', true)}
                                closable />
                        }
                    </div>
                    <Tabs
                        // activeKey={this.state.activeKey && this.state.defaultKey}
                        onTabClick={this.handleTabClick}
                        // defaultActiveKey={this.state.activeKey && this.state.defaultKey}
                        activeKey={this.state.activeKey || this.state.defaultKey}
                        tabPosition={'left'}
                        style={{ minHeight: '600px' }}>
                        {
                            Content50DataSource.block.children.map(item => {
                                const key = item.children.content.key;
                                return <TabPane tab={item.children.content.children} key={key}>
                                    <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                                        <QueueAnim
                                            animConfig={[
                                                { opacity: [1, 0], translateX: [0, 50] },
                                                { opacity: [1, 0], translateX: [0, -50] }
                                            ]}>
                                            {
                                                cardList && cardList.length > 0 && cardList.map(obj => {
                                                    if (obj.classifyId == key) {
                                                        return <Col md={6} xs={24} key={obj.categoryId}>
                                                            <Card style={{ width: "100%", border: "1px solid #e8e8e85c", marginBottom: "24px" }} key={obj.categoryId}
                                                                bodyStyle={{ padding: "10px 10px 0 10px" }}
                                                                noHovering={false}
                                                                onMouseEnter={() => this.handleMouseEnter(obj.categoryId)}
                                                                onMouseLeave={() => this.handleMouseLeave()}
                                                            >
                                                                <div className={styles.customImage}>
                                                                    <div className="imageWrap">
                                                                        <img alt="商品图片" src={obj.imgUrl} />
                                                                    </div>
                                                                </div>
                                                                <div className={styles.customCardTitle}>
                                                                    <p>
                                                                        <span className="product-name">{obj.classifyOne}{obj.goodsName}</span>
                                                                    </p>
                                                                    <p>
                                                                        <span className="com-rmb">¥</span>
                                                                        <span className="com-price">{obj.price}</span>
                                                                    </p>
                                                                </div>
                                                                <QueueAnim
                                                                    duration={600}
                                                                    animConfig={[
                                                                        { opacity: [1, 0], translateY: [0, 50] },
                                                                        { opacity: [1, 0], translateY: [0, 50] }
                                                                    ]}>
                                                                    {this.state.mouseKey == obj.categoryId ?
                                                                        <div style={{ position: "absolute", bottom: "5px", right: "5px" }} key="button1">
                                                                            <Button type="primary" onClick={() => { this.handleBuy(obj) }} >立即购买</Button>
                                                                        </div>
                                                                        : null}
                                                                </QueueAnim>
                                                            </Card>
                                                        </Col>
                                                    }
                                                })
                                            }
                                        </QueueAnim>
                                    </Row>
                                </TabPane>
                            })
                        }
                    </Tabs>
                </Card>
                <CreateForm {...createProps} />
            </>
        );
    }
}

export default CardIndex;

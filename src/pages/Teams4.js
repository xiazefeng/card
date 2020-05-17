import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Modal, Form, Card } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { getChildrenToRender } from './utils';
import QRCode from 'qrcode.react';

class Content8 extends React.PureComponent {
  state = {
    currentId: null,
    currentTitle: '',
    currentImg:'',
    modalVisible: false,
  }
  getDelay = (e, b) => (e % b) * 30 + Math.floor(e / b) * 30 + b * 30;
  handleMouseEnter = (title,img,id) => {
    this.setState({
      currentId: id,
      currentTitle: title,
      modalVisible: true,
    })
  }
  getBlockChildren = (item, i) => {
    const children = item.children;
    const delay = this.props.isMobile ? i * 50 : this.getDelay(i, 24 / item.md);
    const liAnim = {
      y: 30,
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad',
      delay,
    };
    return (
      <TweenOne component={Col} animation={liAnim} key={i.toString()} {...item}>
        <div {...children} title={children.title.children}>
          <div className="image-wrapper" {...children.img} onClick={() => this.handleMouseEnter(children.title.children,children.img.children,children.title.id)}>
            <img src={children.img.children} alt="img" />
          </div>
          <h2 {...children.title}>{children.title.children}</h2>
          <div {...children.content}>{children.content.children}</div>
        </div>
      </TweenOne>
    );
  };

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const children = dataSource.block.children.map(this.getBlockChildren);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...dataSource.OverPack}>
            <QueueAnim type="bottom" key="img">
              <Row {...dataSource.block} key="img">
                {children}
              </Row>
            </QueueAnim>
          </OverPack>
        </div>
        <Modal
          // title={this.state.currentTitle}
          width={300}
          footer={null}
          visible={this.state.modalVisible}
          onCancel={() => {
            this.setState({
              currentId: null,
              currentTitle: '',
              currentImg:'',
              modalVisible: false,
            })
          }}
        >
          <Card bordered={false} style={{ width: 250 }} bodyStyle={{ padding: 0 }}
          >
            <img style={{width:"250px",height:"250px"}}  src={`http://shop.yflow.cn/goods/findgoodwxcode.action?id=${this.state.currentId}`} />
            <h2 style={{textAlign:'center',marginBottom:"10px"}}>{this.state.currentTitle} </h2>
            <p>打开微信扫一扫上方二维码，通过手机购买。</p>
            {/* <QRCode
              value={`http://shop.yflow.cn/goods/findgoodwxcode.action?id=${this.state.currentId}`}
              size={150}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"L"}
              includeMargin={false}
              renderAs={"svg"}
              imageSettings={{
                src: this.state.currentImg,
                x: null,
                y: null,
                height: 30,
                width: 30,
                excavate: true,
              }}
            /> */}
          </Card>
        </Modal>
      </div>
    );
  }
}

export default Content8;

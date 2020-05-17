/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';


import Banner5 from './Banner5';
import Content5 from './Content5';
import Feature8 from './Feature8';
import Content1 from './Content1';
import Feature2 from './Feature2';
import Feature1 from './Feature1';
import Teams4 from './Teams4';

import {
  // Nav30DataSource,
  Banner50DataSource,
  Content50DataSource,
  Feature80DataSource,
  Content10DataSource,
  Feature20DataSource,
  Feature10DataSource,
  Feature21DataSource,
  Teams40DataSource,
  Teams41DataSource,
  Teams42DataSource,
  // Footer00DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      // show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    // if (location.port) {
    //   // 样式 build 时间在 200-300ms 之间;
    //   setTimeout(() => {
    //     this.setState({
    //       show: true,
    //     });
    //   }, 500);
    // }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [

      <Banner5
        id="Banner5_0"
        key="Banner5_0"
        dataSource={Banner50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="card_business"
        key="card_business"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,

      <Teams4
        id="Teams4_0"
        key="Teams4_0"
        dataSource={Teams40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams4
        id="Teams4_2"
        key="Teams4_2"
        dataSource={Teams42DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams4
        id="Teams4_1"
        key="Teams4_1"
        dataSource={Teams41DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature8
        id="Feature8_0"
        key="Feature8_0"
        dataSource={Feature80DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content1
        id="Content1_0"
        key="Content1_0"
        dataSource={Content10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature1
        id="Feature1_0"
        key="Feature1_0"
        dataSource={Feature10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_1"
        key="Feature2_1"
        dataSource={Feature21DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {/* {this.state.show && children} */}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
        {children}
      </div>
    );
  }
}

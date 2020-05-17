import React, { Component, Fragment } from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import { connect } from 'dva';
import Link from 'umi/link';
import { Icon,Affix } from 'antd';
import DocumentTitle from 'react-document-title';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import styles from './UserLayout.less';
import logo from '../assets/logo.svg';
import getPageTitle from '@/utils/getPageTitle';
import Media from 'react-media';
import Footer0 from './Footer0';
import Nav3 from './Nav3';

const links = [
  {
    key: 'help',
    title: formatMessage({ id: 'layout.user.link.help' }),
    href: '',
  },
  {
    key: 'privacy',
    title: formatMessage({ id: 'layout.user.link.privacy' }),
    href: '',
  },
  {
    key: 'terms',
    title: formatMessage({ id: 'layout.user.link.terms' }),
    href: '',
  },
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2020 云流商城 All Rights Reserved
  </Fragment>
);

 const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020 <a href="#">云流商城</a> All Rights
        Reserved
      </span>
    ),
  },
};
const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      '/logo2.png',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'sub0',
        className: 'header3-item',
        children: {
          href: '/',
          children: [{ children: '首 页', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
class UserLayout extends Component {
  
  componentDidMount() {
    const {
      dispatch,
      route: { routes, authority },
    } = this.props;
    dispatch({
      type: 'menu/getMenuData',
      payload: { routes, authority },
    });
  }
  render() {
    const {
      children,
      location: { pathname },
      breadcrumbNameMap,
      isMobile
    } = this.props;
    return (
      <DocumentTitle title={getPageTitle(pathname, breadcrumbNameMap)}>
        <div style={{backgroundImage: 'url(/backg1.png)',
                    backgroundPosition: 'center 700px',
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat"}}>
              <Affix offsetTop={0}  >
                <Nav3
                  id="Nav3_0"
                  key="Nav3_0"
                  dataSource={Nav30DataSource}
                  isMobile={isMobile}
                  />
            </Affix>
          <div style={{display:"block",width:"100%",minHeight:'calc(100vh - 144px )'}}>
            {children}
           </div> 
            <Footer0
              id="Footer0_0"
              key="Footer0_0"
              dataSource={Footer00DataSource}
              isMobile={isMobile}
            />
        </div>
      </DocumentTitle>
    );
  }
}

export default connect(({ menu: menuModel }) => ({
  menuData: menuModel.menuData,
  breadcrumbNameMap: menuModel.breadcrumbNameMap,
}))(props => (
  <Media query="(max-width: 599px)">
    {isMobile => <UserLayout {...props} isMobile={isMobile} />}
  </Media>
));
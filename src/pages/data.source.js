import React from 'react';
import router from 'umi/router';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'http://47.106.187.11/image.info/logo.png',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: '导航一', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: '导航二', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: '导航三', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '#',
          children: [{ children: '导航四', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>云流商城</p>
          </span>
        ),
        className: 'banner5-title',
      },
    
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <span>
            <span>
              <p>致力于全品类虚拟商品服务，</p>
              <p>为买家提供便捷、绿色、 安全、快速的一体化购买体验.</p>
              <p>
                <br />
              </p>
            </span>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          href: '#card_business',
          className: 'banner5-button',
          type: 'primary',
          children: '开始使用',
        },
      },
    ],
  },
  image: {
    className: 'banner5-image k9m4m87t2c6-editor_css',
    children:
      './home.png',
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>卡密业务</p>
            </span>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <span>
              <p>CADR BUSINESS PRODUCTS</p>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content',
          onClick:()=>{
            router.push({
              pathname:'/card',
              state:"1",
            })} 
          },
          img: {
            children:
              './yidong.jpg',
          },
          content: { children: '移动话费卡',key:"1" },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' ,
          onClick:()=>{
            router.push({
              pathname:'/card',
              state:"2",
            })} },
          img: {
            children:
              './liantong.jpg',
          },
          content: { children: '联通话费卡',key:"2" },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content',
          onClick:()=>{
            router.push({
              pathname:'/card',
              state:"3",
            })}  },
          img: {
            children:
              './dianxin.jpg',
          },
          content: { children: '电信话费卡',key:"3" },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content', onClick:()=>{
            router.push({
              pathname:'/card',
              state:"4",
            })} },
          img: {
            children:
              './jingdong.jpg',
          },
          content: { children: '京东卡' ,key:"4"},
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content', onClick:()=>{
            router.push({
              pathname:'/card',
              state:"5",
            })} },
          img: {
            children:
              './suning.jpg',
          },
          content: { children: '苏宁卡',key:"5" },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content', onClick:()=>{
            router.push({
              pathname:'/card',
              state:"6",
            })} },
          img: {
            children:
              './xcyd.png',
          },
          content: { children: '携程卡',key:"6" },
        },
      },
    ],
  },
};
export const Teams40DataSource = {
  wrapper: { className: 'home-page-wrapper content8-wrapper' },
  page: { className: 'home-page content8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>视频会员</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'content-wrapper',
    gutter: 100,
    children: [
      {
        name: 'block0',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/aiqiyi.png',
          },
          title: { className: 'content8-title', children: '爱奇艺会员' ,id:1180},
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block1',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/youku.png',
          },
          title: { className: 'content8-title', children: '优酷会员' ,id:1186},
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block2',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/cibn.png',
          },
          title: { className: 'content8-title', children: 'CIBN高清影视',id:1197 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block3',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/tengxun.png',
          },
          title: { className: 'content8-title', children: '腾讯视频会员',id:1202 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block4',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/souhu.png',
          },
          title: { className: 'content8-title', children: '搜狐视频会员',id:1210 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block5',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/migu.png',
          },
          title: { className: 'content8-title', children: '咪咕视频钻石会员',id:1235 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block6',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/mangguo.png',
          },
          title: { className: 'content8-title', children: '芒果TV(PC移动)',id:1236},
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block7',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/mangguo.png',
          },
          title: { className: 'content8-title', children: '芒果TV(全屏影视)',id:1238 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block8',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/baofeng.png',
          },
          title: { className: 'content8-title', children: '暴风影音会员',id:1262 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block9',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/fengxing.png',
          },
          title: { className: 'content8-title', children: '风行视频会员',id:1263 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block10',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/leshi.png',
          },
          title: { className: 'content8-title', children: '乐视超级影视会员',id:1280 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
    ],
  },
};
export const Teams41DataSource = {
  wrapper: { className: 'home-page-wrapper content8-wrapper' },
  page: { className: 'home-page content8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>游戏服务</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'content-wrapper',
    gutter: 100,
    children: [
      {
        name: 'block0',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/shengda.png',
          },
          title: { className: 'content8-title', children: '盛大一卡通',id:1225 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block1',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/jiuyou.png',
          },
          title: { className: 'content8-title', children: '久游一卡通',id:1227 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block2',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/wanmei.png',
          },
          title: { className: 'content8-title', children: '完美一卡通',id:1243},
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block3',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/langang.png',
          },
          title: { className: 'content8-title', children: '蓝港一卡通',id:1244 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block4',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/wangyi.png',
          },
          title: { className: 'content8-title', children: '网易一卡通',id:1245 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block5',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/yinsu.png',
          },
          title: { className: 'content8-title', children: 'QQ音速',id:1246 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block6',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/xuanwu.png',
          },
          title: { className: 'content8-title', children: '炫舞时代',id:1247 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block7',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/wangzhe.png',
          },
          title: { className: 'content8-title', children: '王者荣耀',id:1248 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block8',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/yingxiong.png',
          },
          title: { className: 'content8-title', children: '英雄联盟',id:1249 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
    ],
  },
};
export const Teams42DataSource = {
  wrapper: { className: 'home-page-wrapper content8-wrapper' },
  page: { className: 'home-page content8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>网娱服务</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'content-wrapper',
    gutter: 100,
    children: [
      {
        name: 'block0',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/lanren.png',
          },
          title: { className: 'content8-title', children: '懒人听书',id:1201 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block1',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/zhangyue.png',
          },
          title: { className: 'content8-title', children: '掌阅',id:1212},
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block2',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'ximalaya.png',
          },
          title: { className: 'content8-title', children: '喜马拉雅会员',id:1223 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block3',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/kugou.png',
          },
          title: { className: 'content8-title', children: '酷狗音乐',id:1204 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block4',
        md: 4,
        xs: 8,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              '/kuwo.png',
          },
          title: { className: 'content8-title', children: '酷我音乐',id:1211 },
          content: {
            className: 'content8-content',
            // children: '公司+职位 信息暂缺',
          },
        },
      },
      // {
      //   name: 'block5',
      //   md: 4,
      //   xs: 8,
      //   className: 'content8-block-wrapper',
      //   children: {
      //     className: 'content8-block',
      //     img: {
      //       className: 'content8-img',
      //       children:
      //         'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
      //     },
      //     title: { className: 'content8-title', children: 'Jack' },
      //     content: {
      //       className: 'content8-content',
      //       // children: '公司+职位 信息暂缺',
      //     },
      //   },
      // },
      // {
      //   name: 'block6',
      //   md: 4,
      //   xs: 8,
      //   className: 'content8-block-wrapper',
      //   children: {
      //     className: 'content8-block',
      //     img: {
      //       className: 'content8-img',
      //       children:
      //         'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
      //     },
      //     title: { className: 'content8-title', children: 'Jack' },
      //     content: {
      //       className: 'content8-content',
      //       // children: '公司+职位 信息暂缺',
      //     },
      //   },
      // },
      // {
      //   name: 'block7',
      //   md: 4,
      //   xs: 8,
      //   className: 'content8-block-wrapper',
      //   children: {
      //     className: 'content8-block',
      //     img: {
      //       className: 'content8-img',
      //       children:
      //         'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
      //     },
      //     title: { className: 'content8-title', children: 'Jack' },
      //     content: {
      //       className: 'content8-content',
      //       // children: '公司+职位 信息暂缺',
      //     },
      //   },
      // },
    ],
  },
};
export const Feature80DataSource = {
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  page: { className: 'home-page feature8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature8-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature8-title-h1',
        children: (
          <span>
            <p>卡密交易步骤</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'feature8-title-content',
        children: (
          <span>
            <p>流程简单清晰，需求快速响应</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'feature8-button-wrapper',
    children: [
      {
        name: 'button',
        className: 'feature8-button',
        children: { href: '#card_business', children: '立即体验' },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: 'feature8-carousel',
    wrapper: { className: 'feature8-block-wrapper' },
    children: {
      className: 'feature8-block',
      titleWrapper: {
        className: 'feature8-carousel-title-wrapper',
        title: { className: 'feature8-carousel-title' },
      },
      children: [
        {
          name: 'block0',
          className: 'feature8-block-row',
          gutter: 120,
          title: {
            className: 'feature8-carousel-title-block',
            children: '平台自主训练流程',
          },
          children: [
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <p>选择卡密产品</p>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>点击首页所需要购买的卡密业务产品</p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>验证手机号</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>第一步验证购买人联系手机号</p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>实名验证</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>
                              规避网络交易风险，保证交易的安全，进行实名认证
                            </p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <p>支付完成，提取卡密</p>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>
                          选择提卡方式，并完成支付。系统将会马上将卡密展示给你。
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: './service.jpg',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>服务器安全</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <span>
          <span>
            <span>
              <p>
                采用服务器集群，防御高，故障率低，无论用户身在何处，均能获得流畅安全可靠的体验
              </p>
            </span>
          </span>
        </span>
      </span>
    ),
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: './safe.jpg',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <span>
          <p>资金保障</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          客户的商品，全部加密处理，专业运维24小时处理，您的帐户安全将得到充分的保障。
        </p>
      </span>
    ),
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: './customer.jpg',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <span>
          <p>专属客服</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          专业客服团队，专属客服一对一贴心服务，7*24小时全天候在线为你解答。
        </p>
      </span>
    ),
  },
};
export const Feature21DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: './honest.jpg',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <span>
          <p>诚信第一</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <span>
          <p>
            诚信永远是我们商城的经营之本，我们抱诚守真尊重、爱护平台的每一位买家。
          </p>
        </span>
      </span>
    ),
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};

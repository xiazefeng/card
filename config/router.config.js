export default [
  {
    path: '/blank',
    name: 'blank',
    component: './blank',
  },
  // user
  {
    path: '/',
    component: '../layouts/UserLayout',
    routes: [
      
      {
        path: '/',
        name: 'welcome',
        component: 'index',
      },
      {
        path: '/card',
        name: 'card',
        component: './card',
      },
      {
        path: '/card/certify/:mobile',
        name: 'certify',
        component: './card/certify',
      },
     
      {
        component: '404',
      },
    ],
  },
  
];

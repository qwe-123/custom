// ref: https://umijs.org/config/
import { primaryColor } from '../src/defaultSettings';

export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        targets: {
          ie: 11,
        },
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
      },
    ],
    [
      'umi-plugin-pro-block',
      {
        moveMock: false,
        moveService: false,
        modifyRequest: true,
        autoAddMenu: true,
      },
    ],
  ],
  targets: {
    ie: 11,
  },
  define: {
    'process.env': {},
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.API_ENV': process.env.API_ENV,
    'process.env.PROXY_ENV': process.env.PROXY_ENV
  },
  proxy: {
    '/Trattic/': {
      // target: 'http://localhost:9002/',
      target: 'http://129.211.19.226:9002/',
      changeOrigin: true,
      pathRewrite: { '^/server': '' },
    },
  },

  /**
   * 路由相关配置
   */
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [{ path: '/user', component: './Welcome' }],
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        { path: '/', redirect: '/welcome' },
        // dashboard
        {
          path: '/welcome',
          name: 'welcome',
          icon: 'smile',
          component: './Welcome',
        },
        // {
        //   path: 'https://github.com/umijs/umi-blocks/tree/master/ant-design-pro',
        //   name: 'more-blocks',
        //   icon: 'block',
        // },
        {
          path: '/home',
          name: 'home',
          icon: 'smile',
          component: './app/home',
        },
        {
          path: '/list',
          name: 'list',
          icon: 'smile',
          routes: [
            {
              path: '/list/index',
              name: 'list',
              component: './app/list',
            },
            {
              path: '/list/travel',
              name: 'travel',
              component: './app/list/travel',
            },
          ],
        },
      ],
    },

  ],
  disableRedirectHoist: true,

  /**
   * webpack 相关配置
   */
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  externals: {
    '@antv/data-set': 'DataSet',
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
};

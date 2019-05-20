//多环境打包
const devUrl = process.env.NODE_ENV==='development'?'':process.env.API_ENV;
// const devUrl = 'http://129.211.19.226:9002';

module.exports = {
  api: {
    queryNotices: `/api/notices`,
    queryCurrent: '/api/currentUser',
    query: '/api/users',
    getTrafficLogListForIndex: `${devUrl}/Trattic/trafficLog/getTrafficLogListForIndex`,
  },
};

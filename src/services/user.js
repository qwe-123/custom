import request from '@/utils/request';
//
export async function queryUsers() {
  return request('/api/users',{
    method: 'POST',
    data,
  })
}

// export async function queryCurrent() {
//   return request('/api/currentUser',{
//     method: 'POST',
//     data,
//   })
// }

export async function queryNotices (data) {
  return request('/api/notices',{
    method: 'POST',
    data,
  })
}


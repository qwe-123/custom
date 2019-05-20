import request from '@/utils/request';
import { api } from '@/utils/config';

//公告系统列表页
export async function getTrafficLogListForIndex (data) {
  return request(api.getTrafficLogListForIndex,{
    method: 'GET',
    data,
  })
}

import config from './config';
import request from './request';
import fetch from 'dva/fetch';

/*根据日期计算周几*/
const whatDay = (value) => {
  const week = ['日', '一', '二', '三', '四', '五', '六'];
  const date = new Date(value).getDay();
  return '周'+week[date];
};

//获得两个日期之间相差的天数
const getDays = (date1, date2) => {
  let date1Str = date1.split('/');//将日期字符串分隔为数组,数组元素分别为年.月.日
  //根据年 . 月 . 日的值创建Date对象
  let date1Obj = new Date(date1Str[0], (date1Str[1]-1), date1Str[2]);
  let date2Str = date2.split('/');
  let date2Obj = new Date(date2Str[0], (date2Str[1]-1), date2Str[2]);
  let t1 = date1Obj.getTime();
  let t2 = date2Obj.getTime();
  let dateTime = 1000 * 60 * 60 * 24; //每一天的毫秒数
  let minusDays = Math.floor(((t2-t1) / dateTime));//计算出两个日期的天数差
  return Math.abs(minusDays);//取绝对值
};
// 驼峰转连字符
// String.prototype.humpToHyphen = function () {
//   return this.replace(/([A-Z])/g, '-$1').toLowerCase()
// }
/**
 * 数组内查询
 * @param   {array}      array
 * @param   {String}    id
 * @param   {String}    keyAlias
 * @return  {Array}
 */
const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null;
  }
  const item = array.filter(_ => _[keyAlias] === key);
  if (item.length) {
    return item[0];
  }
  return null;
};

/**
 * 数组格式转树状结构
 * @param   {array}     array
 * @param   {String}    id
 * @param   {String}    pid
 * @param   {String}    children
 * @return  {Array}
 */
  // const arrayToTree = (array, id = 'id', pid = 'pid', children = 'children') => {
  //   let data = lodash.cloneDeep(array)
  //   let result = []
  //   let hash = {}
  //   data.forEach((item, index) => {
  //     hash[data[index][id]] = data[index]
  //   })
  //
  //   data.forEach((item) => {
  //     let hashVP = hash[item[pid]]
  //     if (hashVP) {
  //       !hashVP[children] && (hashVP[children] = [])
  //       hashVP[children].push(item)
  //     } else {
  //       result.push(item)
  //     }
  //   })
  //   return result
  // }
  // 金额千分制，保留两位小数，如果为null，返沪''
const filterMoneyFormat = (value) => {
    let money = '';
    if (value || value === 0) {
      money = parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    return money;
  };
// 上传图片
const uploadTicketInfo = (files) => {
  let formData = new FormData();
  formData.append('file',files[0].file);
  formData.append('type',0);
  formData.append('token','');
  return fetch('http://filenet.yuanh.com.cn/Files/Upload/UploadYH.aspx', {
    method: 'POST',
    body: formData,
  }).then(response => {
    return response.json();
  })
    .then(data => ({ data }))
    .catch(err => ({ err }));
};
// 发票验重(获取发票信息)
const getTicketInfo = (files) => {
  let imgData = files[0].url.split('base64,');
  let params = {
    image_data: imgData[1],
    app_secret: 'c3a083371f60554dece8e360592da5e5',
  };
  return fetch('https://ocr-api.ccint.com/ocr_service?app_key=82828c703f8221b4bbcc9630d7b42bd2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  }).then(response => {
    return response.json();
  })
    .then(data => ({ data }))
    .catch(err => ({ err }));
};
export {
  config,
  request,
  filterMoneyFormat,
  getTicketInfo,
  uploadTicketInfo,
  queryArray,
  whatDay,
  getDays,
  // color,
  // classnames,
  // queryURL,
  // queryArray,
  // arrayToTree,
};

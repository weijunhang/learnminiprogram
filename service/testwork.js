import request from './request.js'


export function getMultiDate() {
  return request({
    url: 'https://www.apiopen.top/meituApi'
  })
}

export function getShopData(type, page){
  return request({
    url:'https://api.apiopen.top/musicRankings',
    data:{
      type,
      page, 
    }
  })
}
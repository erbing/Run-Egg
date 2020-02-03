'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    const { serverUrl, pageSize } = this.config.news;

    const { data: idList } = await this.ctx.curl('http://127.0.0.1:7001/public/mock/list.json', {
      // data: {
      //     orderBy: '"$key"',
      //     startAt: `"${pageSize * (page - 1)}"`,
      //     endAt: `"${pageSize * page - 1}"`
      // },
      // dataType: 'json'
    });

    const newsList = await Promise.all(
      Object.keys(idList).map(key => {
        // const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl('http://127.0.0.1:7001/public/mock/list.json');
      })
    );

    console.log('----list----', newsList);
    return newsList.map(res => res.data);
  }
}

module.exports = NewsService;

'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
    async index() {
        const { ctx, app, config, service, logger } = this;
        const obj = await ctx.service.test.index();
        const upID = ctx.helper.upperCase(obj.id);
        ctx.body = 'test' + upID;
    }
}

module.exports = TestController;

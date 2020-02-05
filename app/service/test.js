const Service = require('egg').Service;

class TestService extends Service {
    index() {
        const { ctx } = this;
        return ctx.request.query;
    }
}

module.exports = TestService;

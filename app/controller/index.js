const Controller = require("egg").Controller;

class IndexController extends Controller {
  async index() {
    this.ctx.body = "hello eggs";
  }
}

module.exports = IndexController;

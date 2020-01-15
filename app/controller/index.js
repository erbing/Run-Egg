const Controller = require("egg").Controller;

class IndexController extends Controller {
  async index() {
    this.ctx.body = "hello egg";
  }
}

module.exports = IndexController;

exports.index = async ctx => {
    ctx.body = {
        success: true,
        data: [1, 2, 34]
    };
};

exports.new = async () => {
    const { ctx } = this;
    ctx.body = 'return api new';
};

exports.create = async () => {
    const { ctx } = this;
    ctx.body = 'return api create';
};

exports.show = async () => {
    const { id } = this.ctx.params;
    const goods = ['1', 2, '3'];
    this.success(goods);
};

exports.edit = async () => {
    const { ctx } = this;
    ctx.body = 'return api edit';
};

exports.update = async () => {
    const { ctx } = this;
    ctx.body = 'return api update';
};

exports.destroy = async () => {
    const { ctx } = this;
    ctx.body = 'return api destroy';
};

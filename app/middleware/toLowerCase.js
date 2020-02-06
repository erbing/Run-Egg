// 基于 洋葱圈模型

module.exports = options => {
    return async function toLowerCase(ctx, next) {
        await next();
        const result = ctx.request.query;
        ctx.body = result;
    };
};

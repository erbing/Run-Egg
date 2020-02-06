module.exports = options => {
    return async function toLowerCase(ctx, next) {
        await next();

        const result = ctx.request.query;
        ctx.body = result;
    };
};

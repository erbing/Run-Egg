'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    router.get('/user/:id', controller.test.index);
    router.resources('users', '/api/users', controller.api.users);
    router.resources('posts', '/api/posts', controller.posts);
};

// 全面的了解 router 使用方案
// router.verb('path-match', app.controller.action);
// router.verb('router-name', 'path-match', app.controller.action);
// router.verb('path-match', middleware1, ..., middlewareN, app.controller.action);
// router.verb('router-name', 'path-match', middleware1, ..., middlewareN, app.controller.action);

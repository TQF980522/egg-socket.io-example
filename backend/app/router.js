'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  // 这里表示对于监听到的 chat 事件，将由 app/io/controller/chat.js 处理
  io.of('/').route('chat', app.io.controllers.chat);
};

import Vue from 'vue';
import App from './App.vue';
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';

Vue.use(VueSocketio, socketio('http://127.0.0.1:7001/'));

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  sockets: {
    connect: function() {
      console.log('socket connected');
    },
    res: function(val) {
      console.log('接收到服务端消息', val);
    },
  },
}).$mount('#app');

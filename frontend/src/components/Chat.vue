<template>
  <div>
    <button @click="sendMessageToServer">click me!</button>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  methods: {
    sendMessageToServer: function () {
      this.$socket.emit('chat', '111111111111')
    },
  },
}
</script>

<style lang="stylus"></style>
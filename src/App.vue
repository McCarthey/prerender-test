<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html,
  body {
      margin: 0;
      padding: 0;
  }
  button {
    border: none;
    outline: none;
  }
  p {
    margin: 0;
  }
  div {
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>

<template>
  <div class="home">
    <p>Join our next meeting!</p>
    <router-link to="/meetings">Meeting Times</router-link>
  </div>
</template>
<script>
</script>
<style>
  .home {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .home p {
    color: #f88dad;
    font-size: 9vw;
  }
  .home a {
    display: flex;
    padding: 10px;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #8390fa;
  }
  .home a:hover {
    color: white;
    background: #9da8fb;
  }
</style>

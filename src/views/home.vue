<template>
  <div class="home">
    <router-link to="./about">About us</router-link>
    <router-link to="./meetings">Meetings</router-link>
    <router-link to="./creations">Creations</router-link>
    <router-link to="./contact">Contact Us</router-link>
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
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }
  .home * {
    color: white;
    font-size: 5vw;
  }
  .home *:hover {
    color: white;
    font-size: 10vw;
  }
</style>

<template>
  <div class="contact">
    <p>
      <a-icon type="phone" :style="{ fontSize: '170%'}"/> +1 (920) 415-4429
    </p>
    <p>
      <a-icon type="mail" :style="{ fontSize: '170%'}"/>
      <a href="mailto:denmarkhackclub@gmail.com"> denmarkhackclub@gmail.com</a>
    </p>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.contact {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.contact * {
  font-size: 120%;
}
</style>

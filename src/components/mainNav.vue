<template>
  <div class="mainNav">
    <a-menu theme="dark" v-model="current" mode="horizontal">
      <a-menu-item v-on:click="$router.push('/')" key="Home">
        <a-icon type="home" />Home
      </a-menu-item>
      <a-menu-item v-on:click="$router.push('/about')" key="About Us">
        <a-icon type="question"/>About Us
      </a-menu-item>
      <a-menu-item v-on:click="$router.push('/meetings')" key="Meetings">
        <a-icon type="calendar"/>Meetings
      </a-menu-item>
      <a-menu-item v-on:click="$router.push('/creations')" key="Creations">
        <a-icon type="cloud-upload"/>Creations
      </a-menu-item>
      <a-menu-item v-on:click="$router.push('/contact')" key="Contact Us"><a-icon type="edit" /> Contact Us</a-menu-item>
    </a-menu>
    <a href="https://hackclub.com" class="menuImg">
      <img style="width:100px;" src="../assets/hack_club_red_text.png">
    </a>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      current: ['about_us']
    }
  },
  mounted () {
    this.current = [this.$router.history.current.name]
  },
  methods: {
    log: function (log) {
      window.console.log(log)
    }
  }
}
</script>

<style>
.mainNav {
  height: auto;
  display: flex;
  line-height: normal;
  align-items: center;
  width: 100vw;
}
.mainNav .menuImg {
  position: absolute;
  right: 10px;
}
.mainNav .ant-menu {
  width: auto;
  background: rgb(40, 40, 40);
  display: flex;
}
.mainNav .ant-menu-item-selected {
  background: red !important;
}
</style>

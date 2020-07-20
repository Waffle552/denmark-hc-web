<template>
  <div class="mainNav">
    <div class="spacing">
      <router-link class="menuItem" exact to="/">
        <img src="@/assets/dhcLOGO.png" width="50px" height="50px"/>
      </router-link>
      <router-link class="menuItem" to="/about">
        <a-icon type="question" />
        <p>About</p>
      </router-link>
      <router-link class="menuItem" to="/meetings">
        <a-icon type="calendar" />
        <p>Meetings</p>
      </router-link>
      <router-link class="menuItem" to="/creations">
        <a-icon type="cloud-upload" />
        <p>Creations</p>
      </router-link>
      <router-link class="menuItem" to="/contact">
        <a-icon type="edit" />
        <p>Contact</p>
      </router-link>
      <div class="menuItem hiddenMobile" style="color: white; font-size: 20px;">*Code your own adventure*</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
.logo {
  display: flex;
  height: auto;
  justify-content: space-around;
  align-items: center !important;
  margin: 1vh 0 1vh 0;

}
.mainNav {
  height: 10vh;
  display: flex;
  line-height: normal;
  align-items: center;
  justify-content: center;
  width: 100vw;
  line-height: 10px;
  background: #39393A;
}
.mainNav > .spacing {
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
}

.mainNav .menuItem {
  padding: 10px;
  height: auto;
  flex-direction: row;
  justify-items: center;
  align-content: center;
  color: #edbfc7;
  flex-wrap: nowrap;
}
.mainNav .menuItem > p {
  color: #edbfc7;
  margin: 0px;
  margin-left: 0.5vw;
}
.mainNav .menuItem > * {
  display: inline-block;
}
.mainNav .router-link-active {
  background-color: rgba(0, 0, 0, 0);
  color: #f9e9ec;
  text-decoration: none;
}
.mainNav .router-link-active > p {
  color: #f9e9ec;
  text-decoration: none;
}
.mainNav .menuItem:hover > * {
  color: #f9e9ec;
}

@media only screen and (max-width: 700px) {
  .hiddenMobile {
    display: none !important;
  }
  .mainNav > .spacing {
  width: 100% !important;
}
  .mainNav .menuItem {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    flex-direction: column;
    flex: 1 1 0;
  }
  .mainNav > .spacing {
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
}
  .mainNav .menuItem p {
    font-size: 70%;
  }
  .mainNav .menuImg {
    height: 50px;
    padding: 0px;
  }
  .mainNav .router-link-active {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    text-decoration: none;
  }
  .mainNav .router-link-active > p {
    color: white;
    text-decoration: none;
  }
  .mainNav .menuItem:hover > * {
    color: white;
  }
}
</style>

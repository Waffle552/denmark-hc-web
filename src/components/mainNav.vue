<template>
  <div>
    <div class="logo">
      <img src="../assets/whiteHCLetters.svg" />
      <p>Code your own adventure</p>
    </div>
    <div class="mainNav">
      <router-link class="menuItem" exact to="/">
        <a-icon type="home" />
        <p>Home</p>
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
      <div class="filler"></div>
      <a href="https://hackclub.com" class="menuImg">
        <img class="navLogo-desktop" style="width:100px;" src="../assets/hack_club_red_text.png" />
        <img
          class="navLogo-mobile"
          src="https://raw.githubusercontent.com/hackclub/hackclub/master/internals/logos/hack_club_letter.png"
        />
      </a>
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
.logo p{
  color: white;
  font-size: 4vw;
  font-weight: bold;
  margin: 0px;
}
.logo img{
  width: 30vw;
}
.mainNav {
  height: auto;
  display: flex;
  line-height: normal;
  align-items: center;
  width: 100vw;
  line-height: 10px;
}
.navLogo-desktop {
  width: 100px;
}
.navLogo-mobile {
  width: 50px;
  display: none;
}
.mainNav .menuImg {
  background: rgb(50, 50, 50);
  margin-left: auto;
  padding-right: 10px;
  height: 35px;
  align-items: center;
  display: flex;
}
.mainNav .filler {
  background: rgb(50, 50, 50);
  flex: 1;
  height: 35px;
  color: rgba(0, 0, 0, 0);
}
.mainNav .menuItem {
  background: rgb(50, 50, 50);
  padding: 10px;
  height: 35px;
  flex-direction: row;
  justify-items: center;
  align-content: center;
  color: lightgrey;
  flex-wrap: nowrap;
  border: 1px rgb(50, 50, 50);
}
.mainNav .menuItem > p {
  color: lightgrey;
  margin: 0px;
  margin-left: 0.5vw;
}
.mainNav .menuItem > * {
  display: inline-block;
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

@media only screen and (max-width: 700px) {
  .navLogo-desktop {
    display: none;
  }
  .navLogo-mobile {
    width: 50px;
    display: flex;
  }
  .mainNav .filler {
    height: 50px;
    display: none;
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
  .mainNav .menuItem p {
    font-size: 70%;
  }
  .mainNav .menuImg {
    height: 50px;
    padding: 0px;
  }
  mainNav .router-link-active {
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

<template>
  <div id="app">
    <a-layout>
      <a-layout-header  v-if='!mobile'>
        <mainNav/>
      </a-layout-header>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <a-layout-footer  v-if='mobile'>
        <mainNav/>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import mainNav from './components/mainNav.vue'
export default {
  name: 'App',
  components: {
    mainNav
  },
  data () {
    return {
      mobile: window.innerWidth <= 700
    }
  },
  created () {
  },
  destroyed () {

  },
  methods: {}
}
</script>

<style>
body {
  overflow: hidden;
  margin: 0px;
  padding: 0px;
}
#app {
  margin: 0px;
  padding: 0px;
  height: 100vh;
}
.mainContentList {
  line-height: normal;
  list-style-type: none;
  background: rgba(40,40,40, .70);
  min-height: 100%;
  height: auto;
  width: 80%;
  margin: auto;
  padding: 5px 5%;
}
.mainContentList > div {
  margin-top: 20px;
}
.mainContentList h1 {
  color: white;
  font-size: 250%;
}
.mainContentList p {
  padding: 0px;
  margin-left: 20px;
  font-size: 150%;
  color: lightgrey;
}
.mainContentList * {
  padding: 0px;
  margin: 0px;
}

.ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
.ant-layout-content {
  color: #fff;
  overflow: auto;
  padding: 0px;
  justify-content: center;
}
.ant-layout-header {
  padding: 0 !important;
  height: auto !important;
  padding: 0 !important;
  background: rgba(0,0,0,0) !important;
}
.ant-layout-footer {
  padding: 0 !important;
  height: auto !important;
  padding: 0 !important;
  background: rgba(0,0,0,0) !important;
}
.ant-layout {
  margin-bottom: 48px;
  height: 100vh;
  background-image: linear-gradient(-45deg, #FF1EA2, #FF5004) !important;
  display: flex;
}
.ant-layout:last-child {
  margin: 0;
}
@media only screen and (max-width: 700px){
  .mainContentList h1 {
  font-size: 200%;
  }
  .mainContentList p {
    font-size: 100%;
  }
  .ant-layout-content > * {
    padding-bottom: 200px !important;
  }
}
</style>

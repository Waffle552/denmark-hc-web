<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <mainNav/>
      </a-layout-header>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
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
    return {}
  }
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
}
.mainContentList {
  line-height: normal;
  list-style-type: none;
  margin-top: 10px;
  margin-right: 50px;
}
.mainContentList > li {
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
}
.mainContentList * {
  padding: 0px;
  margin: 0px;
}
.ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}

.ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
.ant-layout-content {
  background: rgb(32, 32, 32);
  color: #fff;
  height: auto;
  overflow: auto;
}
.ant-layout-header {
  padding: 0 !important;
  height: auto !important;
  padding: 0 !important;
  background: rgb(40, 40, 40) !important;
}
.ant-layout {
  margin-bottom: 48px;
  height: 100vh;
}
.ant-layout:last-child {
  margin: 0;
}
</style>

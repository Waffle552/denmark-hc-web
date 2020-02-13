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
  data: function () {
    return ({
      'xLast': null,
      'xDelta': null,
      'yLast': null,
      'yDelta': null
    })
  },
  methods: {
    'onTouch': function (evt) {
      this.xLast = evt.touches[0].screenX
      this.yLast = evt.touches[0].screenY
    },
    'onMove': function (evt) {
      this.xDelta = this.xLast - evt.touches[0].screenX
      this.yDelta = this.yLast - evt.touches[0].screenY

      this.xLast = evt.touches[0].screenX
      this.yLast = evt.touches[0].screenY
    },
    'onRemove': function (evt) {
      if (Math.abs(this.xDelta) > 15 && Math.abs(this.yDelta) < 5) {
        let routes = this.$router.options.routes
        for (let i = 0; i < routes.length; i++) {
          if (routes[i].path === this.$router.currentRoute.path) {
            let newPath = i + Math.sign(this.xDelta)
            if (newPath < routes.length && newPath >= 0) {
              this.$router.push(routes[newPath].path)
            } else if (newPath < 0) {
              this.$router.push(routes[routes.length - 1])
            } else if (newPath > routes.length - 1) {
              this.$router.push(routes[0])
            }
            break
          }
        }
      }
    }
  },
  created: function () {
    document.addEventListener('touchstart', this.onTouch, false)
    document.addEventListener('touchmove', this.onMove, false)
    document.addEventListener('touchend', this.onRemove, false)
  }

}
</script>

<style>
body {
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  background-image: linear-gradient(-45deg, #FF1EA2, #FF5004) !important;
}
#app {
  margin: 0px;
  padding: 0px;
  height: 100vh;
  background: rgba(0, 0, 0, 0)
}
.mainContentList {
  line-height: normal;
  list-style-type: none;
  background: rgba(40,40,40, .70);
  min-height: 100%;
  height: auto;
  width: 90%;
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
  padding: 0px;
  justify-content: center;
  overflow: auto;
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
  display: flex;
  background: rgba(0, 0, 0, 0) !important;
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

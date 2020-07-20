<template>
  <div class='meeting mainContentList'>
    <p>Have an idea for a meeting? Contact us directly or via one of these <a v-on:click="$router.push('/contact')">options</a>.</p>
    <a-list v-bind:itemLayout='format' :dataSource='data'>
      <a-list-item slot='renderItem' slot-scope='item'>
        <a-list-item-meta v-bind:description='item.description'>
          <p slot='title' class= "listItem-title">{{item.date}}</p>
        </a-list-item-meta>
        <div>
          <div class='meetingList-time'>Location: {{item.location}}</div>
          <div class='meetingList-date'>Time: {{item.time}}</div>
          <div class='meetingList-food'>Food: {{item.food}}</div>
          <div>Complete: <a-icon class='meetingList-check' v-if='item.complete' type='check' /><a-icon class='meetingList-x' v-if='!item.complete' type="close" /></div>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
const data = [
  {
    date: '2/4/2020',
    description: 'Activities of this meeting include working own you own web app/site(Beginner - Advanced HTML JS CSS) or participate in making a browser ready clone of Minecraft(Advanced - Moderate skill in JS).',
    time: '4:00pm-5:30pm',
    location: 'Denmark Community School',
    food: 'Pizza',
    complete: false
  },
  {
    date: '11/12/2019',
    description:
      'We will run the Personal Website workshop for new attendees. Returning members will participate in creating a Minecraft server before the break. After the break, we will mess around in Google Game Builder',
    time: '3:30pm-5:30pm',
    location: 'Denmark Community School',
    food: 'Pizza',
    complete: true
  },
  {
    date: '10/29/2019',
    description:
      'We will run the Personal Website workshop today at the HC meeting!',
    time: '3:30pm-5:30pm',
    location: 'Denmark Community School',
    food: 'Pizza',
    complete: true
  }
]
export default {
  components: {},
  data () {
    return {
      data,
      format: 'horizontal'
    }
  },
  created () {
    this.setFormat()
  },
  destroyed () {

  },
  methods: {
    setFormat () {
      if (window.innerWidth < 600) {
        this.format = 'vertical'
      } else {
        this.format = 'horizontal'
      }
    }
  }
}
</script>

<style>

.meeting {
  padding: 10px;
  width: 90%;
  height: 100%;
  margin: auto;
  min-height: 100%;
  height: auto;
}
.meeting .listItem-title {
  color: white !important;
}
.meeting .ant-list-item-content div {
  color: grey !important;
}
.meeting .ant-list-item-meta-description {
  color: lightgrey !important;
}
.meeting .ant-list-item {
  border-bottom: solid 1px grey !important;
}
.meetingList-check {
  color: green !important;
}
.meetingList-x {
  color: red !important;
}
@media only screen and (max-width: 600px){
  .meeting * {
    font-size: 100%;
  }
}
</style>

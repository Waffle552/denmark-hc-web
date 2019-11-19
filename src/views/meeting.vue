<template>
  <div class='meeting'>
    <a-list itemLayout='horizontal' :dataSource='data'>
      <a-list-item slot='renderItem' slot-scope='item'>
        <a-list-item-meta v-bind:description='item.description'>
          <p slot='title'>{{item.date}}</p>
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
    date: '12/03/2019',
    description: "Participants of the meeting will design a 2d platformer with a winter theme. They will discuss the mechanics of the game and draw concept art for it as well. The leaders of our club will make sure the project is within the scale of the participants' skill level. In the next meeting, we will at the least start building the game. At most complete and polish the game.",
    time: '4:00pm-5:30pm',
    location: 'Denmark Community School',
    food: 'Subway Cookies',
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
      data
    }
  }

}
</script>

<style>
.meeting {
  padding: 10px;
}
.meeting .ant-list-item, .meeting .ant-list-item p {
  color: white !important;
}
.meeting .ant-list-item-meta-description {
  color: grey !important;
}
.meeting .ant-list-item {
  border-bottom: solid 1px red !important;
}
.meetingList-check {
  color: green !important;
}
.meetingList-x {
  color: red !important;
}
</style>

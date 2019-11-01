<template>
  <div class='meeting'>
    <a-list itemLayout='horizontal' :dataSource='data'>
      <a-list-item slot='renderItem' slot-scope='item'>
        <a-list-item-meta v-bind:description='item.description'>
          <p slot='title'>{{item.title}}</p>
        </a-list-item-meta>
        <div>
          <div class='meetingList-time'>Location: {{item.location}}</div>
          <div class='meetingList-date'>Time: {{item.time}}</div>
          <div class='meetingList-food'>Food: {{item.food}}</div>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
const data = [
  {
    title: '10/29/2019',
    description:
      'We will run the Personal Website workshop today at the HC meeting!',
    time: '3:30pm-5:30pm',
    location: 'Denmark Community School',
    food: 'Pizza'
  },
  {
    title: '11/12/2019',
    description:
      'We will run the Personal Website workshop for new attendees. Returning members will participate in creating a Minecraft server before the break. After the break, we will mess around in Google Game Builder',
    time: '3:30pm-5:30pm',
    location: 'Denmark Community School',
    food: 'Pizza'
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
.meeting .ant-list-item * {
  color: white !important;
}
.meeting .ant-list-item-meta-description {
  color: grey !important;
}
.meeting .ant-list-item {
  border-bottom: solid 1px red !important;
}
</style>

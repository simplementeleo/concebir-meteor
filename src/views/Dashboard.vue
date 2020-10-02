<template>
  <div class="container-concebir">
    
   <b-row class="mt-5">
      <card-dashboard v-for="(item, index) in itemsDashboard" v-bind:key="index" :text="item.title" :icon="item.icon" :shadow="item.shadow" :bg="item.bg" :url="item.url" :delay="item.delay" />
   </b-row>
    
  </div>
</template>

<script>

import CardDashboard from '../components/Utilities/CardDashboard'

export default {
  components: {
    CardDashboard
  },
  data(){
    return {
      itemsDashboard: [
        { delay: '100ms', title: 'Médicos', icon: 'user-md', shadow: '#03a9f43d', bg: '#03A9F4', url: 'Medicos' },
        { delay: '200ms', title: 'Sedes', icon: 'tasks', shadow: '#8fc74d69', bg: '#8BC34A', url: 'Sedes' },
        { delay: '300ms', title: 'Citas', icon: 'calendar', shadow: '#ffc1074a', bg: '#FFC107', url: '#' },
      ]
    }
  }
}
</script>

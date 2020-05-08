<template>
  <v-app>
      <navbar></navbar>
      <v-content class="mx-4 mb-4">
        <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'App',
  components:{
    navbar
  },
  data: () => ({
    
  }),
};
</script>

<style scoped>
.theme--light.v-application {
    background: #F5F5F5;
}
</style>
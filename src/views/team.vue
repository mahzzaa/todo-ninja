<template>
  <div>
      <h1 class="font-weight-regular grey--text">team</h1>

      <v-container class="my-5">
          
        <v-layout row wrap>
           <v-flex v-for="person in team" :key="person" xs12 sm6 md4 lg3>
             <v-card flat text class="text-center ma-3">
               <v-responsive class="pt-4">
                 <v-avatar size="100" class="grey lighten-2">
                   <img :src="person.avatar">
                 </v-avatar>
               </v-responsive>
               <v-card-text>
                 <div class="subheading">{{person.name}}</div>
                 <div class="grey--text">{{person.role}}</div>

                 <v-card-actions>
                   <v-btn >
                     <v-icon left small color="grey">message</v-icon>
                     <span class="grey--text caption">message</span>
                   </v-btn>
                 </v-card-actions>
               </v-card-text>
             </v-card>
           </v-flex>
        </v-layout>

      </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
      ]
    }
  }
}
</script>

<style>

</style>
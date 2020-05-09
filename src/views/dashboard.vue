<template>
  <div class="home">
    <h1 class="font-weight-regular grey--text">Home Page</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small @click="sortBy('title')" v-on="on">
              <v-icon left small color="grey">folder</v-icon>
              <span class="grey--text caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>sort projects by project name</span>
        </v-tooltip>
          
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small @click="sortBy('person')" v-on="on">
              <v-icon left small color="grey">person</v-icon>
              <span class="grey--text caption text-lowercase">By person</span>
           </v-btn>
          </template>
          <span>sort projects by person name</span>
        </v-tooltip>
        
      </v-layout>
      <v-card elevation-1 flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="` pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>

          <v-chip xs2 sm4 md2 :class="`${project.status}`">
            <div class="right">
              <v-chip small :class="`${project.status} caption my-2  white--text`">{{project.status}}</v-chip>
            </div>
          </v-chip>
          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark>clear</v-icon>
          </v-btn>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb'
export default {
  name: 'Home',
  data() {
    return {
      projects: [ ]
    }
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b)=> a[prop] < b[prop] ? -1 : 1)
    }
  },
  created(){
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change =>{
        if (change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      });
    })
  }
}
</script>

<style>
  .project.complete{
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing{
    border-left: 4px solid orange;
  }
  .project.overdue{
    border-left: 4px solid tomato;
  }

  .v-chip.complete{
  background: #3cd1c2 !important;
  }
  .v-chip.ongoing{
    background: #ffaa2c !important;
  }
  .v-chip.overdue{
    background: #f83e70 !important;
  }
</style>
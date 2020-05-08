<template>
  <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text slot="activator" class="green accent-2"  v-on="on">Add New Project</v-btn>
      </template>
      
        <v-card>
            <v-card-title primary-title>
                <h2 >Add a new project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="title" v-model="title" prepend-icon="folder"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>
                    <v-menu  v-model="menu2"  :close-on-content-click="false"  :nudge-right="40" transition="scale-transition"   offset-y min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field v-model="date"   label="Due date" prepend-icon="date_range" readonly v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                    <v-btn text class="success mx-0 mt-3" @click="submit">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
  </v-dialog>
  
</template>

<script>
export default {
    data(){
        return{
            title: '',
            content:'',
            due:''
        }
    },
    methods:{
        submit(){
            console.log(this.title, this.content)
        }
    }
}
</script>

<style>

</style>
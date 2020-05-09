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
                <v-form class="px-3" ref="form">
                    <v-text-field label="title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
                    <v-menu  v-model="menu2"  :close-on-content-click="false"  :nudge-right="40" transition="scale-transition"   offset-y min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field v-model="date" :rules="inputRules" :value="formattedDate" label="Due date" prepend-icon="date_range" readonly v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                    <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
  </v-dialog>
  
</template>

<script>
import db from '@/fb'
export default {
    data(){
        return{
            title: '',
            content:'',
            due:'',
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
            inputRules: [
                v => v.length >= 3 || 'Minimum lenght is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods:{
        submit(){
            if (this.$refs.form.validate()){
                this.loading = true;

                const project = {
                    title: this.title,
                    content: this.content,
                    due: this.due,
                    person:'The Net Ninja',
                    status: 'ongoing'
                }

                db.collection('projects').add(project).then(()=>{
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('projectAdded')
                })
            }
        }
    }
}
</script>

<style>

</style>
<template>
      <nav>
          <v-toolbar flat class="grey lighten-4">
              <v-app-bar-nav-icon app class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
              <v-toolbar-title class="text-uppercase grey--text">
                  <span class="font-weight-light">todo</span>
                  <span class="font-weight-">ninja</span>
              </v-toolbar-title>
          <v-spacer></v-spacer>
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn text slot="activator" color="grey" v-on="on">
                    <v-icon left>expand_more</v-icon>
                    <span>menu</span>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="link in links" :key="link.title" router :to="link.route" @click="v-on">
                    <v-list-item-title>
                        {{link.text}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
          <v-btn color="grey lighten-4">
              <span>sing out</span>
              <v-icon right>exit_to_app</v-icon>
          </v-btn>
          </v-toolbar>
        <v-navigation-drawer absolute temporary  v-model="drawer"  class="purple lighten-2">
            <v-layout column align-center>
                <v-flex class="my-5">
                    <v-avatar size="100" class="grey lighten-2">
                   <img src="/avatar-1.png">
                 </v-avatar>
                 <p class="white--text subheading mt-1">
                     The Net Ninja
                 </p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <popUp/>
                </v-flex>
            </v-layout>   
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content >
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
      </nav>
</template>

<script>
import popUp from './popUp'
export default {
    components:{popUp},
    data(){
        return{
            drawer: false,
              links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/' },
                { icon: 'folder', text: 'My Projects', route: '/projects' },
                { icon: 'person', text: 'Team', route: '/team' },
            ]
        }
    }
}
</script>

<style>

</style>
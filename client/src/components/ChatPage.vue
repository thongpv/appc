<template>
  <div id="inspire">
    <!-- navigation-drawer LEFT  -->
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- END: navigation-drawer LEFT  -->
    
    <!-- Header -->
    <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
      clipped-right
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">App Chat</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-badge color="red">
          <small slot="badge">3</small>
          <v-icon>forum</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon>
        <v-badge color="red">
          <small slot="badge">9</small>
          <v-icon>notifications</v-icon>
        </v-badge>
      </v-btn>
      
      <v-menu offset-y>
        <v-btn icon large slot="activator">
          <v-avatar size="32px" tile>
            <img
              src="https://vuetifyjs.com/static/doc-images/logo.svg"
              alt="Vuetify"
            >
          </v-avatar>
        </v-btn>
        <v-list>
          <v-list-tile v-for="(item, index) in itemsAvatar" :key="index" @click="">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <!-- END: Header -->

    <!-- Content -->
    <v-content>
      <!-- router-view -->
      <router-view></router-view>
      <!-- END: router-view -->
    </v-content>
    <!-- END: Content -->
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    el2: '',
    items: [
      { icon: 'chat', text: 'Chat random' },
      { icon: 'contacts', text: 'Contacts' }
      // {
      //   icon: 'keyboard_arrow_up',
      //   'icon-alt': 'keyboard_arrow_down',
      //   text: 'Labels',
      //   model: false,
      //   children: [
      //     { icon: 'add', text: 'Create label' }
      //   ]
      // },
      // { icon: 'settings', text: 'Settings' },
      // { icon: 'chat_bubble', text: 'Send feedback' },
      // { icon: 'help', text: 'Help' }
    ],
    itemsAvatar: [
      { title: 'Profile' },
      { title: 'Change password' },
      { title: 'Logout' }
    ],
    itemsUsers2: [
      // { header: 'Today' },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/1.jpg', title: 'Abilene, 28 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/2.jpg', title: 'Benson, 30 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.  Wish I could come, but I'm out of town this weekend.  Wish I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could  I could come, but I'm out of town this weekend.  Wish I could come, but I'm out of town this weekend.  Wish I could come, but I'm out of town this weekend.", isMe: true },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/3.jpg', title: 'Christmas, 18 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/4.jpg', title: 'Coleridge, 20 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" }
    ]
  }),
  methods: {
    e2: function () {

    }
  },
  created () {
    // Set default hide two navigation-drawer
    if (document.body.clientWidth <= 1265) {
      this.drawer = false
    }
  }
}
</script>

<style scoped>

</style>

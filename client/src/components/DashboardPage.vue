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

    <v-content>
      <v-toolbar>
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-spacer></v-spacer>
        <v-toolbar-title
          class="fw400"
        >
          <v-btn
            flat
          >
            Hội lập trình
            <small class="grey--text text--lighten-1 ml-1" style="font-size: 12px;">(239)</small>
          </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <i class="material-icons">videocam</i>
        </v-btn>
        <v-toolbar-side-icon 
          @click.stop="drawerRight = !drawerRight"
        >
          <i class="material-icons">list</i>
        </v-toolbar-side-icon>
      </v-toolbar>

      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <!-- Content -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    
  <!-- navigation-drawer RIGHT  -->
  <v-navigation-drawer
    fixed
    v-model="drawerRight"
    right
    clipped
    app
  > 
    <div style="padding: 8px 8px 0px 8px;">
      <!-- Search -->
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
      ></v-text-field> 
      <!-- END: Search -->
    </div>

    <!-- Users chat -->
    <v-list three-line>
      <template v-for="(item, index) in itemsUsers">
        <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
        <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
        <v-list-tile v-else :key="item.title" avatar @click="">
          <v-list-tile-avatar>
            <img :src="item.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <!-- END: Users chat -->
    
  </v-navigation-drawer>
  <!-- navigation-drawer RIGHT  -->

  <v-footer 
    inset
    app>
    <v-layout column>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex>
              <v-text-field
                :append-icon="e2 ? 'send' : 'send'"
                :append-icon-cb="() => (e2 = !e2)"
                v-model="txtMessage"
                label="Enter message"
                solo
                class="inp-message"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>

      <v-flex xs12>
        <v-layout row>
          <v-flex>
            <v-btn
              icon 
              flat
              small
            >
              <i class="material-icons">mood</i>
            </v-btn>

            <v-btn
              icon 
              flat
              small
            >
              <i class="material-icons">pages</i>
            </v-btn>

            <v-btn
              icon 
              flat
              small
            >
              <i class="material-icons">mic</i>
            </v-btn>

          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-footer>
</div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    drawerRight: true,
    right: null,
    left: null,
    txtMessage: '',
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
    itemsUsers: [
      // { header: 'Today' },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/1.jpg', title: 'Abilene, 28 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
      { divider: true, inset: true },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/2.jpg', title: 'Benson, 30 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
      { divider: true, inset: true },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/3.jpg', title: 'Christmas, 18 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
      { divider: true, inset: true },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/4.jpg', title: 'Coleridge, 20 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
      { divider: true, inset: true },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/5.jpg', title: 'Ferebee, 30 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/1.jpg', title: 'Abilene, 22 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
      { divider: true, inset: true },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/2.jpg', title: 'Benson, 31 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
      { divider: true, inset: true },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/3.jpg', title: 'Christmas, 13 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
      { divider: true, inset: true },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/4.jpg', title: 'Coleridge, 24 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
      { divider: true, inset: true },
      { avatar: 'https://vuetifyjs.com/static/doc-images/lists/5.jpg', title: 'Ferebee, 35 <small class="grey--text text--lighten-1">15 min</small>', subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }
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
  }
}
</script>

<style scoped>
.footer {
  height: initial !important;
  background-color: #fff;
  border-top: solid 1px #efefef;
}

.footer .inp-message {
  box-shadow: none;
}
</style>

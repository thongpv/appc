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
          <!-- Header -->
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
          <!-- elseif: have children -->
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
          <!-- else : single -->
          <v-list-tile v-else @click="redirectChat(item.href ? item.href : false)" :key="item.text">
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
      height="45"
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">App Chat</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <v-btn icon slot="activator">
          <v-badge color="red">
            <small slot="badge">{{ getLengthItemsMessenger }}</small>
            <v-icon>forum</v-icon>
          </v-badge>
        </v-btn>

        <v-list two-line id="items-message">
          <template v-for="(item, index) in itemsMessage">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              inset
            >
              {{ item.header }}
            </v-subheader>
            <v-divider
              v-else-if="item.divider"
              :key="index"
              inset
            ></v-divider>
            <v-list-tile
              v-else
              :key="item.title"
              avatar
              ripple
              @click=""
            >
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
      </v-menu>

      <v-menu offset-y>
        <v-btn icon slot="activator">
          <v-badge color="red">
            <small slot="badge">{{ getLengthItemsNotif }}</small>
            <v-icon>notifications</v-icon>
          </v-badge>
        </v-btn>

        <v-list two-line id="items-notif">
          <template v-for="(item, index) in itemsNotif">
            <v-list-tile
              :key="item.title"
              avatar
              ripple
              @click=""
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
          </template>
        </v-list>
      </v-menu>

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
    <v-content class="wrap-content-chat">

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
    items: [
      { icon: 'chat', text: 'Chat random', href: '/chat/u' },
      { icon: 'more', text: 'Groups', href: '/chat/groups' },
      { icon: 'contacts', text: 'Friends', href: '/chat/contacts' }
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
    ],
    itemsMessage: [
      {
        header: 'Today'
      },
      { divider: true },
      {
        avatar: 'https://picsum.photos/250/300?image=660',
        title: 'Meeting @ Noon',
        subtitle:
          "<span class='text--primary'>Spike Lee</span> &mdash; I'll be in your neighborhood"
      },
      {
        avatar: 'https://picsum.photos/250/300?image=821',
        title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
        subtitle:
          "<span class='text--primary'>to Operations support</span> &mdash; Wish I could come."
      },
      {
        avatar: 'https://picsum.photos/250/300?image=783',
        title: 'Yes yes',
        subtitle:
          "<span class='text--primary'>Bella</span> &mdash; Do you have Paris recommendations"
      },
      {
        header: 'Yesterday'
      },
      { divider: true },
      {
        avatar: 'https://picsum.photos/250/300?image=1006',
        title: 'Dinner tonight?',
        subtitle:
          "<span class='text--primary'>LaToya</span> &mdash; Do you want to hang out?"
      },
      {
        avatar: 'https://picsum.photos/250/300?image=146',
        title: 'So long',
        subtitle:
          "<span class='text--primary'>Nancy</span> &mdash; Do you see what time it is?"
      },
      {
        header: 'Last Week'
      },
      { divider: true },
      {
        avatar: 'https://picsum.photos/250/300?image=1008',
        title: 'Breakfast?',
        subtitle:
          "<span class='text--primary'>LaToya</span> &mdash; Do you want to hang out?"
      },
      {
        avatar: 'https://picsum.photos/250/300?image=839',
        title:
          'Winter Porridge <span class="grey--text text--lighten-1"></span>',
        subtitle:
          "<span class='text--primary'>cc: Daniel</span> &mdash; Tell me more..."
      },
      {
        avatar: 'https://picsum.photos/250/300?image=145',
        title: 'Oui oui',
        subtitle:
          "<span class='text--primary'>Nancy</span> &mdash; Do you see what time it is?"
      }
    ],
    itemsNotif: [
      { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
      { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
      { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
      { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
      { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' }
    ]
  }),
  computed: {
    getLengthItemsMessenger () {
      return this.itemsMessage.length
    },
    getLengthItemsNotif () {
      return this.itemsNotif.length
    }
  },
  methods: {
    redirectChat: function (link) {
      this.$router.push(link)
    }
  },
  created () {
    // Set default hide two navigation-drawer
    if (document.body.clientWidth <= 1265) {
      this.drawer = false
    }
  },
  mounted () {
    document.getElementById('items-message').parentElement.style.maxHeight = '350px'
    document.getElementById('items-notif').parentElement.style.maxHeight = '350px'
  }
}
</script>

<style lang="scss" scoped>
main.content {
  padding-bottom: 90px !important;
}
</style>

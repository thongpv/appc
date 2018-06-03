<template>
  <div style="display: flex; flex-direction: column;">
    <!-- Header -->
    <v-toolbar
      >
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="fw400"
      >
        <v-btn
          flat
          @click.stop="drawerRight = !drawerRight"
        >
          Hội lập trình
          <small class="grey--text text--lighten-1 ml-1" style="font-size: 12px;">(239)</small>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <i class="material-icons">videocam</i>
      </v-btn>
    </v-toolbar>
    <!-- END: Header -->

    <!-- Content -->
    <section id="msgap">
      <div class="msgap__wrap">
        <div class="msgap__avatar">
          <img src="http://via.placeholder.com/50x50" alt="">
        </div>
        <div class="msgap__content">
          <h3 class="msgap__content__title">Phạm Thông</h3>
          <article class="msgap__content__msg">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur 1 1.</p>
          </article>
        </div>
      </div>
      
      <div class="msgap__wrap msgap__wrap--me">
        <div class="msgap__content">
          <h3 class="msgap__content__title">Phạm Thông me</h3>
          <article class="msgap__content__msg">
            <p>Lorem ipsum dolor.</p>
          </article>
        </div>
      </div>
      
      <div class="msgap__wrap">
        <div class="msgap__avatar">
          <img src="http://via.placeholder.com/50x50" alt="">
        </div>
        <div class="msgap__content">
          <h3 class="msgap__content__title">Phạm Thông</h3>
          <article class="msgap__content__msg">
            <p>Lorem ipsum dolor.</p>
          </article>
        </div>
      </div>
      
      <div class="msgap__wrap msgap__wrap--me">
        <div class="msgap__content">
          <h3 class="msgap__content__title">Phạm Thông me</h3>
          <article class="msgap__content__msg">
            <p>Lorem ipsum dolor.</p>
            <p>Lorem ipsum dolor.</p>
            <p>Lorem ipsum dolor.</p>
          </article>
        </div>
      </div>

      <div class="msgap__wrap">
        <div class="msgap__avatar">
          <img src="http://via.placeholder.com/50x50" alt="">
        </div>
        <div class="msgap__content">
          <h3 class="msgap__content__title">Phạm Thông</h3>
          <article class="msgap__content__msg">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur 1 1.</p>
          </article>
        </div>
      </div>
      
      <div class="msgap__wrap msgap__wrap--me">
        <div class="msgap__content">
          <h3 class="msgap__content__title">Phạm Thông me</h3>
          <article class="msgap__content__msg">
            <p>Lorem ipsum dolor.</p>
          </article>
        </div>
      </div>
      
      <div class="msgap__wrap">
        <div class="msgap__avatar">
          <img src="http://via.placeholder.com/50x50" alt="">
        </div>
        <div class="msgap__content">
          <h3 class="msgap__content__title">Phạm Thông</h3>
          <article class="msgap__content__msg">
            <p>Lorem ipsum dolor.</p>
          </article>
        </div>
      </div>
      
      <div class="msgap__wrap msgap__wrap--me">
        <div class="msgap__content">
          <h3 class="msgap__content__title">Phạm Thông me</h3>
          <article class="msgap__content__msg">
            <p>Lorem ipsum dolor.</p>
            <p>Lorem ipsum dolor.</p>
            <p>Lorem ipsum dolor.</p>
          </article>
        </div>
      </div>
    </section>
    <!-- END: Content -->

    <!-- Input Message -->
    <v-footer 
      inset
      app>
      <v-layout column>
        <v-flex xs12>
          <v-layout row>
            <v-flex>
              <v-text-field
                v-model="txtMessage"
                label="Enter message"
                solo
                class="inp-message"
                @keyup.enter="ioChatSendMessage"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12>
          <v-layout row>
            <v-flex>
              <v-menu
                offset-y
                transition="slide-y-transition"
                top 
                :close-on-content-click="false"
              >
                <v-btn slot="activator" flat icon>
                  <i class="material-icons">mood</i>
                </v-btn>
                
                <!-- Items emoji -->
                <v-tabs
                  dark
                  color="cyan"
                >
                  <v-tabs-slider color="yellow"></v-tabs-slider>
                  <v-tab
                    v-for="i in 5"
                    :key="i"
                    :href="'#tab-' + i"
                  >
                    <v-icon>mood</v-icon>
                  </v-tab>
                  <v-tabs-items>
                    <v-tab-item
                      v-for="i in 15"
                      :key="i"
                      :id="'tab-' + i"
                    >
                      <v-card flat>
                        <v-card-text>111</v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-tabs>
                <!-- END: Items emoji -->
              </v-menu>

              <v-menu
                offset-y
                transition="slide-y-transition"
                top 
                :close-on-content-click="false"
              >
                <v-btn slot="activator" flat icon>
                  <i class="material-icons">pages</i>
                </v-btn>
                
                <!-- Items emoji -->
                <v-tabs
                  dark
                  color="cyan"
                  show-arrows
                  class="emoji-tabs"
                >
                  <v-tabs-slider color="yellow"></v-tabs-slider>
                  <v-tab
                    v-for="i in 15"
                    :key="i"
                    :href="'#tab-' + i"
                  >
                    <v-icon>pages</v-icon>
                  </v-tab>
                  <v-tabs-items>
                    <v-tab-item
                      v-for="i in 15"
                      :key="i"
                      :id="'tab-' + i"
                    >
                      <v-card flat>
                        <v-card-text>111</v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-tabs>
                <!-- END: Items emoji -->
              </v-menu>

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
    <!-- END: Input Message -->

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
          label="Search member"
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
              <v-list-tile-title v-text="item.title">1</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <!-- END: Users chat -->
    </v-navigation-drawer>
    <!-- navigation-drawer RIGHT  -->
  </div>
</template>

<script>
import config from '@/config/config'
import io from 'socket.io-client'
export default {
  data: function () {
    return {
      socket: io(config.HOST_API),
      drawerRight: true,
      txtMessage: '',
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
      ]
    }
  },
  methods: {
    e2: function () { },
    // socket.io
    ioChatSendMessage: function () {
      this.socket.emit('CHAT_SEND_MESSAGE', {
        user: 'PhamThong',
        message: this.txtMessage
      })
      this.txtMessage = ''
    }
  },
  created () {
    // Set default hide two navigation-drawer
    if (document.body.clientWidth <= 1265) {
      this.drawerRight = false
    }
  },
  mounted () {
    // Setup style content chat
    document.documentElement.style.overflowY = 'hidden'
    document.querySelector('main .content--wrap').style.cssText = 'display: flex; flex-direction: column;'
    document.querySelector('.wrap-content-chat').style.height = '100vh'
    document.querySelector('.emoji-tabs').parentElement.style.display = 'block'
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      document.querySelector('.emoji-tabs').parentElement.style.display = 'none'
    })
    this.socket.on('IO_CHAT_MESSAGE', (data) => {
      console.log(data)
      // this.messages = [...this.messages, data];
      // you can also do this.messages.push(data)
    })
  },
  destroyed () {
    document.querySelector('.wrap-content-chat').style.height = 'initial'
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

#msgap {
  overflow-y: auto;
  padding: 15px;
  padding-bottom: 50px;
}

#msgap h3 {
  margin: 0;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: #ccc;
}
.msgap__wrap {
  display: flex;
  margin-bottom: 15px;
  min-width: 80%;
}
.msgap__wrap .msgap__avatar {
  padding-right: 15px;
  align-self: flex-end;
}
.msgap__wrap .msgap__avatar img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.msgap__wrap .msgap__content {
  display: flex;
  flex-direction: column;
}
.msgap__wrap .msgap__content p {
  background-color: #e6e5ea;
  color: #333;
  padding: 10px;
  margin-top: 0;
  margin-bottom: 5px;
  border-radius: 0 5px 5px 0;
  max-width: max-content;
  cursor: pointer;
  transition: 0.15s;
}
.msgap__wrap .msgap__content p:first-child {
  border-radius: 5px 5px 5px 0;
}
.msgap__wrap .msgap__content p:last-child {
  border-radius: 0 5px 5px 5px;
}
.msgap__wrap .msgap__content p:hover {
  background-color: #eeedf1;
}
.msgap__wrap--me {
  justify-content: flex-end;
  text-align: right;
  margin-left: auto;
}
.msgap__wrap--me .msgap__content {
  display: flex;
  flex-direction: column;
}
.msgap__wrap--me .msgap__content p {
  background-color: #289dfd;
  color: #fff;
  padding: 10px;
  margin-top: 0;
  margin-bottom: 5px;
  border-radius: 5px 0 0 5px;
  max-width: max-content;
}
.msgap__wrap--me .msgap__content p:first-child {
  border-radius: 5px 5px 0 5px;
}
.msgap__wrap--me .msgap__content p:last-child {
  border-radius: 5px 0 5px 5px;
}
.msgap__wrap--me .msgap__content p:hover {
  background-color: #4fadfa;
}
.toolbar {
  background: #fff;
}
.tabs {
  max-width: 255px;
}
</style>

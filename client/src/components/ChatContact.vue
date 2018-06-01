<template>
  <div id="chat-contact-page">
    <v-flex md8 class="pa-3">
      <v-text-field
        solo
        name=""
        label="Search"
      ></v-text-field>

      <v-list two-line>
      <h5 class="grey--text text--lighten-1 fw400">Total: 79</h5>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
          <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
          <v-list-tile v-else :key="item.title" avatar @click="">
            <v-list-tile-avatar
              :class="item.online ? 'online-user' : ''"
            >
              <img :src="item.avatar">
            </v-list-tile-avatar>
            
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>
                {{ item.subtitle }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      items: [
        { avatar: 'https://vuetifyjs.com/static/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?", online: true },
        { avatar: 'https://vuetifyjs.com/static/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { avatar: 'https://vuetifyjs.com/static/doc-images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" }
      ]
    }
  }
}
</script>

<style scoped>
#chat-contact-page .online-user .avatar:after {
  content: '';
  position: absolute;
  width: 13px;
  height: 13px;
  background: #52d457;
  right: -5px;
  bottom: 0;
  border-radius: 50%;
  border: solid 3px #fff;
}

#chat-contact-page .list__tile__content {
  border-bottom: solid 1px #ececec;
}
</style>

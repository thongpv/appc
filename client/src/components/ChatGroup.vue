<template>
  <div>
    <v-flex md8 class="pa-2">
      <v-btn
        color="info"
      >
        <v-icon left dark>add</v-icon>
        New group
      </v-btn>
    </v-flex>

    <v-flex md8 class="pa-3">
      <v-text-field
        solo
        name=""
        label="Search"
      ></v-text-field>
      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header">Total: {{ item.header }}</v-subheader>
          <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
          <v-list-tile v-else :key="item.title" avatar @click="">
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>
                 <v-chip color="teal" text-color="white" small>
                    <v-avatar>
                      <v-icon>supervisor_account</v-icon>
                    </v-avatar>
                    {{ item.total_member }}
                  </v-chip>
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
        { header: 3 },
        { avatar: 'https://vuetifyjs.com/static/doc-images/lists/1.jpg', title: 'Lập trình HTML', total_member: 90 },
        { divider: true, inset: true },
        { avatar: 'https://vuetifyjs.com/static/doc-images/lists/2.jpg', title: 'Lập trình PHP', total_member: 32 },
        { divider: true, inset: true },
        { avatar: 'https://vuetifyjs.com/static/doc-images/lists/3.jpg', title: 'Hội lập trình', total_member: 15 }
      ]
    }
  }
}
</script>

<style scoped>
</style>

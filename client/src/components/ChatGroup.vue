<template>
  <div>
    <v-flex md8 class="pa-2">
      <v-dialog v-model="dialogNewGroup" persistent max-width="500px">
        <v-btn
          slot="activator"
          color="info"
          outline
        >
          <v-icon left dark>add</v-icon>
          New group
        </v-btn>
        
        <v-card>
          <form>
            <v-card-title>
              <span class="headline">New group</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field 
                      autofocus
                      required
                      counter="100"
                      v-model="title" 
                      @blur="$v.title.$touch()"
                      :error-messages="titleErrors"
                      label="Title" >
                    </v-text-field>
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field 
                      required
                      :counter="100"
                      v-model="subtitle" 
                      @blur="$v.subtitle.$touch()"
                      :error-messages="subtitleErrors"
                      label="Subtitle" >
                    </v-text-field>
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field 
                      v-model="logo" 
                      @blur="$v.logo.$touch()"
                      :error-messages="logoErrors"
                      label="Logo">
                    </v-text-field>
                  </v-flex>

                  <v-flex xs12>
                    <v-text-field 
                      v-model="password" 
                      label="Password">
                    </v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="info" :disabled="!valid" @click="submitNewGroup">Save</v-btn>
              <v-btn color="blue darken-1" flat @click="closeDiaNewGroup">Close</v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </v-dialog>
    </v-flex>

    <v-flex md8 class="pa-3">
      <v-text-field
        solo
        name=""
        label="Search"
      ></v-text-field>
      <v-list three-line class="list-groups">
        <template v-for="(item, index) in groups">
          <v-list-tile :key="item.title" avatar @click="">
            <v-list-tile-avatar>
              <img :src="item.logo">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title :title="item.title">
                <v-icon v-if="item.password" small color="grey" style="vertical-align: baseline;">lock</v-icon>
                {{ item.title }}
                <small>({{ item.total }})</small>
              </v-list-tile-title>

              <v-list-tile-sub-title :title="item.subtitle" class="text--primary">
                {{ item.subtitle }}
              </v-list-tile-sub-title>

              <v-list-tile-sub-title title="Month/Day/Year">
                {{ item.created_at | formatDate }}
              </v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <!-- <v-btn slot="activator" icon ripple>
                <v-icon color="grey">more_vert</v-icon>
              </v-btn> -->

              <v-bottom-sheet v-model="sheet">
                <v-btn slot="activator" icon ripple class="act-btn-more">
                  <v-icon color="grey">more_vert</v-icon>
                </v-btn>
                <v-list>
                  <!-- <v-subheader>Open in</v-subheader> -->
                  <v-list-tile
                    @click="sheet = false"
                  >
                    <v-list-tile-avatar>
                      <v-icon color="red">delete_forever</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-title>Delete</v-list-tile-title>
                  </v-list-tile>

                  <v-list-tile
                    @click="sheet = false"
                  >
                    <v-list-tile-avatar>
                      <v-icon color="warning">report_problem</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-title>Report</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-bottom-sheet>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
        </template>
      </v-list>
    </v-flex>

    <v-snackbar
      :timeout="5000"
      :color="color"
      top
      right
      v-model="snackbar"
    >
      {{ text }}
      <v-btn flat  @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import config from '@/config/config'
import io from 'socket.io-client'
import format from 'date-fns/format'

import { required, maxLength, url } from 'vuelidate/lib/validators'
import _find from 'lodash/find'

Vue.use(Vuelidate)

export default {
  validations: {
    title: { required, maxLength: maxLength(100) },
    subtitle: { required, maxLength: maxLength(100) },
    logo: { url }
  },
  data: function () {
    return {
      // sheet
      sheet: false,
      // diaglog
      valid: true,
      dialogNewGroup: false,
      groups: null,
      socket: io(config.HOST_API),
      // form new group
      title: '',
      subtitle: '',
      logo: '',
      password: '',
      // snackbar
      snackbar: false,
      y: 'top',
      x: 'right',
      color: 'red',
      text: 'Hello, I\'m a snackbar'
    }
  },
  computed: {
    titleErrors: function () {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.maxLength && errors.push(`Title must be at most 100 characters long`)
      !this.$v.title.required && errors.push(`Title is required`)
      return errors
    },
    subtitleErrors: function () {
      const errors = []
      if (!this.$v.subtitle.$dirty) return errors
      !this.$v.subtitle.maxLength && errors.push(`Subtitle must be at most 100 characters long`)
      !this.$v.subtitle.required && errors.push(`Subtitle is required`)
      return errors
    },
    logoErrors: function () {
      const errors = []
      if (!this.$v.logo.$dirty) return errors
      !this.$v.logo.url && errors.push(`Invalid format`)
      return errors
    }
  },
  methods: {
    submitNewGroup () {
      const _this = this
      this.$v.$touch()
      if (this.$v.$invalid) {
        // Fail
      } else {
        // OK
        const arrTitle = _find(this.groups, function (o) {
          return o.title === _this.title
        })

        if (arrTitle) {
          this.snackbar = true
          this.color = 'red'
          this.text = 'Title is exists!'
        } else {
          const group = {
            title: this.title,
            subtitle: this.subtitle,
            logo: this.logo || 'http://via.placeholder.com/50x50',
            total: 0,
            created_at: new Date(),
            password: this.password
          }
          this.closeDiaNewGroup()

          console.log(group)
          this.snackbar = true
          this.color = 'success'
          this.text = `Create new group success!`
        }
      }
    },
    closeDiaNewGroup () {
      this.clearNewGroup()
      this.dialogNewGroup = false
    },
    clearNewGroup () {
      this.$v.$reset()
      this.title = ''
      this.subtitle = ''
      this.logo = ''
      this.password = ''
    }
  },
  mounted () {
    this.socket.on('IO_GROUPS', (data) => {
      this.groups = JSON.parse(data)
    })
  },
  filters: {
    formatDate: function (newDate) {
      if (!newDate) return ''
      return format(newDate, 'MM/DD/YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>
.list__tile__content:last-child {
  border-bottom: none;
}
</style>

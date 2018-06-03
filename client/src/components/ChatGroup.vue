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
          <form @submit.prevent="submitNewGroup">
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
              <v-btn color="info" :disabled="!valid" type="submit">Save</v-btn>
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
      <v-list two-line>
        <template v-for="(item, index) in groups">
          <v-list-tile :key="item.title" avatar @click="">
            <v-list-tile-avatar>
              <img :src="item.logo">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ item.subtitle }}
              </v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-action-text title="Month/Day/Year">{{ item.created_at | formatDate }}</v-list-tile-action-text>
              <small title="Total member">
                <v-icon small color="grey">supervisor_account</v-icon> {{ item.total }}
              </small>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import config from '@/config/config'
import io from 'socket.io-client'
import format from 'date-fns/format'

import { required, maxLength } from 'vuelidate/lib/validators'
import _ from 'lodash'

Vue.use(Vuelidate)

export default {
  validations: {
    title: { required, maxLength: maxLength(100) },
    subtitle: { required, maxLength: maxLength(100) }
  },
  data: function () {
    return {
      valid: true,
      dialogNewGroup: false,
      socket: io(config.HOST_API),
      groups: null,
      // form new group
      title: '',
      subtitle: '',
      logo: '',
      password: ''
    }
  },
  computed: {
    titleErrors: function () {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.maxLength && errors.push(`Title must be at most 100 characters long`)
      !this.$v.title.required && errors.push(`Title is required.`)
      return errors
    },
    subtitleErrors: function () {
      const errors = []
      if (!this.$v.subtitle.$dirty) return errors
      !this.$v.subtitle.maxLength && errors.push(`Subtitle must be at most 100 characters long`)
      !this.$v.subtitle.required && errors.push(`Subtitle is required.`)
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
        const arrTitle = _.filter(this.groups, function (o) {
          return o.title === _this.title
        })
        if (arrTitle.length > 0) {
          console.log('no no no')
        }
      }
      // const group = {
      //   title: this.title,
      //   subtitle: this.subtitle,
      //   logo: this.logo || 'http://via.placeholder.com/50x50',
      //   total: 0,
      //   created_at: new Date(),
      //   password: this.password
      // }
      // this.clearNewGroup()
      // this.groups.push(group)
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
    },
    ioAddGroup (newGroup) {
      this.socket.emit('IO_ADD_GROUP', newGroup)
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

<style scoped>
.list {
  background-color: transparent;
}
.list__tile__content {
  border-bottom: solid 1px #ececec;
}

.list__tile__content:last-child {
  border-bottom: none;
}
</style>

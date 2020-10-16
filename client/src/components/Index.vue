<template>
<div>
      <v-responsive
        id="hide-on-scroll-example"
        class="overflow-y-auto "
        max-height="860"
      >
        <v-responsive :height="75*this.$store.state.message.length">
        <v-row 
          class="pa-0 ma-0" 
          v-for="( mess, index ) in this.$store.state.message"
          v-bind:key = "index"
          >
          <v-col 
            class="pa-0 ma-0"
            >
            <TextBox 
              :textbox = mess
            />
          </v-col>
        </v-row>
        </v-responsive>
      </v-responsive>

      <v-dialog
        persistent
        v-model="dialog"
        width="500"
      >
      <checkUser
        v-on:check="checkUserLogin()"
       />
    </v-dialog>
</div>
</template>

<script>
import TextBox from './TextBox'
import checkUser from './LoginRegistor/index'
export default {
  components : {
    TextBox,
    checkUser
  },
  methods : {
    checkUserLogin(){
      this.dialog = false
      console.log('colse')
    }
  },
  data: () => ({
    dialog: true
  }),
  created () {
    this.$store.dispatch('fetchMessage')
  },
  updated () {
    this.$store.dispatch('fetchMessage')
  }
}
</script>
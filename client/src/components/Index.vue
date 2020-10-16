<template>
    <v-responsive
      id="hide-on-scroll-example"
      class="overflow-y-auto"
      max-height="960"
    >
      <v-responsive height="5000">
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
</template>

<script>
import TextBox from './TextBox'
export default {
  components : {
    TextBox
  },
  created () {
    this.$store.dispatch('fetchMessage')
  }
}
</script>
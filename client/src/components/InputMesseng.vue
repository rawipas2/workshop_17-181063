<template>
  <v-form ref="form" v-model="valid">
    <v-footer absolute padless width="75%">
      <v-card flat tile class="d-flex justify-start" width="100%">
        <v-row class="pa-0 ma-0">
          <v-col>
            <v-textarea
              :rules="[(v) => !!v || 'Messenger is required']"
              required
              placeholder="Messenger"
              filled
              rounded
              dense
              auto-grow
              row-height="5"
              v-model="message.message"
            />
          </v-col>
          <v-col cols="auto">
            <v-btn icon :disabled="!valid" @click="sendData()">
              <v-icon> mdi-send </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-footer>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    message: {
      employee: '',
      message: "",
    },
  }),
  methods: {
    sendData() {
      this.message.employee = this.$store.state.owner
      this.$store.commit("postMessage", this.message);
      this.message.message = "";
    },
  },
};
</script>
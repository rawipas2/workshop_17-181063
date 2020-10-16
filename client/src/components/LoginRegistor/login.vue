<template>
  <v-form v-model="valid">
    <v-card elevation="0">
      <v-card-text>
        <v-row class="pa-0 ma-0">
          <v-col>
            <v-text-field
              :rules="[(v) => !!v || 'Email is required']"
              required
              placeholder="Email"
              filled
              rounded
              dense
              v-model="login.email"
            />
          </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col class="pt-0">
            <v-text-field
              :rules="[(v) => !!v || 'Password is required']"
              :type="showPassWord ? 'text' : 'password'"
              :append-icon="showPassWord ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassWord = !showPassWord"
              required
              placeholder="Password"
              filled
              rounded
              dense
               v-model="login.password"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn rounded block :disabled="!valid"> login </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    showPassWord: false,
    login : {}
  }),
};
</script>
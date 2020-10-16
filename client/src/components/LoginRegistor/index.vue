<template>
  <v-card >
    <v-card-title class="d-flex justify-center">
      <v-radio-group v-model="mode" column>
        <v-row>
          <v-col cols="auto">
            <v-radio label="Login" color="primary" value="login" />
          </v-col>
          <v-col cols="auto">
            <v-radio label="Register" color="primary" value="registor" />
          </v-col>
        </v-row>
      </v-radio-group>
    </v-card-title>
    <v-card-text>
        <login  
          v-if="mode==='login'"
        />
        <registor v-else 
          v-on:check="checkUserLogin()"
        />
    </v-card-text>
  </v-card>
</template>

<script>
import login from './login'
import registor from './register'
export default {
  data: () => ({
    mode: "login",
  }),
  components : {
    login,
    registor
  },
  methods : {
    checkUserLogin(){
      this.$emit('check')
      console.log('test')
    }
  }
};
</script>
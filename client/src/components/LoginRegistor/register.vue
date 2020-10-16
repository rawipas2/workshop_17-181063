<template>
  <v-form v-model="valid">
    <v-card elevation="0">
      <v-card-text>
        <v-row class="pa-0 ma-0">
          <v-col>
            <!-- <v-file-input
              :rules="[(v) => !!v || 'Image is required']"
              accept="image/*"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              required
              filled
              rounded
              densecounter
              show-size
              @change="uploadImage"
            /> -->
            <v-file-input
              class="col-8"
              label="Image"
              prepend-icon="mdi-camera"
              counter
              show-size
              accept="image/*"
              v-model="register.image"
            ></v-file-input>
          </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col class="pt-0">
            <v-text-field
              :rules="[(v) => !!v || 'FirstName is required']"
              required
              placeholder="FirstName"
              filled
              rounded
              dense
              v-model="register.firstName"
            />
          </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col class="pt-0">
            <v-text-field
              :rules="[(v) => !!v || 'LastName is required']"
              required
              placeholder="LastName"
              filled
              rounded
              dense
              v-model="register.lastName"
            />
          </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col class="pt-0">
            <v-text-field
              :rules="[(v) => !!v || 'Email is required']"
              required
              placeholder="Email"
              filled
              rounded
              dense
              v-model="register.email"
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
              v-model="register.password"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn rounded block :disabled="!valid" @click="registerUser()">
          register
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    showPassWord: false,
    register: {},
  }),
  methods: {
    registerUser() {
      this.getBase64(this.register.image).then(
        (data) => {
          this.register.image = data
          this.$store.commit("registerUser", this.register);
          this.$emit("check");
        }
      );
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
  },
};
</script>
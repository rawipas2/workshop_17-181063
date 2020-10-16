<template>
    <v-footer
        absolute
        padless
    >
    <v-card
        flat
        tile
        class="d-flex justify-start"
        width="100%"
    >
        <v-row class="pa-0 ma-0">
            <v-col >
                <v-textarea
                    placeholder="Messenger"
                    filled
                    rounded
                    dense
                    row-height="5"
                    auto-grow
                    v-model="message.description"
                />
            </v-col>
            <v-col cols="auto">
                <v-btn
                    icon
                    @click="sendData()"
                >
                    <v-icon>
                        mdi-send
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        message: {
            employee : 1,
            description: ''
        }
    }),
    methods: {
        sendData(){
            this.$store.commit('postMessage', this.message)
            this.message.description = ''
        }
    }
}
</script>
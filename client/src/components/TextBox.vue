<template>
    <v-card elevation="0">
        <v-row  class="d-flex justify-start pa-0 ma-0">
            <v-col cols="auto" class="pt-8">
                <v-avatar
                    color="primary"
                    size="30"
                    >
                <img
                    :src=textbox.image
                    alt="John"
                    >
                </v-avatar>
            </v-col>
            <v-col cols="auto">
                <h5>{{textbox.firstName}} 
                    {{textbox.lastName}}</h5>
                <v-chip>
                    {{textbox.description}}
                </v-chip>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    props: ["textbox"]
}
</script>
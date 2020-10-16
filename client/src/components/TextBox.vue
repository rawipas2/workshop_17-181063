<template>
    <v-card elevation="0">
        <v-row  class="d-flex justify-start pa-0 ma-0">
            <v-col cols="auto" class="pt-8">
                <v-avatar
                    color="primary"
                    size="30"
                    >
                <v-img
                     v-bind:src="textboxs.image"
                     contain
                     stretch="none"
                    />
                </v-avatar>
            </v-col>
            <v-col cols="auto pl-0">
                <h5>{{textboxs.fullName}}</h5>
                <v-chip>
                    {{textboxs.message}}
                </v-chip>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    props: ["textbox"],
    data: () => ({
        textboxs : {
            fullName : '',
            message : '',
            image : ''
        }
    }),
    created () {
        this.textboxs.fullName = this.textbox.firstName + ' ' + this.textbox.lastName,
        this.textboxs.message = this.textbox.message,
        this.textboxs.image = this.textbox.image
        console.log(this.textbox.image)
    }
}
</script>
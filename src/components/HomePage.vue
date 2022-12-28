<template>
    <div>
        <v-row>
            <v-col lg="2" md="3">
                <NavBar />
            </v-col>
            <v-col lg="10" md="9">
                <v-container>
                <router-view></router-view>
            </v-container>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import NavBar from '../components/HomeChildComponents/NavBar.vue'
    export default {
        name: 'HomePage',
        components: {
            NavBar
        }

    }
</script>

<style scoped>

</style>
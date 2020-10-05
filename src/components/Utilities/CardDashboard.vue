<template>
    <b-col cols="12" sm="12" md="4">
        <router-link :to="{ name: url }">
            <div class="card-dashboard d-flex flex-column justify-content-center align-items-center p-4 animate__animated animate__fadeInTopLeft mt-4"
                :style="{ 'box-shadow': '3px 13px 22px' + shadow, 'animation-delay': delay }">
                <font-awesome-icon :icon="['fas', icon]" :style="{ 'background': bg }"
                    class="icon d-flex flex-column justify-content-center align-items-center" />
                <h3 class="mt-3"> {{ text }} </h3>
            </div>
        </router-link>
    </b-col>
</template>
<script>
    export default {
        name: 'card-dashboard',
        props: ['icon', 'text', 'shadow', 'bg', 'url', 'delay']
    }
</script>
<style lang="scss" scoped>
    a {
        text-decoration: none;

        &:hover {
            text-decoration: none;
        }
    }

    .card-dashboard {
        border-radius: 10px;
        cursor: pointer;
        background: white;
        transition: all .2s ease-in-out;

        &:hover {
            transform: translate(5px, 5px);
            box-shadow: none;
        }

        .icon {
            width: 3.5em;
            height: 3.5em;
            border-radius: 50%;
            padding: 20px;
            font-size: 1.3em;
            color: white;

        }

        h3 {
            font-weight: 300;
        }
    }
</style>
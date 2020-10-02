<template>
    <b-col cols="12" sm="12" md="4">
        <b-card :img-src="require(`../../assets/vouces/${image}`)" img-alt="Card Image" text-variant="white"
            class="mt-3 animate__animated animate__bounceInDown" :style="{ 'animation-delay': delay }">
            <button
                :class="['button-concebir-default', 'button-concebir-no-bg', 'animation', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center', '']">
                <p> {{ name }} </p>
                <font-awesome-icon :icon="['fas', 'angle-double-right']" class="icon ml-1" />
            </button>
        </b-card>

    </b-col>
</template>
<script>
    export default {
        props: ['image', 'name', 'delay']
    }
</script>
<style lang="scss" scoped>
    .card {
        position: relative;
        border: none;
        border-radius: 6px;
        box-shadow: 10px 10px 20px #00000012;

        .animation {
            transform: none;
           &:hover p {
               font-size: 0;
           }
        }
    }
</style>
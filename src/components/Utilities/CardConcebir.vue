<template>
    <div>
        <b-card style="max-width: 25em;" class="p-5 main-register shadow animate__animated animate__flipInY">
            <slot></slot>
        </b-card>
    </div>
</template>
<style lang="scss" scoped>
     .main-register {
        border-radius: 35px;
        margin: 3vw 0 0 7vw;

        @media(max-width: 700px) {
            margin: 6.5vw auto;
        }
    }
</style>
<script>
export default {
    name: 'card-concebir'
}
</script>

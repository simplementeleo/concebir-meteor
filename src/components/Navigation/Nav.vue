<template>
    <div>
        <b-nav :class="['nav-me', { 'd-none': !status }]">
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
    </div>
</template>
<style lang="scss" scoped>

    .nav-me {
        position: fixed;
        background: red;
        padding-left: 5em;
        width: 100%;
    }
    
</style>
<script>
export default {
    props: ['status']
}
</script>
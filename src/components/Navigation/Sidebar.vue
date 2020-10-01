<template>
    <div>
        <!-- <b-nav>
            <b-nav-item v-for="(item, index) in items" v-bind:key="index">{{ item.name }} </b-nav-item>
        </b-nav> -->

        <b-list-group :class="['sidebar-left', { 'd-none': !status }]">
            <b-list-group-item v-for="(item, index) in 30" v-bind:key="index">{{ item }} </b-list-group-item>
        </b-list-group>

    </div>
</template>
<script>
export default {
    props: ['status'],
    data(){
        return {
            items: [
                { url: '#', name: 'Name' },
                { url: '#', name: 'Name' },
                { url: '#', name: 'Name' }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .sidebar-left {
        position: fixed;
        height: 100%;
        background: blue;
        border-radius: 0;
        z-index: 1;
        overflow: auto;
    }
</style>
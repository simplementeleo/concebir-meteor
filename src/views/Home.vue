<template>
    <div :class="[isActive ? 'd-none': '', 'bg-home']">
       <register></register>
    </div>
</template>
<script>
import Register from '../components/Register/Register'
export default {
    components: {
        Register
    },
    computed: {
        isActive(){
            return localStorage.getItem('start') == 'input' ? true : false
        }
    }
}
</script>
<style lang="scss" scoped>

.bg-home {
    background: url('../assets/bg-home.png') no-repeat;
    background-size: cover;
    background-position: right;
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: auto;
}
    
</style>
<template>
    <div>
        <b-nav
            :class="['nav-me', 'pt-2', 'animate__animated', 'animate_backInDown', 'd-flex', 'justify-content-between', 'align-items-center', { 'd-none': false }]">
            <b-nav-item>
                <font-awesome-icon icon="angle-left" />
                Atras
            </b-nav-item>
            <img src="../../assets/logo.png" width="70" class="img-fluid" alt="Siempre a tu servicio">

            <b-dropdown class="dropdown-concebir" variant="#fff">
                <template v-slot:button-content class="d-flex align-items-center btn-primary">
                    <img src="../../assets/users/1.jpg" width="35" class="img-fluid rounded-circle">
                    <span class="ml-3">Taylor Kigman</span>
                </template>
                <b-dropdown-item href="#">Mi cuenta</b-dropdown-item>
                <b-dropdown-item @click="_Loguout()">Salir</b-dropdown-item>
            </b-dropdown>


        </b-nav>
    </div>
</template>
<style lang="scss" scoped>
    .nav-me {
        position: fixed;
        background: white;
        padding-left: 15em;
        width: 100%;
        z-index: 1;

        .nav-item {
            a {
                color: #333;
            }
        }

        .btn-secondary {
            background: #fff !important;
            color: #333;

            &:hover,
            &:focus,
            &:active {
                background: #fff !important;
            }
        }
    }
</style>
<script>
    import router from '../../router'
    export default {
        methods: {
            _Loguout() {
                localStorage.removeItem('start')
                router.push({
                    path: '/'
                })
            }
        }
    }
</script>
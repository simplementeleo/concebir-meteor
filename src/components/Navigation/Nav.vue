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


            <button class="bars-toggle" v-b-toggle.sidebar-backdrop>
                <font-awesome-icon icon="bars" />
            </button>



            <b-sidebar id="sidebar-backdrop" class="sidebar-nav" no-header bg-variant="false" backdrop-variant="dark" backdrop shadow>
                <template v-slot:default>
                    <b-list-group :class="['sidebar-left', { 'd-none': false }]">
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <img src="../../assets/users/1.jpg" class="img-fluid rounded-circle mt-5"
                                alt="User profile">
                            <h3 class="text-center my-3 text-white">Taylor Kigman</h3>
                            <scrollArrow class="arrow-left" />
                        </div>
                        <b-list-group-item v-for="(item, index) in items" v-bind:key="index" :to="{name: item.url }"
                            class="d-flex align-items-center ">
                            <!-- <font-awesome-icon :icon="['fas', item.icon]" /> -->
                            <p>{{ item.name }} </p>
                        </b-list-group-item>
                        <div class="d-flex align-items-center list-group-item" @click="_Loguout()">
                            <!-- <font-awesome-icon :icon="['fas','sign-out']" /> -->
                            <p> Salir </p>
                        </div>
                    </b-list-group>
                </template>
            </b-sidebar>

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
        box-shadow: 0 5px 15px #26692826;

        @media(max-width: 767px) {
            padding: 0 1em;
        }

        .bars-toggle {
            width: 50px;
            height: 50px;
            padding: 10px;
            background: #74de51;
            border-radius: 60px;
            outline: none;
            color: white;
            border: none;
            display: none;

            &:focus,
            &:active {
                outline: none;
            }

            @media(max-width: 767px) {
                display: block;
            }

        }

        .nav-item {
            a {
                color: #333;
            }
        }

        .dropdown-concebir {
            @media(max-width: 767px) {
                display: none;
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


        .sidebar-left {
            position: relative;
            background: url('../../assets/sidebar-bg.jpg') no-repeat;
            background-size: cover;
            background-position: right;
            border-radius: 0;
            overflow: auto;
            scrollbar-width: thin;
            border-radius: 0 100px 100px 0;

            &::-webkit-scrollbar {
                width: 0px;
            }

            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                border-radius: 10px;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background: rgba(0, 255, 55, 0.596);
            }

            img {
                max-width: 100px;
                box-shadow: 0 14px 16px #ffffff66;
            }

            .arrow-left {
                position: absolute;
                left: 27px;
                top: 78px;
            }

            .list-group-item {
                background: transparent;
                color: white;
                transition: all .2s ease-in-out;
                margin-right: 2px;
                cursor: pointer;

                &:hover {
                    background: white;
                    border-radius: 0 50px 50px 0;
                    color: #333;
                }

                p {
                    margin-bottom: 0;
                    margin-left: 5px;
                    font-size: 14px;
                }
            }

        }




    }
</style>
<script>
    import router from '../../router'
    import scrollArrow from '../Utilities/Scrollarrow'
    export default {
        components: {
            scrollArrow
        },
        methods: {
            _Loguout() {
                localStorage.removeItem('start')
                router.push({
                    path: '/'
                })
            }
        },
        data() {
            return {
                items: [{
                        icon: 'fa-tachometer',
                        url: 'Dashboard',
                        name: 'Bienvenido'
                    },
                    {
                        icon: 'search',
                        url: 'Sedes',
                        name: 'Buscar médicos por sede'
                    },
                    {
                        icon: 'search',
                        url: 'Medicos',
                        name: 'Ver todos los médicos'
                    },
                    {
                        icon: 'calendar',
                        url: 'Citas',
                        name: 'Citas'
                    },
                    {
                        icon: 'icon',
                        url: 'Pagos',
                        name: 'Pagos'
                    },
                    {
                        icon: 'icon',
                        url: 'Horarios',
                        name: 'Horarios'
                    },
                    {
                        icon: 'icon',
                        url: 'MedicosRegistro',
                        name: 'Médicos'
                    },
                    {
                        icon: 'icon',
                        url: 'Pacientes',
                        name: 'Pacientes'
                    },
                    {
                        icon: 'icon',
                        url: 'Especialidades',
                        name: 'Especialidades'
                    },
                    {
                        icon: 'icon',
                        url: 'SedesRegistro',
                        name: 'Sedes'
                    },

                ]
            }
        },
    }
</script>
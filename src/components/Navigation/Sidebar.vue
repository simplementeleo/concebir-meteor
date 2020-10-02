<template>
    <div>



        <b-list-group :class="['sidebar-left', 'animate__animated', 'animate_backInLeft', { 'd-none': !isActive }]">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <img src="../../assets/users/1.jpg" class="img-fluid rounded-circle mt-5" alt="User profile">
                <h3 class="text-center my-3 text-white">Taylor Kigman</h3>
                <scrollArrow class="arrow-left" />
            </div>
            <b-list-group-item v-for="(item, index) in items" v-bind:key="index" class="d-flex align-items-center ">
                <font-awesome-icon icon="home" />
                <p>{{ item.name }} </p>
            </b-list-group-item>
        </b-list-group>

    </div>
</template>
<script>
import scrollArrow from '../Utilities/Scrollarrow'
    export default {
        components: {
            scrollArrow
        },
        data() {
            return {
                items: [{
                        url: '#',
                        name: 'Bienvenido'
                    },
                    {
                        url: '#',
                        name: 'Buscar médicos por sede'
                    },
                    {
                        url: '#',
                        name: 'Ver todos los médicos'
                    },
                    {
                        url: '#',
                        name: 'Citas'
                    },
                    {
                        url: '#',
                        name: 'Pagos'
                    },
                    {
                        url: '#',
                        name: 'Horarios'
                    },
                    {
                        url: '#',
                        name: 'Médicos'
                    },
                    {
                        url: '#',
                        name: 'Paciente'
                    },
                    {
                        url: '#',
                        name: 'Especialidades'
                    },
                    {
                        url: '#',
                        name: 'Sedes'
                    },
                    {
                        url: '#',
                        name: 'Salir'
                    },
                ]
            }
        },
        computed: {
            isActive() {
                return localStorage.getItem('start') == 'input' ? true : false
            }
        },
        mounted() {
            console.log(this.isActive)
        }
    }
</script>
<style lang="scss" scoped>
    .sidebar-left {
        position: fixed;
        height: 100%;
        background: url('../../assets/sidebar-bg.jpg') no-repeat;
        background-size: cover;
        background-position: right;
        border-radius: 0;
        z-index: 1;
        overflow: auto;
        max-width: 235px;
        width: 235px;
        scrollbar-width: thin;
        border-radius: 0 100px 100px 0;
        &::-webkit-scrollbar {
            width: 0px;
        }
        
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
            border-radius: 10px;
        }
 
         &::-webkit-scrollbar-thumb{ 
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

        .list-group-item{
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
            p{
                margin-bottom: 0;
                margin-left: 5px;
                font-size: 14px;
            }
        }
        
    }
</style>
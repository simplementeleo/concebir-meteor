<template>
    <div class="container-concebir">
        <div class="d-flex justify-content-between align-items-center mt-5">
            <h4>Sedes</h4>


            <button v-b-modal.modal-1
                :class="['button-concebir-default', 'animation','button-concebir', 'button-concebir-button', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center','animate__animated animate__fadeInTopLeft']">
                <p> Agregar </p>
                <font-awesome-icon :icon="['fas', 'plus']" class="icon ml-3" />
            </button>
        </div>

        <b-modal id="modal-1" title="Agregar Sede" :busy="false">

            <b-form @submit="register(dataVouce)">

                 <b-form-file v-model="dataVouce.image" :state="Boolean(dataVouce.image)" placeholder="Elegir imagen..." drop-placeholder="Imagen elegida..."></b-form-file>
                <b-form-input id="input-1" type="text" required placeholder="Nombre de Sede" class="mt-3" v-model="dataVouce.name"></b-form-input>
                 <b-form-input id="input-1" type="text" required placeholder="Abreviatura" class="mt-3" v-model="dataVouce.cod"></b-form-input>
               
                

                <button type="submit"
                    :class="['button-concebir-default', 'animation', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center', 'mt-4']">
                    <p> Agregar </p>
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
                </button>

            </b-form>
            <template v-slot:modal-footer>
                <div class="w-100">
                </div>
            </template>

        </b-modal>


        <b-table :items="table" :fields="fields" striped responsive="sm" class="mt-5">
            <template v-slot:cell(index)="data">
                {{ data.index + 1 }}
            </template>
            <template v-slot:cell(detalles)="row">

                <button @click="row.toggleDetails"
                    :class="['button-concebir-default', 'animation','button-concebir', 'button-concebir-button', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center','animate__animated animate__fadeInTopLeft']">
                    <p> {{ row.detailsShowing ? 'Ocultar' : 'Ver'}} </p>
                    <font-awesome-icon :icon="['fas',  row.detailsShowing ? 'times' : 'plus']" class="icon" />
                </button>
            </template>
            <template v-slot:row-details="row">
                <b-card>
                    <div class="mt-4">
                        <button @click="row.toggleDetails" class="btn-outline m-2">
                            Ocultar
                        </button>
                        <button class="btn-outline m-2 trash">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button class="btn-outline m-2 pencil">
                            <font-awesome-icon icon="edit" />
                        </button>
                        <button @click="status = !status" :class="['btn-outline', 'm-2', 'status', status ? 'disabled' : 'enable' ]">
                            <span class="mr-2">{{status ? 'Deshabilitar' : 'Habilitar'}}</span>
                            <font-awesome-icon :icon="status ? 'times' : 'check'" />
                        </button>
                    </div>
                </b-card>
            </template>
        </b-table>
    </div>
</template>
<style lang="scss" scoped>
    span {
        font-size: 14px !important;
    }
</style>
<script>
    export default {
        data() {
            return {
                status: true,
                dataVouce: {
                    image: null,
                    name: '',
                    cod: '',
                   
                },
                fields: [{
                        key: 'index',
                        label: 'N°'
                    },
                    'nombre',
                    'abreviatura',
                    'detalles'
                ],

                table: [
                    {
                        nombre: 'Nombre Sede',
                        abreviatura: 'abreviatura',
                    },
                    {
                        nombre: 'Nombre Sede',
                        abreviatura: 'abreviatura',
                    },
                    {
                        nombre: 'Nombre Sede',
                        abreviatura: 'abreviatura',
                    },
                    {
                        nombre: 'Nombre Sede',
                        abreviatura: 'abreviatura',
                    },
                    {
                        nombre: 'Nombre Sede',
                        abreviatura: 'abreviatura',
                    },
                    
                    
                    

                ],
            }
        },
        methods: {
            register(data) {
                console.log(data);
            }
        }
    }
</script>
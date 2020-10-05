<template>
    <div class="container-concebir">
        <div class="d-flex justify-content-between align-items-center mt-5">
            <h4>Pacientes</h4>


            <button v-b-modal.modal-1
                :class="['button-concebir-default', 'animation','button-concebir', 'button-concebir-button', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center','animate__animated animate__fadeInTopLeft']">
                <p> Agregar paciente </p>
                <font-awesome-icon :icon="['fas', 'plus']" class="icon ml-3" />
            </button>
        </div>

        <b-modal id="modal-1" title="Agregar Paciente" :busy="false">

            <b-form @submit="register(dataPatient)">

                 <b-form-file v-model="dataPatient.image" :state="Boolean(dataPatient.image)" placeholder="Elegir imagen..." drop-placeholder="Imagen elegida..."></b-form-file>
                <b-form-input id="input-1" type="text" required placeholder="Nombres" class="mt-3" v-model="dataPatient.names"></b-form-input>
                 <b-form-input id="input-1" type="text" required placeholder="Apellidos" class="mt-3" v-model="dataPatient.surnames"></b-form-input>
                  <b-form-input id="input-1" type="email" required placeholder="Email (Usuario)" class="mt-3" v-model="dataPatient.email"></b-form-input>
                   <b-form-input id="input-1" type="text" required placeholder="Clave" class="mt-3" v-model="dataPatient.password"></b-form-input>
                    <b-form-input id="input-1" type="text" required placeholder="DNI" class="mt-3" v-model="dataPatient.dni"></b-form-input>
                    <b-form-input id="input-1" type="text" required placeholder="Celular" class="mt-3" v-model="dataPatient.phone"></b-form-input>
                

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
                    <p> {{ row.detailsShowing ? 'Ocultar' : 'Ver'}} Detalles </p>
                    <font-awesome-icon :icon="['fas',  row.detailsShowing ? 'times' : 'plus']" class="icon" />
                </button>
            </template>

            <template v-slot:row-details="row">
                <b-card>

                    <div class="mt-4">
                        <button @click="row.toggleDetails" class="btn-outline m-2">
                            Ocultar Detalles
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
                dataPatient: {
                    image: null,
                    names: '',
                    surnames: '',
                    email: '',
                    password: '',
                    dni: '',
                    phone: ''
                },
                fields: [{
                        key: 'index',
                        label: 'N°'
                    },
                    'fechaRegistro',
                    'medico',
                    'paciente',
                    'detalles'
                ],

                table: [
                    {
                        fechaRegistro: '15/06/2020 12:45:00',
                        medico: 'Alicia Elías',
                        paciente: 'Luis Aparicio',
                        celular: '123456789'
                    },
                     {
                        fechaRegistro: '15/06/2020 12:45:00',
                        medico: 'Alicia Elías',
                        paciente: 'Luis Aparicio',
                        celular: '123456789'
                    },
                     {
                        fechaRegistro: '15/06/2020 12:45:00',
                        medico: 'Alicia Elías',
                        paciente: 'Luis Aparicio',
                        celular: '123456789'
                    },
                     {
                        fechaRegistro: '15/06/2020 12:45:00',
                        medico: 'Alicia Elías',
                        paciente: 'Luis Aparicio',
                        celular: '123456789'
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
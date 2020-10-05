<template>
    <div class="container-concebir">
        <div class="d-flex justify-content-between align-items-center">
            <h4>Médicos</h4>


            <button v-b-modal.modal-1
                :class="['button-concebir-default', 'animation','button-concebir', 'button-concebir-button', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center','animate__animated animate__fadeInTopLeft']">
                <p> Agregar médico </p>
                <font-awesome-icon :icon="['fas', 'plus']" class="icon ml-3" />
            </button>
        </div>

        <b-modal id="modal-1" title="Agregar Médico" :busy="false">

            <b-form @submit.prevent="register(dataMedic)">

                <b-form-file v-model="dataMedic.image" :state="Boolean(dataMedic.image)" placeholder="Elegir imagen..."
                    drop-placeholder="Imagen elegida..."></b-form-file>
                <b-form-input id="input-1" type="text" required placeholder="Nombres" class="mt-3"
                    v-model="dataMedic.names"></b-form-input>
                <b-form-input id="input-2" type="text" required placeholder="Apellidos" class="mt-3"
                    v-model="dataMedic.surnames"></b-form-input>
                <b-form-input id="input-3" type="email" required placeholder="Email (Usuario)" class="mt-3"
                    v-model="dataMedic.email"></b-form-input>
                <b-form-input id="input-4" type="password" required placeholder="Clave" class="mt-3"
                    v-model="dataMedic.password"></b-form-input>
                <b-form-input id="input-5" type="text" required placeholder="DNI" class="mt-3" v-model="dataMedic.dni">
                </b-form-input>
                <b-form-input id="input-6" type="text" required placeholder="Celular" class="mt-3"
                    v-model="dataMedic.phone"></b-form-input>




                <b-form-select required v-model="dataMedic.specialties" multiple :select-size="4" :options="specialties" class="mt-3">
                </b-form-select>
                <b-form-select required v-model="dataMedic.vouces" multiple :select-size="4" :options="vouces" class="mt-3"></b-form-select>

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
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Fecha Registro:</b></b-col>
                        <b-col>{{ row.item.fechaRegistro }}</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Sedes:</b></b-col>
                        <b-col>
                            <ul>
                                <li v-for="sede in row.item.sedes" v-bind:key="sede.name">{{ sede.name }} - <b>Estado:</b> {{ sede.state }}</li>
                            </ul>
                        </b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Especialidades:</b></b-col>
                        <b-col>
                            <ul>
                                <li v-for="especialidad in row.item.especialidades" v-bind:key="especialidad.name">{{ especialidad.name }} - <b>Estado:</b> {{ especialidad.state }}</li>
                            </ul>
                        </b-col>
                    </b-row>

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
                        <button @click="status = !status"
                            :class="['btn-outline', 'm-2', 'status', status ? 'disabled' : 'enable' ]">
                            <span class="mr-2">{{status ? 'Deshabilitar' : 'Habilitar'}}</span>
                            <font-awesome-icon :icon="status ? 'times' : 'check'" />
                        </button>
                        <button class="btn-outline m-2 pencil">
                            <span class="mr-2">Modificar calendario</span>
                            <font-awesome-icon icon="calendar" />
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
                dataMedic: {
                    image: null,
                    names: '',
                    surnames: '',
                    email: '',
                    password: '',
                    dni: '',
                    phone: '',
                    specialties: [],
                    vouces: [],
                },
                fields: [{
                        key: 'index',
                        label: 'N°'
                    },
                    'medico',
                    'email',
                    'celular',
                    'detalles'
                ],

                table: [
                    {
                        fechaRegistro: '22/06/2020 17:03:44',
                        especialidades: [
                            { name: 'Ginecología', state: 0},
                            { name: 'Psicología', state: 1},
                        ],
                        sedes: [
                             { name: 'Los Olivos', state: 1},
                            { name: 'Buenaventura', state: 0},
                        ],
                        medico: 'Alicia Elías',
                        email: 'aliciaelias@concebir.com',
                        celular: '987654321'
                    }, 
                     {
                        fechaRegistro: '22/06/2020 17:03:44',
                        especialidades: [
                            'Ginecología',
                            'Psicología'
                        ],
                        sedes: [
                            'Los Olivos',
                            'Buenaventura'
                        ],
                        medico: 'Alicia Elías',
                        email: 'aliciaelias@concebir.com',
                        celular: '987654321'
                    }, 
                     {
                        fechaRegistro: '22/06/2020 17:03:44',
                        especialidades: [
                            'Ginecología',
                            'Psicología'
                        ],
                        sedes: [
                            'Los Olivos',
                            'Buenaventura'
                        ],
                        medico: 'Alicia Elías',
                        email: 'aliciaelias@concebir.com',
                        celular: '987654321'
                    }, 
                     {
                        fechaRegistro: '22/06/2020 17:03:44',
                        especialidades: [
                            'Ginecología',
                            'Psicología'
                        ],
                        sedes: [
                            'Los Olivos',
                            'Buenaventura'
                        ],
                        medico: 'Alicia Elías',
                        email: 'aliciaelias@concebir.com',
                        celular: '987654321'
                    }, 
                     {
                        fechaRegistro: '22/06/2020 17:03:44',
                        especialidades: [
                            'Ginecología',
                            'Psicología'
                        ],
                        sedes: [
                            'Los Olivos',
                            'Buenaventura'
                        ],
                        medico: 'Alicia Elías',
                        email: 'aliciaelias@concebir.com',
                        celular: '987654321'
                    }, 
                ],
                specialties: [
                    {
                        value: 'cardiologia',
                        text: 'Cardiología'
                    },
                    {
                        value: 'pediatria',
                        text: 'Pediatría'
                    },
                    {
                        value: 'ginecologia',
                        text: 'Ginecología'
                    },

                ],
                vouces: [{
                        value: null,
                        text: 'Sedes'
                    },
                    {
                        value: 'losolivos',
                        text: 'Los Olivos'
                    },
                    {
                        value: 'sanisidro',
                        text: 'San Isidro'
                    },
                    {
                        value: 'santaanita',
                        text: 'Santa Anita'
                    },
                ],


            }
        },
        methods: {
            register(data) {
                console.log(data)
            }
        }
    }
</script>
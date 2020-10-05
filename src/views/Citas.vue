<template>
    <div class="container-concebir">
        <div class="d-flex justify-content-between align-items-center mt-5">
            <h4>Citas</h4>


            <button v-b-modal.modal-1
                :class="['button-concebir-default', 'animation','button-concebir', 'button-concebir-button', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center','animate__animated animate__fadeInTopLeft']">
                <p> Agregar cita </p>
                <font-awesome-icon :icon="['fas', 'plus']" class="icon ml-3" />
            </button>
        </div>

        <b-modal id="modal-1" title="Agregar Cita" :busy="false">

            <b-form @submit="register()">
                <b-form-select required v-model="dataCite.medic" :options="medics"></b-form-select>
                <b-form-select required v-model="dataCite.patient" :options="patients" class="mt-3"></b-form-select>
                <b-form-input id="input-1" type="date" required placeholder="Fecha de cita" class="mt-3"
                    v-model="dataCite.dateCite"></b-form-input>
                <b-form-input id="input-1" type="time" required placeholder="Hora de cita" class="mt-3"
                    v-model="dataCite.timeCite"></b-form-input>
                <b-form-select required v-model="dataCite.specialty" :options="patients" class="mt-3"></b-form-select>
                <b-form-select required v-model="dataCite.vouce" :options="patients" class="mt-3"></b-form-select>

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
                        <b-col sm="3" class="text-sm-right"><b>Sede:</b></b-col>
                        <b-col>{{ row.item.sede }}</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Precio:</b></b-col>
                        <b-col>{{ row.item.precio }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Fecha Generada:</b></b-col>
                        <b-col>{{ row.item.fechaGenerada }}</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Estado:</b></b-col>
                        <b-col>{{ row.item.estado }}</b-col>
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
                dataCite: {
                    medic: null,
                    patient: null,
                    dateCite: '',
                    timeCite: '',
                    specialty: null,
                    vouce: null
                },
                fields: [{
                        key: 'index',
                        label: 'N°'
                    },
                    'fecha',
                    'medico',
                    'paciente',
                    'especialidad',
                    'detalles'
                ],

                table: [{
                        fecha: '15/06/2020 12:45:00',
                        medico: 'Alicia Elías',
                        paciente: 'Luis Aparicio',
                        especialidad: 'Ginecología',
                        sede: 'San Isidro',
                        precio: '23,00 PEN',
                        fechaGenerada: '17/09/2020 22:11:32',
                        estado: 'Atendida',
                        acciones: 'actions'
                    },
                    {
                        fecha: '15/06/2020 12:45:00',
                        medico: 'Alicia Elías',
                        paciente: 'Luis Aparicio',
                        especialidad: 'Ginecología',
                        sede: 'San Isidro',
                        precio: '23,00 PEN',
                        fechaGenerada: '17/09/2020 22:11:32',
                        estado: 'Atendida',
                        acciones: 'actions'
                    },
                    {
                        fecha: '15/06/2020 12:45:00',
                        medico: 'Alicia Elías',
                        paciente: 'Luis Aparicio',
                        especialidad: 'Ginecología',
                        sede: 'San Isidro',
                        precio: '23,00 PEN',
                        fechaGenerada: '17/09/2020 22:11:32',
                        estado: 'Atendida',
                        acciones: 'actions'
                    },
                    {
                        fecha: '15/06/2020 12:45:00',
                        medico: 'Alicia Elías',
                        paciente: 'Luis Aparicio',
                        especialidad: 'Ginecología',
                        sede: 'San Isidro',
                        precio: '23,00 PEN',
                        fechaGenerada: '17/09/2020 22:11:32',
                        estado: 'Atendida',
                        acciones: 'actions'
                    },



                ],
                medics: [{
                        value: null,
                        text: 'Seleccione el médico'
                    },
                    {
                        value: 'Luis Noriega Hoces',
                        text: 'Luis Noriega Hoces'
                    },
                    {
                        value: 'Luis Noriega Portella',
                        text: 'Luis Noriega Portella'
                    },
                    {
                        value: 'Alicia Elías',
                        text: 'Alicia Elías'
                    },
                    {
                        value: 'Silvana Bardelez',
                        text: 'Silvana Bardelez'
                    },
                    {
                        value: 'Carlos Zuñiga',
                        text: 'Carlos Zuñiga'
                    },
                    {
                        value: 'Enrique Noriega',
                        text: 'Enrique Noriega'
                    },
                    {
                        value: 'María José Mendiola',
                        text: 'María José Mendiola'
                    },
                    {
                        value: 'Silvia Ortíz',
                        text: 'Silvia Ortíz'
                    },
                    {
                        value: 'Mariella Pita',
                        text: 'Mariella Pita'
                    },
                    {
                        value: 'Abigail Oroche',
                        text: 'Abigail Oroche'
                    },
                    {
                        value: 'María Píga Quiroga',
                        text: 'María Píga Quiroga'
                    },
                    {
                        value: 'Fiorella Castillo',
                        text: 'Fiorella Castillo'
                    },
                    {
                        value: 'Gabriela Cases',
                        text: 'Gabriela Cases'
                    },
                    {
                        value: 'Andrea Delgado',
                        text: 'Andrea Delgado'
                    }
                ],
                patients: [{
                        value: null,
                        text: 'Seleccione el paciente'
                    },
                    {
                        value: 'Luis Noriega Hoces',
                        text: 'Luis Noriega Hoces'
                    },
                    {
                        value: 'Luis Noriega Portella',
                        text: 'Luis Noriega Portella'
                    },
                    {
                        value: 'Alicia Elías',
                        text: 'Alicia Elías'
                    },
                    {
                        value: 'Silvana Bardelez',
                        text: 'Silvana Bardelez'
                    },
                    {
                        value: 'Carlos Zuñiga',
                        text: 'Carlos Zuñiga'
                    },
                    {
                        value: 'Enrique Noriega',
                        text: 'Enrique Noriega'
                    },
                    {
                        value: 'María José Mendiola',
                        text: 'María José Mendiola'
                    },
                    {
                        value: 'Silvia Ortíz',
                        text: 'Silvia Ortíz'
                    },
                    {
                        value: 'Mariella Pita',
                        text: 'Mariella Pita'
                    },
                    {
                        value: 'Abigail Oroche',
                        text: 'Abigail Oroche'
                    },
                    {
                        value: 'María Píga Quiroga',
                        text: 'María Píga Quiroga'
                    },
                    {
                        value: 'Fiorella Castillo',
                        text: 'Fiorella Castillo'
                    },
                    {
                        value: 'Gabriela Cases',
                        text: 'Gabriela Cases'
                    },
                    {
                        value: 'Andrea Delgado',
                        text: 'Andrea Delgado'
                    }
                ],


            }
        },
        methods: {
            register() {
                alert(this.form)
            }
        }
    }
</script>
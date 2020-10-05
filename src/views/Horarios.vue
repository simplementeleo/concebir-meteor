<template>
    <div class="container-concebir">
        <div class="d-flex justify-content-between align-items-center mt-5">
            <h4>Horarios</h4>


            <button v-b-modal.modal-1
                :class="['button-concebir-default', 'animation','button-concebir', 'button-concebir-button', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center','animate__animated animate__fadeInTopLeft']">
                <p> Agregar horario </p>
                <font-awesome-icon :icon="['fas', 'plus']" class="icon ml-3" />
            </button>
        </div>

        <b-modal id="modal-1" title="Agregar Horario" :busy="false">


            <b-form @submit="register()">
                <b-form-select required v-model="dataSchudele.medic" :options="medics"></b-form-select>
                <span class="mt-3 d-block">Fecha disponible:</span>
                <b-form-input id="input-1" type="time" required class="mt-3" v-model="dataSchudele.availableDate">
                </b-form-input>
                <span class="mt-3 d-block">Hora inicia:</span>
                <b-form-input id="input-1" type="time" required class="mt-3" v-model="dataSchudele.startTime">
                </b-form-input>
                <span class="mt-3 d-block">Hora fin:</span>
                <b-form-input id="input-1" type="time" required placeholder="Hora finaliza" class="mt-3"
                    v-model="dataSchudele.timeEnd"></b-form-input>
                <b-form-input id="input-1" type="text" required placeholder="Intervalo de Minutos Cita" class="mt-3"
                    v-model="dataSchudele.timeEnd"></b-form-input>
                <b-form-select required v-model="dataSchudele.vouce" :options="vouces" class="mt-3"></b-form-select>

                <b-form-select required v-model="dataSchudele.startDay" :options="startDay" class="mt-3">
                </b-form-select>
                <b-form-select required v-model="dataSchudele.endDay" :options="endDay" class="mt-3"></b-form-select>


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
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Fecha:</b></b-col>
                        <b-col>{{ row.item.fecha }}</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Día inicio:</b></b-col>
                        <b-col>{{ row.item.diaInicio }}</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Día fin:</b></b-col>
                        <b-col>{{ row.item.diaFin }}</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Hora inicio:</b></b-col>
                        <b-col>{{ row.item.horaInicio }}</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Hora fin:</b></b-col>
                        <b-col>{{ row.item.horaFin }}</b-col>
                    </b-row>

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
                        <button @click="status = !status"
                            :class="['btn-outline', 'm-2', 'status', status ? 'disabled' : 'enable' ]">
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
                dataSchudele: {
                    medic: null,
                    availableDate: '',
                    startTime: '',
                    timeEnd: '',
                    minuteIntervals: '',
                    vouce: null,
                    startDay: null,
                    endDay: null
                },
                fields: [{
                        key: 'index',
                        label: 'N°'
                    },
                    'medico',
                    'sede',
                    'detalles'
                ],

                table: [{
                        fecha: '15/06/2020',
                        diaInicio: 'Lunes',
                        diaFin: 'Viernes',
                        horaInicio: '12:30',
                        horaFin: '19:30',
                        medico: 'Alicia Elías',
                        sede: 'Los Olivos'
                    },
                    {
                        fecha: '15/06/2020',
                        diaInicio: 'Lunes',
                        diaFin: 'Viernes',
                        horaInicio: '12:30',
                        horaFin: '19:30',
                        medico: 'Alicia Elías',
                        sede: 'Sedeotra'
                    },
                    {
                        fecha: '15/06/2020',
                        diaInicio: 'Lunes',
                        diaFin: 'Viernes',
                        horaInicio: '12:30',
                        horaFin: '19:30',
                        medico: 'Alicia Elías',
                        sede: 'Sede'
                    },
                    {
                        fecha: '15/06/2020',
                        diaInicio: 'Lunes',
                        diaFin: 'Viernes',
                        horaInicio: '12:30',
                        horaFin: '19:30',
                        medico: 'Alicia Elías',
                        sede: 'Buenaventura'
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
                vouces: [{
                        value: null,
                        text: 'Seleccione la sede'
                    },
                    {
                        value: 's1',
                        text: 'Sede 1'
                    },
                    {
                        value: 's2',
                        text: 'Sede 2'
                    },
                    {
                        value: 's3',
                        text: 'Sede 3'
                    },

                ],
                startDay: [{
                        value: null,
                        text: 'Día inicio'
                    },
                    {
                        value: 'L',
                        text: 'Lunes'
                    },
                    {
                        value: 'm',
                        text: 'Martes'
                    },
                    {
                        value: 'M',
                        text: 'Miercoles'
                    },
                    {
                        value: 'J',
                        text: 'Jueves'
                    },
                    {
                        value: 'V',
                        text: 'Viernes'
                    },
                    {
                        value: 'S',
                        text: 'Sábado'
                    },
                    {
                        value: 'D',
                        text: 'Domingo'
                    },
                ],
                endDay: [{
                        value: null,
                        text: 'Día fin'
                    },
                    {
                        value: 'L',
                        text: 'Lunes'
                    },
                    {
                        value: 'm',
                        text: 'Martes'
                    },
                    {
                        value: 'M',
                        text: 'Miercoles'
                    },
                    {
                        value: 'J',
                        text: 'Jueves'
                    },
                    {
                        value: 'V',
                        text: 'Viernes'
                    },
                    {
                        value: 'S',
                        text: 'Sábado'
                    },
                    {
                        value: 'D',
                        text: 'Domingo'
                    },
                ]


            }
        },
        methods: {
            register() {
                alert(this.form)
            }
        }
    }
</script>
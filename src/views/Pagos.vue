<template>
    <div class="container-concebir">
        <div class="d-flex justify-content-between align-items-center">
            <h4>Pagos</h4>


           
        </div>

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
                        <b-col sm="3" class="text-sm-right"><b>Forma Pago:</b></b-col>
                        <b-col>{{ row.item.formaPago }}</b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Estado:</b></b-col>
                        <b-col>{{ row.item.estado }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Fecha Registro:</b></b-col>
                        <b-col>{{ row.item.fechaRegistro }}</b-col>
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
    .button-concebir {
        transform: none;
    }
</style>
<script>
    export default {
        data() {
            return {
                status: true,
                fields: [{
                        key: 'index',
                        label: 'N°'
                    },
                    'monto',
                    'idCita',
                    'paciente',
                    'detalles'
                ],

                table: [
                    {
                        monto: '200,00 PEN',
                        idCita: '#90',
                        paciente: 'Joe Frigman',
                        formaPago: 'CULQI',
                        estado: 'Pago Confirmado',
                        fechaRegistro: '06/09/2020 22:40:27',
                    },
                     {
                        monto: '400,00 PEN',
                        idCita: '#76',
                        paciente: 'Joe Frigman',
                        formaPago: 'CULQI',
                        estado: 'Pago Confirmado',
                        fechaRegistro: '06/09/2020 22:40:27',
                    },
                     {
                        monto: '100,00 PEN',
                        idCita: '#2',
                        paciente: 'Joe Frigman',
                        formaPago: 'CULQI',
                        estado: 'Pago Confirmado',
                        fechaRegistro: '06/09/2020 22:40:27',
                    },
                     {
                        monto: '500,00 PEN',
                        idCita: '#3',
                        paciente: 'Joe Frigman',
                        formaPago: 'CULQI',
                        estado: 'Pago Confirmado',
                        fechaRegistro: '06/09/2020 22:40:27',
                    },
                   
                    



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
<template>
    <div class="container-concebir">
        <div class="d-flex justify-content-between align-items-center">
            <h4>Citas</h4>


            <button v-b-modal.modal-1
                :class="['button-concebir-default', 'animation','button-concebir', 'button-concebir-button', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center']">
                <p> Agregar cita </p>
                <font-awesome-icon :icon="['fas', 'plus']" class="icon ml-3" />
            </button>
        </div>

        <b-modal id="modal-1" title="Agregar Cita">
            
            <b-form-select v-model="dataCite.medic" :options="medics"></b-form-select>
            <b-form-select v-model="dataCite.patient" :options="patients" class="mt-3"></b-form-select>


        </b-modal>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dataCite: {
                medic: null,
                patient: null,
                dateCite: '',
                timeCite: '',
                specialty: '',
                vouce: ''
            },
              medics: [
                { value: null, text: 'Seleccione el médico' },
                { value: 'Luis Noriega Hoces' , text: 'Luis Noriega Hoces'},
                { value: 'Luis Noriega Portella' , text: 'Luis Noriega Portella'},
                { value: 'Alicia Elías' , text: 'Alicia Elías'},
                { value: 'Silvana Bardelez' , text: 'Silvana Bardelez'},
                { value: 'Carlos Zuñiga' , text: 'Carlos Zuñiga'},
                { value: 'Enrique Noriega' , text: 'Enrique Noriega'},
                { value: 'María José Mendiola' , text: 'María José Mendiola'},
                { value: 'Silvia Ortíz' , text: 'Silvia Ortíz'},
                { value: 'Mariella Pita' , text: 'Mariella Pita'},
                { value: 'Abigail Oroche' , text: 'Abigail Oroche'},
                { value: 'María Píga Quiroga' , text: 'María Píga Quiroga'},
                { value: 'Fiorella Castillo' , text: 'Fiorella Castillo'},
                { value: 'Gabriela Cases' , text: 'Gabriela Cases'},
                { value: 'Andrea Delgado', text: 'Andrea Delgado'}
            ],
            patients: [
                { value: null, text: 'Seleccione el paciente' },
                { value: 'Luis Noriega Hoces' , text: 'Luis Noriega Hoces'},
                { value: 'Luis Noriega Portella' , text: 'Luis Noriega Portella'},
                { value: 'Alicia Elías' , text: 'Alicia Elías'},
                { value: 'Silvana Bardelez' , text: 'Silvana Bardelez'},
                { value: 'Carlos Zuñiga' , text: 'Carlos Zuñiga'},
                { value: 'Enrique Noriega' , text: 'Enrique Noriega'},
                { value: 'María José Mendiola' , text: 'María José Mendiola'},
                { value: 'Silvia Ortíz' , text: 'Silvia Ortíz'},
                { value: 'Mariella Pita' , text: 'Mariella Pita'},
                { value: 'Abigail Oroche' , text: 'Abigail Oroche'},
                { value: 'María Píga Quiroga' , text: 'María Píga Quiroga'},
                { value: 'Fiorella Castillo' , text: 'Fiorella Castillo'},
                { value: 'Gabriela Cases' , text: 'Gabriela Cases'},
                { value: 'Andrea Delgado', text: 'Andrea Delgado'}
            ],
           

        }
    }
}
</script>
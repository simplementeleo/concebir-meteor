<template>
    <div class="container-concebir">
        <h4 class="mt-5">Seleccione la Sede</h4>
        <b-row>
            <card-vouce v-for="(clinic, index) in clinics" v-bind:key="index" :image="clinic.image" :name="clinic.name" :delay="clinic.delay" />
        </b-row>
    </div>
</template>
<script>
import CardVouce from '../components/Utilities/CardVouce'
export default {
    components: {
        CardVouce
    },
    data(){
        return {
            clinics: [
                { delay: '100ms', url: '#', name: 'ADN - Genética', image: '0.jpg' },
                { delay: '200ms', url: '#', name: 'Concebir Arequipa', image: '0.jpg' },
                { delay: '300ms', url: '#', name: 'Concebir Chiclayo', image: '0.jpg' },
                { delay: '400ms', url: '#', name: 'Concebir Chorrillos', image: '0.jpg' },
                { delay: '500ms', url: '#', name: 'Concebir Los Olivos', image: '0.jpg' },
                { delay: '600ms', url: '#', name: 'Concebir Monterrico', image: '0.jpg' },
                { delay: '700ms', url: '#', name: 'Concebir Primavera', image: '0.jpg' },
                { delay: '800ms', url: '#', name: 'Concebir San Isidro', image: '0.jpg' },
                { delay: '900ms', url: '#', name: 'Concebir San Juan de Miraflores', image: '0.jpg' },
                { delay: '1000ms', url: '#', name: 'Lab. Planor Moterrico', image: '0.jpg' },
                { delay: '1100ms', url: '#', name: 'Lab. Pranor San Isidro', image: '0.jpg' },
                { delay: '1200ms', url: '#', name: 'Lab. Pranor Trujillo S Pablo', image: '0.jpg' },
                { delay: '1300ms', url: '#', name: 'Trascender', image: '0.jpg' },
                { delay: '1400ms', url: '#', name: 'VIDUM', image: '0.jpg' },
            ]
        }
    }
}
</script>
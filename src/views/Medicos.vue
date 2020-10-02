<template>
    <div class="container-concebir">
        <div>
            <h4>Seleccione el Doctor</h4>
            <b-row>
                 <card-medic
                  v-for="(medic, index) in medics"
                  v-bind:key="index"
                  :image="medic.img"
                  :name="medic.name"
                  :delay="medic.delay"
                   />
            </b-row>
        </div>
    </div>
</template>
<script>
import CardMedic from '../components/Utilities/CardMedic'
export default {
    components: {
        CardMedic
    },
    data(){
        return {
            medics: [
                { delay: '100ms', img: '1.jpg', name: 'Luis Noriega Hoces' },
                { delay: '200ms', img: '2.jpg', name: 'Luis Noriega Portella' },
                { delay: '300ms', img: '3.jpg', name: 'Alicia Elías' },
                { delay: '400ms', img: '4.jpg', name: 'Silvana Bardelez' },
                { delay: '500ms', img: '5.jpg', name: 'Carlos Zuñiga' },
                { delay: '600ms', img: '6.jpg', name: 'Enrique Noriega' },
                { delay: '700ms', img: '7.jpg', name: 'María José Mendiola' },
                { delay: '800ms', img: '8.jpg', name: 'Silvia Ortíz' },
                { delay: '900ms', img: '9.jpg', name: 'Mariella Pita' },
                { delay: '1000ms', img: '10.jpg', name: 'Abigail Oroche' },
                { delay: '1100ms', img: '11.jpg', name: 'María Píga Quiroga' },
                { delay: '1200ms', img: '12.jpg', name: 'Fiorella Castillo' },
                { delay: '1300ms', img: '13.jpg', name: 'Gabriela Cases' },
                { delay: '1400ms', img: '14.jpg', name: 'Andrea Delgado' }
            ]
        }
    }
}
</script>

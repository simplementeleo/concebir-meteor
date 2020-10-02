<template>
        <b-col cols="12" sm="12" md="4">
            <div class="card-medic p-4 mt-4 animate__animated animate__flipInX" :style="{ 'animation-delay': delay }">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <img :src="require(`../../assets/medics/${image}`)" class="img-fluid rounded-circle" alt="Medic">
                    <h4 class="mt-3 text-center"> {{ name }} </h4>
                </div>
                <hr>
                <button type="submit" :class="['button-concebir-default', 'animation', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center', 'mt-4']">
                    <p> Reservar </p>
                    <font-awesome-icon :icon="['fas', 'calendar']" class="icon" />
                </button>
                <button type="submit" :class="['button-concebir-default', 'animation','button-concebir-no-bg' , 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center', 'mt-4']">
                    <p> Ver más </p>
                    <font-awesome-icon :icon="['fas', 'tasks']" class="icon" />
                </button>
            </div>
        </b-col>
</template>
<script>
export default {
    name: 'card-medic',
    props: ['image', 'name', 'delay'],
}
</script>
<style lang="scss" scoped>

    .card-medic {
        background: white;
        border-radius: 6px;
        box-shadow: 10px 10px 20px #00000012;
        img {
            max-width: 192px;  
            box-shadow: 3px 11px 16px #1f4e3626;  
        }

        h4 {
            font-weight: 300;
        }

    }
    
</style>
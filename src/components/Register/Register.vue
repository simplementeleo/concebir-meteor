<template>
    <div>
        <card-concebir v-if="!signUp">
            <div>
                <div class="d-flex justify-content-center align-items-center">
                    <img src="../../assets/logo.png" width="70" />
                    <h4> {{ welcome }} </h4>
                </div>

                <form @submit.prevent="login(user)">
                    <div class="mt-5">
                        <div class="main-input">
                            <input type="text" maxlength="15" placeholder="Usuario" class="input-text-concebir"
                                v-model="user.user">
                            <font-awesome-icon icon="envelope" class="icon" />
                        </div>
                        <div class="main-input mt-4">
                            <input type="password" maxlength="15" placeholder="Contraseña" class="input-text-concebir"
                                v-model="user.pass">
                            <font-awesome-icon icon="lock" class="icon" />
                        </div>
                    </div>
                    <a href="#" class="mt-4 text-right">Recuperar contraseña</a>
                     <button type="submit" :class="['button-concebir-default', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center', 'mt-4']">
                        <p> ACCEDER </p>
                        <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
                    </button>
                </form>


                <a class="signUp text-center mt-4" @click="signUp = !signUp">
                    ¿No tienes cuenta? <br>
                    <strong>Regístrate ahora</strong>
                </a>
            </div>
        </card-concebir>


        <card-concebir v-show="signUp">

            <div v-if="step == 1">
                <div class="d-flex justify-content-around align-items-center">
                    <font-awesome-icon icon="arrow-left" class="c-pointer" @click="signUp = !signUp" />
                    <h4>Ingresa tus datos</h4>
                </div>
                <hr>
                <form @submit.prevent="lastStep(2, newUser.stepOne)" class="mt-5">
                   <div class="main-input mt-4">
                        <input type="text" maxlength="15" placeholder="Escribe tu email" class="input-text-concebir"
                            v-model="newUser.stepOne.user">
                        <font-awesome-icon icon="envelope" class="icon" />
                    </div>
                    <div class="main-input mt-4">
                        <input type="password" maxlength="15" placeholder="Escribe tu contraseña" class="input-text-concebir"
                            v-model="newUser.stepOne.pass">
                        <font-awesome-icon icon="lock" class="icon" />
                    </div>
                    <button type="submit" :class="['button-concebir-default', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center', 'mt-5']">
                        <p> Siguiente </p>
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="icon" />
                    </button>
                </form>
                
            </div>

            <div v-if="step == 2">
                <div class="d-flex justify-content-around align-items-center">
                    <font-awesome-icon icon="arrow-left" class="c-pointer" @click="lastStep(1, newUser)" />
                    <h4>Ingresa tus datos</h4>
                </div>
                <hr>
                <form @submit.prevent="register(newUser, selected)" class="mt-5">

                    <b-form-select v-model="selected" :options="options"></b-form-select>

                    <div class="main-input mt-4">
                        <input type="text" maxlength="15" placeholder="Número de documento" class="input-text-concebir"
                            v-model="newUser.stepTwo.documentNumber">
                    </div>

                    <div class="main-input mt-4">
                        <input type="text" maxlength="15" placeholder="Escribe tus nombres" class="input-text-concebir"
                            v-model="newUser.stepTwo.names">
                    </div>
                    <div class="main-input mt-4">
                        <input type="text" maxlength="15" placeholder="Escribe tus apellidos" class="input-text-concebir"
                            v-model="newUser.stepTwo.surnames">
                    </div>
                    <div class="main-input mt-4">
                        <input type="text" maxlength="15" placeholder="Escribe tu número de celular" class="input-text-concebir"
                            v-model="newUser.stepTwo.phone">
                    </div>
                    <div class="main-input mt-4">
                        <input type="date" maxlength="15" class="input-text-concebir"
                            v-model="newUser.stepTwo.date">
                    </div>

                 <button type="submit" :class="['button-concebir-default', 'd-flex', 'button-concebir', 'justify-content-around', 'align-items-center', 'mt-5']">
                    <p> Regístrate </p>
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
                </button>
                
                
                </form>
                

            </div>
        </card-concebir>

    </div>
</template>

<script>
    import CardConcebir from '../Utilities/CardConcebir'
    import { mapMutations } from 'vuex'
    export default {
        name: 'register',
        components: {
            CardConcebir,
        },
        data() {
            return {
                welcome: 'Bienvenida',
                user: {
                    user: '',
                    pass: ''
                },
                selected: null,
                newUser: {
                    stepOne: {
                        user: '',
                        pass: '',
                    },
                    stepTwo: {
                        documentType: '',
                        documentNumber: '',
                        names: '',
                        surnames: '',
                        phone: '',
                        date: ''
                    }
                },
                signUp: false,
                step: 1,
                options: [ 
                    { value: null, text: 'Tipo de documento' },
                    { value: 'DNI', text: 'Documento Nacional de Identidad' },
                    { value: 'CE', text: 'Carnet de extranjería' },
                    { value: 'P', text: 'Pasaporte' }
                ]
            }
        },
        methods: {
            ...mapMutations(['_Login']),
            lastStep(step, elms) {
                const data = Object.create(elms);
                if (step == 2){
                    if (data.user == '' || data.pass == '') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Se requiere llenar todos los campos',
                        });
                    }else {
                        this.step = step
                    }
                }else {
                    this.step = step
                }
            },
            login(elms) {
                const data = Object.create(elms);
                if (data.user == '' || data.pass == ''){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Se requiere llenar todos los campos',
                    });
                }else{
                    setTimeout(() => {
                        this._Login(data)
                    }, 100)
                }
            },
            register(elms, selected){
                const data = Object.create(elms);
                data.stepTwo.documentType = selected;

                // Data register
                console.log(data)
            }
        }
    }
</script>

<style lang="scss" scoped>
    h4 {
        color: #666666;
        font-weight: 200;
        margin-left: 10px;
    }

    a {
        display: block;
        font-size: 14px;
        color: green;

        &:hover {
            text-decoration: none;
            color: #72afd2;
        }

        &.signUp {
            cursor: pointer;
            color: black;
            font-size: 17px;
        }
    }

    select {
        border: none;
        outline: none;
        border-bottom: 1px solid green;
        &:active, &:focus {
            outline: none;
            box-shadow: none;
            border-bottom: 1px solid green;
        }
    }
</style>
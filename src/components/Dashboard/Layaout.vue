<template>
    <div>
        <sidebar /> 
        <navbar />
        <concebir />
    </div>
</template>
<script>
    import sidebar from '../Navigation/Sidebar'
    import navbar from '../Navigation/Nav'
    import concebir from './Content'
    export default {
        name: 'layaout',
        components: {
            sidebar,
            navbar,
            concebir
        }
    }
</script>
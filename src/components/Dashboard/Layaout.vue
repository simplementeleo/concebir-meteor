<template>
    <div>
        <Sidebar :status="false"></Sidebar>
        <Nav :status="false"></Nav>
        <Content></Content>
    </div>
</template>
<script>
    import Sidebar from '../Navigation/Sidebar'
    import Nav from '../Navigation/Nav'
    import Content from './Content'
    export default {
        components: {
            Sidebar,
            Nav,
            Content
        }
    }
</script>
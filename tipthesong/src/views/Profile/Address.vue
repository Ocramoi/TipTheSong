<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar></Sidebar>   
        </div>
    </div>
</template>

<script>
import Sidebar from '../../components/Profile/Sidebar.vue'

export default {
    data() {
        return {
            username: null,
            phone: null,
            email: null,
            curPassword: null,
            newPassword: null,
            confirmPassword: null,
            user: {
                name: 'milena',
                email: 'milenaxd@gmail.com',
                phone: '(24) 98374-6262'
            }
        }
    },
    components: {
        Sidebar,
    }
}
</script>

<style scoped>
    * {
        color: var(--white);
    }

    
</style>
<template>
    <div class="container">
        <h2>GERENCIAMENTO DE DADOS</h2>
        <div class="inner-container">
            <div class="card">
                <p> Administradores </p>
            </div>
            <div class="card">
               <p> Usuários </p> 
            </div>
            <div class="card">
                <p> Produtos </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
* {
    color: var(--white);   
}

.container {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.inner-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
}

.card {
    width: 250px;
    height: 200px;
    background-color: var(--primary-light);
    
    box-shadow: 5px 5px 10px var(--primary-dark);
    box-sizing: border-box;
    border-radius: 5px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card > p {
    font-size: 1.25rem;
}

</style>
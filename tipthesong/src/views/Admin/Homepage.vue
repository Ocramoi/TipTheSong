<template>
    <div class="container">
        <h3>GERENCIAMENTO DE DADOS</h3>
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
    margin-top: 1rem;

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
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card > p {
    font-size: 1.25rem;
}

</style>
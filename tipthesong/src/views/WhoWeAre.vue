<template>
    <div class="container">
        <h2>
            Quem Somos?
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet! Laborum suscipit labore, aperiam dolor, quidem nesciunt blanditiis rerum enim modi voluptatibus ut, sunt et pariatur nulla sit provident quo sint explicabo similique vero amet! Eligendi, repudiandae placeat. Provident in excepturi autem magni iure quos natus, aliquid et eligendi, dolorem inventore ab! Doloribus magni consectetur aperiam alias at laudantium. Soluta in commodi eligendi blanditiis ut, labore quam neque sed. Dolores quaerat minima odio voluptate aliquam voluptas repellendus nisi, at inventore molestiae iste accusamus laborum maiores sunt ex odit magni expedita qui quibusdam? In voluptas delectus natus fuga voluptatem, ut eligendi.
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui inventore sit id ea nam nemo dolorem sed quis? Neque, perferendis consequuntur. Inventore excepturi sequi error blanditiis eaque similique eius vitae aperiam saepe cupiditate assumenda aliquam porro consectetur totam, tempora beatae quaerat rerum quo ipsam minima eligendi molestiae itaque. Quo nobis est sint neque voluptatum exercitationem, rerum, itaque, laboriosam obcaecati quas beatae labore aliquid adipisci quisquam rem dignissimos architecto nisi recusandae?
        </p>
        <div class="imgBox">
                <img class="imgProfile" src="../assets/Us/Mih.jpg" alt="Mih">
                <img class="imgProfile" src="../assets/Us/Dio.jpg" alt="Dio">
                <img class="imgProfile" src="../assets/Us/Marco.jpg" alt="Marco">
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'WhoWeAre',
    };
</script>

<style text="text/sccs" media="screen" scoped>
    .imgBox {   
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 2rem;
        flex-wrap: wrap;
    }

    .imgProfile {
        width: 140px;
        height: 140px;
        justify-content: space-between;
        border-radius: 999px;
        box-shadow: 5px 5px 10px var(--primary-dark);
    }
</style>
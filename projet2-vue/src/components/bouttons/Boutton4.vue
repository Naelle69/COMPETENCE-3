<template>
        <!-- Back to top button -->
    <button class="boutton4">
        <img src="@/assets/images/svg-icones/fleche1.svg" width="30"/>
    </button>
    
</template>

<style scoped>
    .boutton4{
        width: 50px;
        height: 50px;
        border-radius:10px 5px 10px 5px;
        border: solid 2px rgb(72, 69, 38);
        background-color: rgb(72, 69, 38);
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 90%;
        left: 95%;
        z-index: 5;
    }
    @media screen and (min-width:1px) and (max-width:480px){
   
    }

    @media screen and (min-width:481px) and (max-width:768px){
    /*     .boutton4{
        display: block;
    } */
}


/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){
/*  .boutton4{
        display: block;
    } */
} 

</style>


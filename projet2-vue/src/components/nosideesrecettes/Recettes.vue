<template>
        <div class="recettes card shrink-0 ml-4 shrink-0 snap-center">
          <div class="card-inner">
            <div class="cardfront">
              <img class="imagerecette" :src="require(`@/assets/images/${image}`)" alt="Recette"/>
              <div class="ideetext text-center">
                <h4 class="h4vert mb-2">{{titre}}</h4>
                <h4 class="h4blanc">{{soustitre}} </h4>
              </div>
            </div>
            <div class="cardback">
              <img class="imagerecette" :src="require(`@/assets/images/${image}`)" alt="Recette"/>
              <div class="ideetext text-center">
                <h4 class="h4vert mb-2">{{titre}}</h4>
                <h4 class="h4blanc"> Phasellus semper bibendum ex et eleifend. Donec accumsan. Pellentesque senectus neque. Pellentesque se Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper bibendum ex et eleifend. Pellentesque senectus neque.</h4>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'Recettes',
  props: {
    id: Number,
    image: String,
    titre: String,
    soustitre: String
  }
}
</script>


<style scoped>
.card{
  perspective: 1000px;
}

.card-inner{
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: 0.6s;
}

.card:hover .card-inner{
  transform:rotatex(180deg);
}

.cardfront, .cardback{
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.cardfront{
  background-image: url("../../assets/images/grandfond.svg");
  background-repeat: no-repeat;
}

.cardfront:before{
  content:"";
  position: absolute;
  height: 100%;
  width: 100%;
  top:0%;
  background: linear-gradient(0deg);
}

/* .cardfront .card-content{
  z-index: 1;
  color:white;
} */

.cardback{
/*   background-image: url("../../assets/images/grandfondvert.svg");
  background-repeat: no-repeat; */
  transform: rotatex('180deg');
}




/* 
.recettes{
  background-image: url("../../assets/images/grandfond.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 230px;
  height: 350px;;
  padding: 3%;
}

.recettes:hover{ 
  background-image: url("../../assets/images/grandfondvert.svg");
  background-position: center;
}
 */

.ideetext .h4vert:hover{
  color:#D79D66
}


.imagerecette{
  width: 120px;
  border-radius: 50%;
  position: relative;
  left: 30px;
}

/* TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){
  .recettes{
  width: 240px;
  height: 450px;
  margin: 0px;
}

/* .texterecettes{
  font-size: 16px;
} */

.ideetext{
  position: relative;
  top: 100px;
/*   font-size: 16px; */
}

.imagerecette{
  width: 130px;
  border-radius: 50%;
  position: relative;
  left: 30px;
  top: 30px;
}
}


/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){

.recettes{
  width: 680px;
  height: 700px;
  margin-top: 50px;
}

/* .texterecettes{
  font-size: 16px;
} */

.ideetext{
  position: relative;
  top: 130px;
/*   font-size: 16px; */
}

.imagerecette{
  width: 180px;
  border-radius: 50%;
  position: relative;
  left: 100px;
}
}

</style>
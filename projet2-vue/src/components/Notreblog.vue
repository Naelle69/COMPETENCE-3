<template>
  <div id="app" class="notreblog">

    <div class="nosconseils">
      <div class="directives">
        <div  class="texteconseils">
          <div class="conseilprincipal">
            <h3 class="h3vert">{{soustitre}}</h3>
            <p class="ptexte">{{texte}}</p>
          </div>
          <img class="img-conseil" :src="require(`@/assets/images/${image}`)">
        </div>
        
        <p class="mb-4">
          <button class="ptexte inline-block  leading-tight uppercase  focus:ring-0 transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
            {{button}} 
          </button>
        </p>
        
        <div style="min-height: 120px">
          <div class="collapse collapse-vertical" id="collapseWidthExample">
            <div class="conseils block">
              <div class="conseil0">
                <div class="conseil1">
                  <h3 class="h3vert">Laver plutôt qu'épulcher</h3>
                  <p class="ptexte">
                    Certains légumes primeurs ne s'épluchent pas (carottes, navets, petites pommes de terre) et un lavage soigneux avec une brosse spéciale est suffisant. Garder l'épluchure a l'avantage aussi de préserver les qualités nutritionnelles de l'aliment.
                    Dans la mesure du possible, privilégiez l'achat de légumes biologiques qui sont exempts de pesticides mais même dans ce cas, il convient de les débarrasser de la poussière et d'une partie des germes présents sur leur surface en les nettoyant. Même si vos légumes vous paraissent propres et sans terre, passez les sous l'eau courante, sans savon et brossez-les.
                    Nettoyez aussi les légumes dont vous ne mangez pas la peau ou l'écorce car la chair peut être contaminée par les germes lors de la découpe.
                    Attention à ne pas laisser tremper vos légumes pendant des heures dans l'eau. Ils perdraient ainsi une bonne partie des sels minéraux et des vitamines qu'ils contiennent.
                  </p>
                </div>
            
                <div class="conseil1">
                  <h3 class="h3vert">Quelques règles particulières</h3>
                  <p class="ptexte">
                      Certains légumes primeurs ne s'épluchent pas (carottes, navets, petites pommes de terre) et un lavage soigneux avec une brosse spéciale est suffisant. Garder l'épluchure a l'avantage aussi de préserver les qualités nutritionnelles de l'aliment.
                      Dans la mesure du possible, privilégiez l'achat de légumes biologiques qui sont exempts de pesticides mais même dans ce cas, il convient de les débarrasser de la poussière et d'une partie des germes présents sur leur surface en les nettoyant. Même si vos légumes vous paraissent propres et sans terre, passez les sous l'eau courante, sans savon et brossez-les.
                      Nettoyez aussi les légumes dont vous ne mangez pas la peau ou l'écorce car la chair peut être contaminée par les germes lors de la découpe.
                      Attention à ne pas laisser tremper vos légumes pendant des heures dans l'eau. Ils perdraient ainsi une bonne partie des sels minéraux et des vitamines qu'ils contiennent.
                  </p>
                </div>

                <div class="conseil1">
                  <h3 class="h3vert">Astuces de grands mères: Bicarbonnate de soude</h3>
                  <p class="ptexte">
                      Notez que pour nettoyer plus efficacement vos légumes, le bicarbonate de soude est un bon allié. Dans un litre d'eau, ajoutez une cuillère à soupe de bicarbonate. Laissez tremper vos légumes quelques minutes, rincez. Le tour est joué !
                      Vous pouvez procéder autrement en saupoudrant un linge propre de ce produit, en frottant vos légumes à la surface puis en rinçant.
                  </p>
                </div>
              </div>  
      
              <div class="grid">
                <div class="imageslavage">
                  <img src="image/legume1.jpg" class="lavage1" alt="">
                  <div class="lavage">
                    <img src="image/lavagelegume.jpg" class="lavage2" alt="">
                    <img src="image/lavagelegumes2.jpg" class="lavage2" alt="">
                  </div>
                  <img src="image/LAVAGEDELEGUMES2.jpg" class="lavage3" alt="">
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>

    <!-- <div class="notreblog">
        <div class="nosconseils">
          <h2 class="h2marron ">Notre blog conseils</h2>
          <div class="texteconseils">
            <h3 class="h3vert">Comment laver ses légumes?</h3>
            <p class="ptexte">
              La peau des légumes est riche en vitamines et minéraux mais aussi en bactéries et parfois en pesticides. Pour se débarrasser de toute contamination possible et toute substance mauvaise pour la santé, il convient donc de bien les nettoyer. Pour savoir comment laver les légumes sans perdre leurs qualités nutritionnelles.
            </p>
          </div>
          <img class="lavage4" src="@/assets/images/lavagelegume1.jpg"/>
        </div>
         
        <p class="mb-4">
          <button class="ptexte inline-block  leading-tight uppercase  focus:ring-0 transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
           Suivez le guide
          </button>
        </p>
        <div style="min-height: 120px;">
          <div class="collapse collapse-vertical" id="collapseWidthExample">
            <div class="conseils block">
              <div class="conseil0">
                <div class="conseil1">
                  <h3 class="h3vert">Laver plutôt qu'épulcher</h3>
                  <p class="ptexte">
                    Certains légumes primeurs ne s'épluchent pas (carottes, navets, petites pommes de terre) et un lavage soigneux avec une brosse spéciale est suffisant. Garder l'épluchure a l'avantage aussi de préserver les qualités nutritionnelles de l'aliment.
                    Dans la mesure du possible, privilégiez l'achat de légumes biologiques qui sont exempts de pesticides mais même dans ce cas, il convient de les débarrasser de la poussière et d'une partie des germes présents sur leur surface en les nettoyant. Même si vos légumes vous paraissent propres et sans terre, passez les sous l'eau courante, sans savon et brossez-les.
                    Nettoyez aussi les légumes dont vous ne mangez pas la peau ou l'écorce car la chair peut être contaminée par les germes lors de la découpe.
                    Attention à ne pas laisser tremper vos légumes pendant des heures dans l'eau. Ils perdraient ainsi une bonne partie des sels minéraux et des vitamines qu'ils contiennent.
                  </p>
                </div>
            
                <div class="conseil1">
                  <h3 class="h3vert">Quelques règles particulières</h3>
                  <p class="ptexte">
                      Certains légumes primeurs ne s'épluchent pas (carottes, navets, petites pommes de terre) et un lavage soigneux avec une brosse spéciale est suffisant. Garder l'épluchure a l'avantage aussi de préserver les qualités nutritionnelles de l'aliment.
                      Dans la mesure du possible, privilégiez l'achat de légumes biologiques qui sont exempts de pesticides mais même dans ce cas, il convient de les débarrasser de la poussière et d'une partie des germes présents sur leur surface en les nettoyant. Même si vos légumes vous paraissent propres et sans terre, passez les sous l'eau courante, sans savon et brossez-les.
                      Nettoyez aussi les légumes dont vous ne mangez pas la peau ou l'écorce car la chair peut être contaminée par les germes lors de la découpe.
                      Attention à ne pas laisser tremper vos légumes pendant des heures dans l'eau. Ils perdraient ainsi une bonne partie des sels minéraux et des vitamines qu'ils contiennent.
                  </p>
                </div>
    
                <div class="conseil1">
                  <h3 class="h3vert">Astuces de grands mères: Bicarbonnate de soude</h3>
                  <p class="ptexte">
                      Notez que pour nettoyer plus efficacement vos légumes, le bicarbonate de soude est un bon allié. Dans un litre d'eau, ajoutez une cuillère à soupe de bicarbonate. Laissez tremper vos légumes quelques minutes, rincez. Le tour est joué !
                      Vous pouvez procéder autrement en saupoudrant un linge propre de ce produit, en frottant vos légumes à la surface puis en rinçant.
                  </p>
                </div>
              </div>  
       
              <div class="grid">
                <div class="imageslavage">
                  <img src="@/assets/images/legumes1.jpg" class="lavage1" alt="">
                  <div class="lavage">
                    <img src="@/assets/images/lavagelegume.jpg" class="lavage2" alt="">
                    <img src="@/assets/images/lavagelegumes2.jpg" class="lavage2" alt="">
                  </div>
                  <img src="@/assets/images/lavagelegume2.jpg" class="lavage3" alt="">
                </div>
              </div>
            </div>
          </div>
        </div> 

        <div class="notreblog">
          <div class="nosconseils">
            <div class="texteconseils">
              <h3 class="h3vert">Comment conserver ses légumes?</h3>
              <p class="ptexte">
                La peau des légumes est riche en vitamines et minéraux mais aussi en bactéries et parfois en pesticides. Pour se débarrasser de toute contamination possible et toute substance mauvaise pour la santé, il convient donc de bien les nettoyer. Pour savoir comment laver les légumes sans perdre leurs qualités nutritionnelles.
              </p>
            </div>
            <img class="lavage4" src="@/assets/images/conserverseslegumes.png" />
          </div>
           
          <p class="mb-4">
            <button class="ptexte inline-block  leading-tight uppercase  focus:ring-0 transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
             Suivez le guide
            </button>
          </p>
        </div>

        <div class="notreblog">
          <div class="nosconseils">
            <div class="texteconseils">
              <h3 class="h3vert">Comment gagner du temps en cuisine?</h3>
              <p class="ptexte">
                La peau des légumes est riche en vitamines et minéraux mais aussi en bactéries et parfois en pesticides. Pour se débarrasser de toute contamination possible et toute substance mauvaise pour la santé, il convient donc de bien les nettoyer. Pour savoir comment laver les légumes sans perdre leurs qualités nutritionnelles.
              </p>
            </div>
            <img class="lavage4" src="@/assets/images/cuisine.jpg" />
          </div>
           
          <p class="mb-4">
            <button class="ptexte inline-block  leading-tight uppercase  focus:ring-0 transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
             Suivez le guide
            </button>
          </p>
        </div>
    </div> -->
</template>

<script>
export default {
name: 'Notreblog',
props: {
id: Number,
soustitre: String,
texte: String,
image: String,
button: String
}
}
</script>



<style scoped>
/* PAGE NOTRE BLOG CONSEILS */

.notreblog{
  margin-left: 10%;
  margin-right: 5%;
  text-align:start;
  width: 90%;
}

.texteconseils{
  width: 100%;
}

.nosconseils{
  width: 50%;
  height: auto;
  margin-top: 5%;
}

.conseilprincipal{
  width: 50%;
}

.img-conseil{
  width: 50%;
}

.grid{
  width: 30%;
  height: auto;
  display:flex;
  align-items:flex-end;
  margin-left: 5%;
}

.lavage1{
  border-radius: 30px 5px 0px 0px;
}

.lavage3{
  border-radius: 0px 0px 30px 5px;
}

.lavage4{
  border-radius: 30px 5px 30px 5px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.lavage{
  display: flex;
  flex-direction: row;
}

.lavage1{
  width: 310px;
  height: 160px;
  margin: 5px;
}

.lavage2{
  width: 150px;
  height: 230px;
  margin: 5px;
}

.lavage3{
  width: 310px;
  height: 160px;
  margin: 5px;
}

.conseils{
  width: 100%;
  height: auto;
  display:flex;
  flex-direction: row;
}



.conseil0{
  width: 70%;
  height: auto;
}

.conseil1{
  margin-top: 5%;
}


/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){
  .notreblog{
  margin-left: 100px;
  margin-right: 100px;
}

.nosconseils{
  width: 100%;
  height: auto;
}

  .texteconseils{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10%;
}

.conseilprincipal{
  width: 40%;
}

.img-conseil{
  width: 40%;
  height: 350px;
  border-radius: 50px 5px 50px 5px;
  box-shadow: 3px 3px 5px 5px rgb(215, 157, 102, 0.3);
}

}

/* TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){

  .texteconseils{
  width: 100%;
  display: flex;
  flex-direction: row;
}
}

</style>
<template>
  <div>
    <h2 class="h2marron">Notre blog conseils</h2>
    <Notreblog v-for="(product,index) in products" :key="index" :id="product.id" :soustitre="product.soustitre" :texte="product.texte" :image="product.image" :button="product.boutton" />
  </div>
</template>


<script>
// @ is an alias to /src
import Notreblog from '@/components/Notreblog.vue'
import axios from 'axios'

export default {
name: 'Blog',
components: {
Notreblog,
},

data(){
    return {
        products:[],
        errors: [],
    }
},

// Fetches Details when the component is created.
created() {
axios.get('http://localhost:8080/products.json')
.then(response => {
  // JSON responses are automatically parsed.
  this.products = response.data.products
})
.catch(e => {
  this.errors.push(e)
})
}
}
</script>

<style scoped>
/* LAPTOP ET DESKTOP */
@media screen and (min-width:769px) and (max-width:2570px){
  .h2marron{
  margin-left: 180px;
  margin-top: 250px;
}

}

/* TABLETTE */
@media screen and (min-width:481px) and (max-width:768px){

  .h2marron{

}
}

</style>
<template>
  <div>
    <Contenuhomepage />
    <Nosplats />
    <Nosextras />
    <Nosrecettes />
    <Promotion />
    <Avis />
    <Astuce />
    <Contacteznous />
    <Avantages />
  </div>
</template>

<script>
// @ is an alias to /src
import Contenuhomepage from '@/components/homepage/Contenuhomepage.vue'
import Nosplats from '@/components/nosoffres/Nosplats.vue'
import Nosextras from '@/components/nosoffres/Nosextras.vue'
import Nosrecettes from '@/components/nosideesrecettes/Nosrecettes.vue'
import Promotion from '@/components/promotion/Promotion.vue'
import Avis from '@/components/Avis.vue'
import Astuce from '@/components/Astuce.vue'
import Contacteznous from '@/components/Contacteznous.vue'
import Avantages from '@/components/Avantages.vue'


export default {
  name: 'Accueil',
  components: {
    Contenuhomepage,
    Nosplats, 
    Nosextras,
    Nosrecettes,
    Promotion,
    Avis,
    Astuce,
    Contacteznous,
    Avantages
  },
}
</script>

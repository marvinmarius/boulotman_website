<template >

  <div class="flex " >

<Caroussel/>
<Categories></Categories>
  <v-divider></v-divider>
 <Book ></Book>
   <v-overlay  :opacity="0" translate
      :value="overlay">
      <v-progress-circular slot-scope="" size="64" >loading...</v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
// @ is an alias to /src

import Caroussel from '../components/Caroussel'
import Categories from '../views/Categorie';
import Book from '../components/Book';
import {mapState} from 'vuex'

export default {
  data: () => ({
  
    overlay: true,
}),
mounted(){
      this.overlay = false
    },

  computed:{
    ...mapState(['snackbar'])
  },
  name: 'Home',
  components: {
    Book,
    Caroussel,
    Categories,
    
  },
 
}
</script>

<style lang="scss">

</style>
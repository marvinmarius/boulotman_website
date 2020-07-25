<template >

  <div class="flex " >

<Caroussel/>
<Categories></Categories>
  <v-divider></v-divider>
 <Book ></Book>
   
  </div>
</template>

<script>
// @ is an alias to /src

import Caroussel from '../components/Caroussel'
import Categories from '../views/Categorie';
import Book from '../components/Book';
import {mapState} from 'vuex'

export default {
  mounted(){
   //localStorage.clear()
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
<template>
<v-layout>
  <v-container>
  
      <v-row>
        <v-col cols="12">
          <div class="flex justify-center"
          >
         
         <h1 class="categories">{{$t('CATEGORIES OF SERVICES')}}</h1>
          </div>
        </v-col>
    </v-row>
  <v-spacer></v-spacer>
  <v-divider ></v-divider>
   
      
        <v-row class="flex">
            
    <v-col  cols="12" sm="4" md="4" 
    v-for="categorie in categories"
    :key="categorie.id">
      <v-card   flat outlined shaped>
  
    <v-img
      class="align-center"
      :src="categorie.image"
      height="150px"
    ></v-img>
              <v-card-text class="text-center">
                <p><strong>{{categorie.name}}</strong></p>
                <p class="red--text">{{categorie.services_count}} services </p>
                  <p class="text-truncate">{{categorie.description}}</p>
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto">
                
                  <router-link :to="{name: 'categories', params:{id:categorie.slug}}">
                    <v-btn rounded color="teal accent-3" >{{$t('EXPLORE')}}</v-btn>
                    </router-link>
                </div>
              </v-card-actions>
          </v-card>
            </v-col>
          
          </v-row>
     

    
 
  
 
</v-container>
</v-layout>

</template>

<script>

import {mapState} from 'vuex'

  export default {
    name:'Categories',

computed: {
  ...mapState(['categories'])
 
},



    
  };
</script>
<style >
.categories{
  text-align: center;
  text-justify: auto;
  font-family: Lobster Two,cursive;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 40px
}
</style>

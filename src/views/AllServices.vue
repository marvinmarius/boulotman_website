<template>
<v-container fluid>
 <v-flex>
        <v-col cols="12">
          <div class="justify-center"
          >
         
         <h1 class="categories"> ALL THE AVAILLABLE SERVICES</h1>
          </div>
        </v-col>
    </v-flex>
   <v-spacer></v-spacer>
   <v-divider></v-divider>
       
  
   
         <v-row dense >
    <v-col cols="12" sm="4" md="4"  
    v-for="allservice in allservices"
    :key="allservice.id"
    >
      <v-card outlined shaped class="mx-auto">
  
  
    <v-img
      class="align-center"
      :src="allservice.image"
      height="190px"
    ></v-img>

              <v-card-text class="text-center">
                <p><strong>{{allservice.name}}</strong></p>
                  <p class="text-truncate">{{allservice.description}}</p>
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto">
                  
             <router-link :to="{name: 'service', params:{id:allservice.slug}}">
                    <v-btn rounded color="teal accent-3" >BOOK </v-btn>
                    </router-link>
                </div>
              </v-card-actions>
          </v-card>
            </v-col>
          </v-row>
   
   
</v-container>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name:'AllServices',

computed:{
        allservices(){
            return this.$store.state.allservices  
        },
        ...mapGetters(['getRelatedServices']),
      
}
  }
  
</script>
<style >


</style>
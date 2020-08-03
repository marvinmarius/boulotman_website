<template>
<v-container fluid>
  <v-overlay  :opacity="1"
      :value="overlay">
      <v-progress-circular indeterminate size="64">loading...</v-progress-circular>
    </v-overlay>
 <v-flex>
        <v-col cols="12">
          <div class="justify-center"
          >
         
         <h1 class="categoriess">  {{$t('Available Services')}}</h1>
          </div>
        </v-col>
    </v-flex>
   <v-spacer></v-spacer>
   <v-divider></v-divider>
       
  
   
         <v-row dense >
    <v-col cols="12" sm="4" md="3"  
    v-for="allservice in allservices"
    :key="allservice.id"
    >
      <v-card outlined shaped class="ma-3">
  
  
    <v-img
      class="align-center"
      :src="allservice.image"
      height="190px"
    ></v-img>

              <v-card-text class="text-center">
                <p><strong>{{allservice.name}}</strong></p>
                 <p class="red--text">{{allservice.sub_services_count}} sub-services </p>
                  <p class="hint">{{allservice.hint}}</p>
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto bg-black">
                  
             
                    <v-btn  :to="{name: 'service', params:{id:allservice.slug}}" rounded color="teal accent-3" v-html= "$t('bookk')" >
                    
                    </v-btn>
                    
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
    mounted(){
      this.overlay = false
   },

     data: () => ({
    overlay: true,
    }),
       inject: ['theme'],
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
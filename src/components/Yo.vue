<template>
    <v-container fluid>
  <v-row >
     <v-col cols="12" offset-md="5" offset-sm="4" offset-xl="8" > <h1 class="justify-center align-center red--text ">PAGE NOT FOUND </h1></v-col>
  </v-row>
  <v-row>
       <v-col cols="12" offset-md="5" offset-sm="4" offset-xl="8" >return to the home PAGE; <v-spacer></v-spacer> <v-btn class="success" rounded :to="`/${$i18n.locale}`">{{$t('nav.Home')}}</v-btn></v-col>
  </v-row>
    </v-container>
</template>
 
<script>
 

 
    export default {
        data: () => ({
        })
    }
</script>
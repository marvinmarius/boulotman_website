<template>
    <v-container fluid>
  <v-row >
     <v-col cols="12" offset-md="12" offset-sm="12"  >
          <h1 class="justify-center align-center red--text categories">PAGE NOT FOUND<v-icon color="red" size="48px" right>mdi-alert</v-icon> </h1></v-col>
  </v-row>
  <v-row>
       <v-col cols="12" offset-md="12" offset-sm="12" class="categories" >return to the home PAGE; <v-spacer></v-spacer> <v-btn class="success" rounded :to="`/${$i18n.locale}`">{{$t('nav.Home')}}</v-btn></v-col>
  </v-row>
    </v-container>
</template>
 
<script>
 

 
    export default {
        data: () => ({
        })
    }
</script>
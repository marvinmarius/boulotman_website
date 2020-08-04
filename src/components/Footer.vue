<template>

   <v-container fluid class="brown " >
          <v-row no-gutters 
              
              class="flex  fill-height "
              
           >
        <v-col cols="12" sm="3" md="3" >
          <v-card
            class="pa-0 brown "
            
            tile
            flat
           
          >
          <router-link :to="`/${$i18n.locale}`" @click.native="scrollToTop">
            <v-img
          alt="boulotman Logo"
          class="shrink mr-2"
          contain
          src="../assets/boulotmanlogo.png" 
          transition="scale-transition"
          width="120"
    />
          </router-link>
    
          </v-card>
        </v-col>
        <v-col cols="12" sm="3" md="3">
          <v-card
            class="brown"
            flat
            tile
         
          >
        <v-card-text class="justify-center"><h2 class="text-decoration-underline">Socials</h2></v-card-text>
        <v-list-item-group class="justify-center grp">
        <p class="v-list-item--link"><v-icon  size="24px" left>mdi-facebook</v-icon>
        <a   href="https://www.facebook.com/boulotman">Facebook</a>  </p>
        <p class="v-list-item--link"><v-icon size="24px" left>mdi-instagram</v-icon>Instagram</p>
        <p class="v-list-item--link"><v-icon size="24px" left>mdi-twitter</v-icon>Twitter</p>
        </v-list-item-group>
       
       
          </v-card>

        </v-col>

        <v-col cols="12" sm="3" md="3" >
          <v-card
            class="mx-auto brown "
          flat
            tile
             
          >
              
         <v-card-text class="justify-center"><h2 class="text-decoration-underline">{{$t('Useful Links')}}</h2></v-card-text>
    <v-list-item-group class="justify-center flex-column grp">
            <p class="v-list-item--link">
              <v-icon size="24px" left>mdi-book-open-page-variant</v-icon>
              <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/about`">
              {{$t('About Us')}}
              </router-link>
              </p>
          <p class="v-list-item--link">
            <v-icon size="24px" left>mdi-home-circle</v-icon>
            <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}`">{{$t('nav.Home')}}
            </router-link>
          </p>
          <p class="v-list-item--link">
            <v-icon size="24px" left>mdi-shield-lock-outline</v-icon>
            <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/privacy-policy`" >
            {{$t('Privacy Policy')}}</router-link>
            </p>
            
           <p class="v-list-item--link">
             <v-icon size="24px" left>mdi-electron-framework</v-icon>
             <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/services`" >
            {{$t('Services')}}
             </router-link>
             </p>
           <p class="v-list-item--link">
             <v-icon size="24px" left>mdi-book-open</v-icon>
             <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/terms-and-conditions`" >
            {{$t('Terms & Conditions')}}
             </router-link>
            </p>
           
           
    </v-list-item-group>
       
        
          
    
          </v-card>
          
        </v-col>
        <v-col cols="12" sm="3" md="3"  class="flex " >
          <v-card
            class="pa-0 brown"
            flat
            tile
           
          >
       <v-card-text class="justify-center"><h2 class="text-decoration-underline">{{ $t('Our Contacts')}}</h2></v-card-text>
     <v-list-item-group class="justify-center grp">
          <p class="v-list-item--link font-smaller"><v-icon size="24px" left>mdi-email</v-icon>boulotman@gmail.com</p>
         <p class="v-list-item--link font-smaller"><v-icon size="24px" left>mdi-phone</v-icon>(+237)698884618</p>
          <p class="v-list-item--link "><v-icon size="24px" left>mdi-phone-classic</v-icon>fix: +237 233-478-795</p>
     </v-list-item-group>
          </v-card>
         
        </v-col>
    </v-row >

      <v-divider class="pa-1" ></v-divider>
      <v-row   class="flex  fill-height">
          <v-col cols="12" class="flex- ">
          <v-card
            class=" ma-0 pa-0 teal "
            flat
            tile
           
          >
       <v-card-text class="text-center brown "><h2 class="text-decoration-underline">{{ new Date().getFullYear() }} — 
         <strong>{{ $t('All Rights Reserved')}} </strong></h2></v-card-text>
         
        
          </v-card>
         
        </v-col>
    </v-row>

 
  </v-container>

</template>
<script>
export default {
  methods:{
     scrollToTop() {
                window.scrollTo(0,0);
           }
  }
}
</script>

<style scoped>
.v-list-item--link a{
 text-decoration: none;
  color:black;
  
}
.grp p {
   
 color:black;
}

.v-list-item--link a:hover{

  color:blue;
  
}

</style>
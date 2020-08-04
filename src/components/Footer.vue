<template>

   <v-container fluid class="black  justify-sm-center justify-space-between " >
          <v-row 
              
              class="flex justify-space-between ma-n3 "
              
           >
        <v-col cols="12" sm="3" md="3" lg="3" >
          
          <router-link :to="`/${$i18n.locale}`" @click.native="scrollToTop">
            <v-img
          alt="boulotman Logo"

          src="../assets/boulotmanlogo.png" 
          transition="scale-transition"
          width="150"
    />
          </router-link>
    
      
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3">
          
       
        <v-card-text class="justify-center text-decoration-underline xxx">Socials</v-card-text>
        <v-list-item-group class="justify-center grp">
        <p class="v-list-item--link"><v-icon color="yellow"  size="24px" left>mdi-facebook</v-icon>
        <a   href="https://www.facebook.com/boulotman">Facebook</a>  </p>
        <p class="v-list-item--link"><v-icon color="yellow"  size="24px" left>mdi-instagram</v-icon>Instagram</p>
        <p class="v-list-item--link"><v-icon color="yellow" size="24px" left>mdi-twitter</v-icon>Twitter</p>
        </v-list-item-group>
          

        </v-col>

        <v-col cols="12" sm="3" md="3" lg="3" >
          
              
         <v-card-text class="justify-center"><p class="text-decoration-underline xxx">{{$t('Useful Links')}}</p></v-card-text>
    <v-list-item-group class="justify-center flex-column grp">
            <p class="v-list-item--link">
              <v-icon color="yellow" size="24px" left>mdi-book-open-page-variant</v-icon>
              <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/about`">
              {{$t('About Us')}}
              </router-link>
              </p>
          <p class="v-list-item--link">
            <v-icon color="yellow" size="24px" left>mdi-home-circle</v-icon>
            <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}`">{{$t('nav.Home')}}
            </router-link>
          </p>
          <p class="v-list-item--link">
            <v-icon color="yellow" size="24px" left>mdi-shield-lock-outline</v-icon>
            <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/privacy-policy`" >
            {{$t('Privacy Policy')}}</router-link>
            </p>
            
           
           <p class="v-list-item--link">
             <v-icon color="yellow" size="24px" left>mdi-book-open</v-icon>
             <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/terms-and-conditions`" >
            {{$t('Terms & Conditions')}}
             </router-link>
            </p>
           
           
    </v-list-item-group>
       
        
          
    
        
          
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3" class="flex " >
         
       <v-card-text class="justify-center"><p class="text-decoration-underline xxx">{{ $t('Our Contacts')}}</p></v-card-text>
     <v-list-item-group class="justify-center grp">
          <p class="v-list-item--link font-smaller"><v-icon color="yellow" size="24px" left>mdi-email</v-icon>boulotman@gmail.com</p>
         <p class="v-list-item--link font-smaller"><v-icon color="yellow" size="24px" left>mdi-phone</v-icon>(+237)698884618</p>
          <p class="v-list-item--link "><v-icon color="yellow" size="24px" left>mdi-phone-classic</v-icon>fix: +237 233-478-795</p>
     </v-list-item-group>
      
         
        </v-col>
    </v-row >

      <v-divider class="white" ></v-divider>
     
          <v-col cols="12 ">
          
       <v-card-text class="text-center black mb-n5 xxxx"><p class="text-decoration-underline"><strong>{{ new Date().getFullYear() }} — </strong>
         <strong>{{ $t('All Rights Reserved')}} </strong></p></v-card-text>
         
        
   
         
        </v-col>
    

 
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
  color:wheat;
  
}
.grp p {
   
 color:wheat;
}


.v-list-item--link a:hover{

  color:blue;
  
}
.xxx{
  color:wheat;
  
    font-weight: 300;
    font-size: 30px
}

.xxxx{
 
  color:wheat;
    font-weight: 300;
    font-size: 20px
}
</style>
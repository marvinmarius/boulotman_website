<template>
<v-container fluid>
   
                <v-app-bar app  dark fade-img-on-scroll
               prominent
              clipped-left
               src="../assets/home.jpg"
               hide-on-scroll
               height="120"
               fixed
              
             
                >
                
                <v-app-bar-nav-icon  @click.stop="sidebarMenu = !sidebarMenu" class="hidden-md-and-up">
               
                </v-app-bar-nav-icon>
               

        <router-link :to="`/${$i18n.locale}`" class="font-bold text-xl flex items-end">
             <v-img
          alt="boulotman Logo"
          class="shrink mr-2"
          contain
          src="../assets/boulotmanlogo.png" 
          transition="scale-transition"
          width="100"
    />    
          </router-link>
          
    <v-spacer></v-spacer>

              <v-toolbar-items class="mt-9 hidden-sm-and-down">
                <nav class="items-center mb-1 mt-10 ">                                  
    <ul>
      <li class="mr-1 mb-2  lg:mb-0 ">
            <v-btn text exact :to="`/${$i18n.locale}`">{{$t('nav.Home')}}</v-btn>
      </li>
      <li class="mr-1 mb-2 lg:mb-0">
      <v-btn text exact :to="`/${$i18n.locale}/services`" >{{$t('nav.SERVICES')}}</v-btn>
      </li>
      <li class="mr-1 mb-2 lg:mb-0">
      <v-btn text exact :to="`/${$i18n.locale}/about`">{{$t('nav.ABOUT US')}}</v-btn>
      </li>
       <li class="mr-1 mb-2 lg:mb-0">
      <v-btn text exact :to="`/${$i18n.locale}/categories`">{{$t('nav.CATEGORIES')}}</v-btn>
      </li>
       <li class="mr-1 mb-2 lg:mb-0">
      <v-btn text exact :to="`/${$i18n.locale}/rrr`">{{$t('nav.BLOG')}}</v-btn>
      </li>
       <li class="mr-1 mb-2 lg:mb-0">
      <v-btn text exact :to="`/${$i18n.locale}/step`">{{$t('nav.FAQ')}}</v-btn>
      </li>
      <li class="mb-1 lg:mb-0 mb-2">
            <LanguageSwitcher/>
        </li>
          
    </ul>
     
            </nav>
              </v-toolbar-items>

  <v-spacer></v-spacer>

         
         <v-btn rounded @click="toggleTheme" color="primary" class="mr-2">{{buttonText}}</v-btn>

          
     </v-app-bar>
<v-card>
  <v-navigation-drawer 
          v-model="sidebarMenu" 
       
         fixed
         clipped
         
         
        
          
        
         
          class=" flex fill-height brown hide"

          >
            

               <v-list >
                    <v-list-item class="items">
                    <v-list-item-icon>
                       <v-icon size="24px" left>mdi-home-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title >
                        <router-link class="item" :to="`/${$i18n.locale}`">{{$t('nav.Home')}}</router-link>
                    </v-list-item-title> 
                </v-list-item>

                <v-list-item class="items">
                    <v-list-item-icon>
                        <v-icon >mdi-toolbox-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title >
                        <router-link class="item" :to="`/${$i18n.locale}/services`" >{{$t('nav.SERVICES')}}</router-link>
                    </v-list-item-title>                
                </v-list-item>

                  <v-list-item class="items">
                    <v-list-item-icon>
                        <v-icon >mdi-shield-account</v-icon>
                    </v-list-item-icon>
                        <v-list-item-title>
                        <router-link  class="item" :to="`/${$i18n.locale}/about`">{{$t('nav.ABOUT US')}}</router-link>
                    </v-list-item-title> 
                </v-list-item>

                  <v-list-item class="items">
                    <v-list-item-icon>
                        <v-icon >mdi-palette-swatch</v-icon>
                    </v-list-item-icon>
                        <v-list-item-title>
                    <router-link  class="item" :to="`/${$i18n.locale}/categories`">{{$t('nav.CATEGORIES')}}</router-link>                       
                    </v-list-item-title>    
                  </v-list-item>

                  <v-list-item class="items">
                    <v-list-item-icon>
                        <v-icon >mdi-account</v-icon>
                    </v-list-item-icon>                
                    <v-list-item-title >
                        <router-link class="item" :to="`/${$i18n.locale}/rrr`">{{$t('nav.BLOG')}}</router-link>                       
                    </v-list-item-title>                   
                  </v-list-item>

                  <v-list-item class="items">
                    <v-list-item-icon>
                        <v-icon >mdi-frequently-asked-questions</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title >
                        <router-link class="item" :to="`/${$i18n.locale}/step`">{{$t('nav.FAQ')}}</router-link>    
                    </v-list-item-title>
                    
                </v-list-item>

                 <v-list-item class="items">
                    <v-list-item-icon>
                        <v-icon >mdi-web</v-icon>
                    </v-list-item-icon>
                        <v-list-item-title class="ml-n6"> 
                        <LanguageSwitcher />
                    </v-list-item-title>
                </v-list-item>
                  
               </v-list>
               
          
         
    </v-navigation-drawer>
</v-card>
    
</v-container>
  

</template>

<script>
import LanguageSwitcher from '../components/LanguageSwitcher'

export default {
    name: 'Navbar',
    components:
    {
      LanguageSwitcher
    },

      computed: {
  
    buttonText() {
        return !this.$vuetify.theme.dark ? this.$t('theme.Dark Mode'): this.$t('theme.Light Mode')
    },

     items() {
     return [
        { title: this.$t('nav.Home'), href:"/", icon:"mdi-home-outline" },
         { title: this.$t('nav.SERVICES'), href:"/services", icon:"mdi-toolbox-outline" },
        { title:this.$t('nav.ABOUT US'), href:"/about", icon:"mdi-shield-account" },
        { title:this.$t('nav.CATEGORIES'), href:"/Categories", icon:"mdi-palette-swatch" },
        { title:this.$t('nav.BLOG'), href:"/rrr", icon:"mdi-account" },
        { title:"FAQ", href:"/step", icon:"mdi-frequently-asked-questions" },
        { title:this.$t('Customers'), href:"/customers" },
      ]
     }
  },
  methods: {
    toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;      
    },
  },
data: () => ({
      sidebarMenu: false,
     clipped: false,
      
     
      
  })

}
</script>
<style scoped>


.item:hover{
  color:blue;
}


.li{
  color: black
}
.item{
   text-decoration-style: none;
  text-decoration: none;
   color: black;
  font: bold;
}
ul{
    list-style: none;
  
   display: inline-block;


   font: bold;
 
  
   
 
 

  }
  nav ul li {
   position: relative;
    transition: .2s ease-in-out;
    
    
  }

li{
  display: inline;
     margin: 0;
   padding: 0;
  
}


ul li:hover{
  color:  blue;
  background-color: brown;
  border-radius: 10px
   
}
ul li:active{
  color: red;
}

</style>
    
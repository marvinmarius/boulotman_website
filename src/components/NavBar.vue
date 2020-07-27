<template>
<v-container fluid>
   
                <v-app-bar app  dark fade-img-on-scroll
               prominent
              clipped-left
               src="../assets/tree-nature-isolated-lone-free-photo-on-pixabay-png-nature-960_650.png"
               hide-on-scroll
               height="100"
               fixed
              
             
                >
                <div class="hidden-lg-and-up">
                  <v-app-bar-nav-icon  @click.stop="sidebarMenu = !sidebarMenu"
                   class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
                    </v-app-bar-nav-icon>
                    </div>
        

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
                                             
    
          <v-toolbar-title class="hidden-sm-and-down justify-space-between ">
       
        
      <v-btn :to="`/${$i18n.locale}`">{{$t('nav.Home')}}</v-btn>
      <v-btn :to="`/${$i18n.locale}/services`" >{{$t('nav.SERVICES')}}</v-btn>
      <v-btn  :to="`/${$i18n.locale}/about`">{{$t('nav.ABOUT US')}}</v-btn>
      <v-btn :to="`/${$i18n.locale}/categories`">{{$t('nav.CATEGORIES')}}</v-btn>
      <v-btn :to="`/${$i18n.locale}/rrr`">{{$t('nav.BLOG')}}</v-btn>
      <v-btn :to="`/${$i18n.locale}/step`">{{$t('nav.FAQ')}}</v-btn>
     
    </v-toolbar-title>
      
  <v-spacer></v-spacer>

         
         <v-btn rounded @click="toggleTheme" color="primary" class="mr-2">{{buttonText}}</v-btn>

           <LanguageSwitcher class="pt-6 mt-6"/>
     </v-app-bar>
<v-card>
  <v-navigation-drawer 
          v-model="sidebarMenu" 
        app
         fixed
         clipped
          :permanent="sidebarMenu"
         
          disable-resize-watcher
          disable-route-watcher
          expand-on-hover
         
          class=" flex fill-height brown"
          
          
         
          
          
          >
            <v-list dense class="pt-3">

               
                <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
                    <v-list-item-icon>
                        <v-icon >{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                
                    <v-list-item-content>
                        <v-list-item-title class="text--white">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                    
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
      toggleMini: false,
      
     
      
  })

}
</script>
<style scoped>


</style>
    
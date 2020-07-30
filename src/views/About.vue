<template>
<v-container fluid>
  <div class="row mt-n9" >
<v-img  src="../assets/Perm2_ContactUs-1024x376.png" max-height="400px">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
                
                <div class="text-center white--text ">
                  <v-btn  class="red mb-n5" rounded :to="`/${$i18n.locale}/contact`">{{$t('Contact  US')}}</v-btn>
                </div>       
            </v-col>
          </v-row>
    </v-img>
  </div>

    
<div class="block pt-8">
    <v-col cols="12" >
        <h1 class="team">{{$t('WHO WE ARE?')}}</h1>
    
   </v-col>
   

              <v-container>  
            <p>   Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus
            commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. 
            Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit 
            et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
              cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </v-container>
  
</div>
<v-divider></v-divider>


      

   <v-col cols="12" >
        <h1 class="team">{{$t('OUR TEAM')}}</h1>
    
   </v-col>
   

    
  <v-row  class="flex fill-height ">
    <v-col cols="12" sm="4"
    v-for="category in categories"
    :key="category.id">
      <v-hover>
        <v-card flat 
        slot-scope="{ hover }">
 
    <v-img 
      class="white--text align-end rounded-circle "
      :src="category.src"
     
    >
 
    </v-img>
               <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out justify-center display-1 white--text fill-height"
            style="height: 100%;"
          >
                       <v-card-actions >
                 <v-btn class="yellow "><v-icon size="24px" class="dark-gray" left>mdi-email</v-icon>Send Mail</v-btn>
              </v-card-actions>
        
          </div>
        </v-expand-transition>
              <v-card-text class="text--primary">
                <p class="text-center bold text-uppercase">{{category.title}}</p>
                  <p class="text-center bold">  {{category.description}}</p>
              </v-card-text>

          
          </v-card>
      </v-hover>
            </v-col>
          </v-row>
    

     


</v-container>

</template>

<script>
  export default {
    name:'about',
    data(){
      return {
        categories:[
          {
            id:1,
            title: "Marius Manela",
            description: "Director",
            src:require("../assets/icone team.png")
          },
          {
               id:2,
            title: "Boboy Armand",
            description: "Vice Director",
            src:require("../assets/icone team.png")
          },
          {
               id:3,
            title: "Mark Andre",
            description: "Project Manager",
            src:require("../assets/icone team.png")
          },
         
          
        ]
      };
    }
    
  };
</script>
<style>
.team{
    text-align: center;
  text-justify: auto;
 
    text-transform: capitalize;
    font-weight: 600;
    font-size: 40px

};



</style>
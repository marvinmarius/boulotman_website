<template>

<v-container fluid>
    <div  class="flex  fill-height mt-n9 mr-n2 ml-n2 hidden-sm-and-down" >
      <v-img   src="../assets/111aboutus.jpg" >
    </v-img>

      </div>
  
  
  
   <v-container >
     
     <v-col cols="12" class="mt-8"> 
        <h4 class="team"><p>{{$t('Who We Are?')}}</p></h4>
     </v-col>
     <v-col cols="12" sm="4" md="4" class="hidden-md-and-up"> 
      <v-carousel hide-delimiters cycle   dark
     height="300"
     interval="3000"
   
     >

    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      class="flex fill-height"
    >
    </v-carousel-item>

      </v-carousel>
</v-col>
   <div>
   <v-row class="justify-space-between ">
       <v-divider ></v-divider>
   <v-col cols="12" sm="8" md="8"> 
             
            <p > 
            <strong >Boulotman</strong> {{$t('boulotman')}}
    </p>
   </v-col>
<v-col cols="12" sm="4" md="4" class="hidden-sm-and-down"> 
     <v-img
   
          alt="about"
         height="200"
          src="../assets/about.jpg" 
          lazy-src="../assets/about.jpg"
          />
</v-col>
   </v-row>
  <v-row class="justify-space-between mt-4">
   <v-col cols="12" sm="8" md="8"> 
<h4><p>{{$t('Our Technicians')}}</p></h4>
{{$t('tech')}}
   </v-col>
   <v-col cols="12" sm="4" md="4" class="hidden-sm-and-down"> 
      <v-carousel hide-delimiters cycle   dark
     height="300"
     interval="3000"
   
     >

    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      class="flex fill-height"
    >
    </v-carousel-item>

      </v-carousel>
</v-col>
  </v-row>

   <v-row class="justify-space-between mt-4">
   <v-col cols="12" sm="8" md="8"> 
 <h4><p >{{$t('Our mission')}}</p></h4>
{{$t('mission')}}
   </v-col>
   <v-col cols="12" sm="4" md="4" class="hidden-sm-and-down"> 
     <v-img
   
          alt="technicians"
         height="200"
          src="../assets/mission.jpg" 
            lazy-src="../assets/mission.jpg"
          />
</v-col>
   </v-row>
    <v-row class="justify-space-between mt-4">
   <v-col cols="12" sm="8" md="8"> 
<h4><p>{{$t('why')}}</p></h4>
{{$t('whywhy')}}

<span class="red--text">{{$t('Our prices are very affordable.')}}</span>
{{$t('texte')}}
          

   </v-col>

<v-col cols="12" sm="4" md="4" class="hidden-sm-and-down"> 
     <v-img
     
   
          alt="why boulotman"
         height="200"
          src="../assets/why.jpeg" 
          lazy-src="../assets/why.jpeg"
          />
</v-col>
    </v-row>
   </div> 

<v-divider></v-divider>


      

   <v-col cols="12" >
        <h4 class="team">{{$t('Our Team')}}</h4>
    
   </v-col>
   

    
  <v-row  class="flex fill-height ">
    <v-col cols="12" sm="4" md="4"
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
     


</v-container>

</template>

<script>
  export default {
    name:'about',
     computed:{
items(){

return [

          {
            src: require('../assets/construction 3.jpg'),
            
          },
          {
            src: require('../assets/technician.jpg'),
            
          },
         
           {
            src: require('../assets/11construction-worker-belt-with-tools-concrete-texture-background-free-space-text_35378-2163.jpg'),
           
          },
           {
            src: require('../assets/techn2.jpg'),
          
          },
         
          
           {
            src: require('../assets/construction 4.jpg'),
           
          },
        
        ]
}
      },
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
 
    font-weight: 600;
    font-size: 40px

};



</style>
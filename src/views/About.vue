<template>
<v-container fluid>
  <div class="row mt-n9" >
<v-img class="flex fill-height" src="../assets/111aboutus.jpg"
 max-height="600px">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
                
                <div class="text-center white--text ">
                  <v-btn  class="red mb-0 pb-n5" rounded :to="`/${$i18n.locale}/contact`">{{$t('Contact  US')}}</v-btn>
                </div>       
            </v-col>
          </v-row>
    </v-img>
  </div>

   <v-container >
     
     <v-col cols="12" class="mt-8"> 
        <h4 class="team"><p>{{$t('Who We Are?')}}</p></h4>
     </v-col>
     
   <div>
   <v-row class="justify-space-between ">
       <v-divider ></v-divider>
   <v-col cols="12" sm="8" md="8"> 
             
            <p > 
            <strong >Boulotman</strong> is a virtual booking company for Technicians and Engineers around Cameroon and Other CEMAC Countries to serve without dislocating residents.
Our company offers residents of Central African Communities complete handyman services. As a handyman company, Boulotman will cover a wide range of home repair services and building construction projects.
Boulotman offers fix-it services for; Auto Mechanics, Masonry, Plumbing, Electrical, Carpentry, Glassworks, Refrigeration, Property Mover, Pressing, Cleaning services, Nanny, Renovation, remodeling, Information technology, TV repair, Delivery and many more.
    </p>
   </v-col>
<v-col cols="12" sm="4" md="4" class="hidden-sm-and-down"> 
     <v-img
   
          alt="about"
         height="200"
          src="../assets/about.jpg" 
          />
</v-col>
   </v-row>
  <v-row class="justify-space-between mt-4">
   <v-col cols="12" sm="8" md="8"> 
<h4><p>Our Technicians</p></h4>
Our technicians are highly skilled craftsmen with a strong educational background in the trade and etiquette.
 Our fastidious handymen are known for the quality of workmanship and professional reliability so you know 
 the job will be done correctly and efficiently.
   </v-col>
   <v-col cols="12" sm="4" md="4" class="hidden-sm-and-down"> 
     <v-img
   
          alt="technicians"
         height="200"
          src="../assets/technician.jpg" 
          />
</v-col>
  </v-row>

   <v-row class="justify-space-between mt-4">
   <v-col cols="12" sm="8" md="8"> 
 <h4><p >Our mission</p></h4>
BOULOTMAN'S mission is to provide knowledgeable, convenient, and reasonably-priced handyman 
services to the Central African community. Boulotman will provide every customer with an honest
 day's work and will fix anything that is not done right.
   </v-col>
   <v-col cols="12" sm="4" md="4" class="hidden-sm-and-down"> 
     <v-img
   
          alt="technicians"
         height="200"
          src="../assets/mission.jpg" 
          />
</v-col>
   </v-row>
    <v-row class="justify-space-between mt-4">
   <v-col cols="12" sm="8" md="8"> 
<h4><p>Why Boulot Man?</p></h4>
Boulot man is a company for technicians that will cover all your home repair, 
  maintenance, and building construction project. With its platform, you are well 
  assured that your work will be handled professionally with a work guarantee.

<span class="red--text">Our prices are very affordable.</span>
Quality control is our point of focus. Boulotman material or parts used for replacement are sealed verified from our supply partners.

On-time is one of our key competitive edges. Boulotman prides itself on being punctual and respects the date to get your job done.

By providing efficiency, we will attempt to repair the problem first, replacement is only an option if the item cannot be repaired.

Repairing items is far less expensive for the consumer. Boulotman offers 6 months guarantee for all their work, if something goes wrong, Boulotman will make it right. The goal is to not have any unsatisfied consumer.
          

   </v-col>

<v-col cols="12" sm="4" md="4" class="hidden-sm-and-down"> 
     <v-img
   
          alt="why boulotman"
         height="200"
          src="../assets/why.jpeg" 
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
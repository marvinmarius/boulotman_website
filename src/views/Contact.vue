<template>
  <v-container fluid >
      <div  class="flex  fill-height" >
<v-img  src="../assets/anytime-header.jpg"  height="400">
    </v-img>
      </div>
      <v-divider></v-divider>
    <v-layout class=" fill-height pt-6 mt-6 justify-space-between "  >

    <v-col cols="12" sm="5" md="5">
          <v-card  class="fill-height pa-4"  dark>
   
      <v-row >
      <v-col>
          <div class="chat" v-html="$t('chat')">
        </div>
      </v-col>
    </v-row>

      <v-divider></v-divider> 
     <v-row class="mt-6">
     
      <v-col class="mt-8 offset-5">
        <span>{{$t('whatsapp')}}</span>
      <v-img
   
          alt="whasapp Logo"
          @click="sendMessage"
          src="../assets/Whatsapp_logo_svg.png" 
          width="100"/>
      </v-col>
    </v-row>
    

    <v-divider></v-divider>

    <v-row class="mt-6">
   
      <v-col class="mt-8 offset-5">
       <span> {{$t('mail')}}</span>
      <v-img
   
          alt="email Logo"
          @click="sendMail"
          src="../assets/mail.png" 
          width="100"/>
      </v-col>
    </v-row>
          </v-card>
    </v-col>
    
<v-col cols="12" sm="5" md="5">
         
     <v-card class="fill-height">
       <v-card-title class="justify-center" >OUR LOCATION</v-card-title>
      <iframe  class="fill-height" csrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.641965496517!2d9.741750914332835!3d4.093073497023818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610e0aeb0e27c7%3A0x81365289755f15c!2sInstitut%20Priv%C3%A9%20Polyvalent%20de%20Bonamoussadi!5e0!3m2!1sfr!2scm!4v1592489199408!5m2!1sfr!2scm" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
     </v-card>
   
</v-col>
    </v-layout>
 

 
  </v-container>
</template>

<script>
//import emailjs from 'emailjs-com';

  export default {

    methods:{
        sendMail(){
          window.open("https://mail.google.com/mail/?view=cm&fs=1&to=lamenacecoatch@yahoo.fr")
        },
        sendMessage(){
          window.open("https://api.whatsapp.com/send?phone=' + 690470152 + '&text=%20' + yo")
        }
    },
    data: () => ({
    
    })}
  

</script>
<style >
    .chat{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-size: 30px;
      font-style: italic;
      font-weight: 40px;
     text-align: center
      
    }
</style>
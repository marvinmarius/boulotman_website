<template>
  <v-flex >
      <div  class="flex  fill-height" >
<v-img  src="../assets/anytime-header.jpg"  height="400">
    </v-img>
      </div>
      <v-divider></v-divider>
    <v-layout class="flex fill-height pt-6 mt-6" >

    <v-col>
        
    <v-card   dark>
      <v-card-title class="justify-center align-center"><v-icon size="24px" left>mdi-file-question-outline</v-icon>
      Do you have any question? Please do not hesitate to contact us directly. Our team will come back to you within a matter 
      of hours to help you </v-card-title>
      <v-divider></v-divider>
<v-card-text >
        <v-form class="align-content-center"
    ref="form"
    v-model="valid"
    lazy-validation
    
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
       rounded
      outlined
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
       rounded
      outlined
    ></v-text-field>
    <v-text-field
      v-model="phone"
      :rules="phoneRules"
      label="Phone"
      rounded
      outlined
      required
    ></v-text-field>
      <v-textarea
      v-model="textarea"
      :rules="textareaRules"
      label="message"
      rounded
      outlined
 clearable
 rows="4"
    ></v-textarea>
 
    

    <v-btn 
      :disabled="!valid"
      color="success"
      right
      @click="validate"
      class="center"
      
      
    >
      SEND
    </v-btn>

   
  </v-form>

</v-card-text>

    </v-card>

    </v-col>
    
<v-col >
         
     <v-card  height="600">
       <v-card-title class="justify-center" >OUR LOCATION</v-card-title>
      <iframe  class="fill-height" csrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.641965496517!2d9.741750914332835!3d4.093073497023818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610e0aeb0e27c7%3A0x81365289755f15c!2sInstitut%20Priv%C3%A9%20Polyvalent%20de%20Bonamoussadi!5e0!3m2!1sfr!2scm!4v1592489199408!5m2!1sfr!2scm" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
     </v-card>
   
</v-col>
    </v-layout>
 

 
  </v-flex>
</template>

<script>

  export default {
    data: () => ({
    
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      
     
    }),
  
    methods: {
      validate () {
        this.$refs.form.validate()
      },
     
    },
  }

</script>
<style scoped>
.block{
  justify-content: flex-end;
  
}
</style>
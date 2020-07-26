<template>

  <v-container fluid class="bg-dark-gray" >
<div class="align-center ml-10 flex   ">
  
  
  <v-col cols="12">
    <h3  v-html="$t('texto')">
   </h3>

  </v-col>
</div>
<v-divider></v-divider>
<div class=" ml-10">
    <v-col cols="12" sm="6" md="5"  
   
    >
  
        <v-select 
        v-model="select"
        :items="subservices"
        item-text="name"
        item-value="id"
        outlined
      
        :placeholder= "$t('select')"
        rounded
       color="success"
       
        chips
        tags
        solo
     
        single-line
        required
      >
      
      </v-select>
        </v-col>
        
    <v-divider></v-divider>

     <v-card dark width="800" class=" justify-md-space-around ml-2 mt-4">
        <v-card-title class="justify-center green" > {{$t('form.title')}} <div><h3 class="text--red mr-4" >{{this.$route.params.id}}</h3></div>
           </v-card-title>
    
        <v-card-text>
         
            <v-form class="align-content-center"
    ref="form"
    @submit.prevent="onSubmit"
    
    v-model="valid"
    
  >

    <v-row justify="space-between" xs12 lg6>
          <v-col cols="12" sm="6" md="5">
          <v-text-field
              v-model="customer.first_name"
             :counter="15"
             :rules="nameRules"
              :label= "$t('FirstName')"
              append-icon="mdi-account"
              required
              outlined
              rounded
              class="required"
            ></v-text-field>
            
          </v-col>
          <v-col cols="12" sm="6" md="5">
          <v-text-field
              v-model="customer.last_name"
            :counter="15"
             :rules="nameRules"
              :label= "$t('LastName')"
                append-icon="mdi-account"
              required
               class="required"
              outlined
              rounded
              
            ></v-text-field>
           
          </v-col>
    </v-row>

    <v-text-field
      v-model="customer.address"
        :label= "$t('Personal Address')"
        append-icon="mdi-tooltip-account"
      outlined
      rounded
    ></v-text-field>
 
     <v-row justify="space-between" xs12 lg6>
       <v-col cols="12" sm="6" md="5">
        <v-text-field
        v-model="customer.email"
        :rules="emailRules"
        label="E-mail"
          append-icon="mdi-email"
        outlined
         class="required"
        required
        rounded
    ></v-text-field>
       </v-col>
        <v-col cols="12" sm="6" md="5">
         
                <vue-tel-input-vuetify 
               
    :rules="phoneRules"
    
    :only-countries="['CM']"
    default-country-code="+237"
    
    id="phone"
    click
    append-icon="mdi-phone"
    :label= "$t('phone')"
    maxLen="9"
    :valid-characters-only="true"
          :value="customer.phone_number"  
             v-model="customer.phone_number"
             required
              class="required"
             rounded
              outlined 
            
    ></vue-tel-input-vuetify>
           
        
          </v-col>
          
     </v-row>
    
    <v-col cols="12" sm="6" md="5" class=" offset-4 green--text  text-uppercase" v-html="$t('where do you require this service ? ')"> </v-col>
         <v-row justify="space-between" xs12 lg6>
       <v-col cols="12" sm="6" md="5">
        <v-text-field
        v-model="customer.city"
      placeholder="ex: Bamenda"
        append-icon="mdi-map-marker"
        :label= "$t('city')"
        outlined
        required
    
        rounded
    ></v-text-field>
       </v-col>
    <v-col cols="12" sm="6" md="5">
        <v-text-field
        v-model="customer.neighbourhood"
        :placeholder= "$t('e.g: bonandjo, located 50m from BEAC')"
        append-icon="mdi-crosshairs-gps"
        :label= "$t('neighbourhood')"
        outlined
        required 
        rounded
    ></v-text-field>
       </v-col>
      
         </v-row>
         <v-col cols="12" sm="6" md="5" class=" offset-4 green--text  text-uppercase" v-html="$t('when do you require this service ? ')"> </v-col>
    <v-row justify="space-between" xs12 lg6>
     
    <v-col cols="12" sm="6" md="5">
        <v-menu
          v-model="fromDateMenu"
          :close-on-content-click="false"
          full-width
          max-width="290"
          :nudge-right="40"
            transition="scale-transition"
            offset-y 
            
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              :value="fromDateDisp"
              rounded
                append-icon="mdi-calender-range"
              outlined
              clearable
              :label= "$t('date')"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="order.date"
            @input="fromDateMenu = false"
              :min="minDate"
          ></v-date-picker>
        </v-menu>
    </v-col>
    
    <v-col cols="12" sm="6" md="5">
        <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="order.time"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="time"
           :label= "$t('time')"
             append-icon="mdi-clock-outline"
         outlined
         rounded
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
      </v-row>

   <v-row justify="space-between" xs12 lg6>
   <v-col cols="12" sm="6" md="5">
      <v-select
      v-model="order.calling_period"
      :items="items"
     rounded
     :label= "$t('call')"
     
    outlined
    ></v-select>
   </v-col>

    <v-col cols="12" sm="6" md="5">
      <v-text-field
      v-model="order.address"
       append-icon="mdi-account-box"
     rounded
        :label= "$t('address')"
    outlined
    ></v-text-field>
   </v-col>
   </v-row>
      <v-textarea
        v-model="order.more_info"
        auto-grow
          append-icon="mdi-note-text-outline"
      outlined
        :rules="textAreaRules"
        :counter="150"
        :label= "$t('requirements')"
        rounded
        
        rows="2"
      ></v-textarea>
      
  </v-form>
        
        </v-card-text>
        <v-card-actions class="marron">
          <v-spacer></v-spacer>
         

    <v-btn
      color="error"
      class="mr-4"
  flat
      @click="$refs.form.reset()"
      v-html= "$t('reset')"
    >
     
    </v-btn>
          
             <v-btn class="mr-4" rounded color="success" :disabled="!valid" @click="onSubmit" v-html= "$t('book')"> </v-btn>
        </v-card-actions>
      </v-card>
       
      </div>


      <v-layout row  justify="center">
    <v-dialog v-model="this.modal.dialog"  persistent max-width="800px">
    
             <v-card class="justify-center " dark>
 
          <v-card-title>
              <marquee direction="left" behavior="scroll" scrollamount="10"><h1 class="green--text">
               success!!!  </h1></marquee>
           
        <p class="green--text justify-center" v-html= "$t('success')"></p>
          </v-card-title>
          <v-card-text>
              
              <v-card-title>
                  <p class="text-uppercase  font-italic" >
                  {{this.customer.first_name}}   {{this.customer.last_name}} </p>
              <p class="justify-center" >{{ this.$t('successful')}}
              </p>
              <br>  {{ this.$t('thank you for trusting us. ') }} 
              </v-card-title>
             
               
          </v-card-text>
        <v-card-actions>
          
          <v-btn right color="red" @click="accepted">OK</v-btn>
        </v-card-actions>
      
             </v-card>
    </v-dialog>
    
  </v-layout>

    </v-container>
  

 
</template>
<script>

//import SubServices from '../components/SubServices'
//import HelperQuestion from '../components/HelperQuestion'
import {mapGetters, mapState} from 'vuex'
import moment from 'moment'
export default {
  name:'Requirement',

  components:{
  //HelperQuestion,
    //SubServices,
  },


data(){
      return {

        id: this.$route.params.id,
   
         selectedItem:'',
       
   select: '',
      
      valid: false,
     phone: null,
      customer:{
          address: '',
          first_name: '',
          last_name: '',
          phone_number:'',
          city: '',
          neighbourhood:'',
          email:'',
         
        },
        order:{
          address:'',
          date:'',
          time:'',
          calling_period:'',
          more_info:'',
        },

        isLoading: false,
        form: false,
        object:{ 
   
    creation_date:'',
    customer: {},
    info: {},
    sub_service:'' ,
    
    },
 

      
        menu2: false,
        modal2: false,
     
      items: [
        'from 2AM to 7Pm',
        'everytime',
        'Before 3 AM',
        'After 4PM',
      ],
     fromDateMenu: false,
     fromDateVal: null,
     minDate: "2020-01-05",
     maxDate: "2019-08-30",
      
    
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
      
      nameRules: [
        v => !!v || 'this field  is required',
        v => v.length <=15 || 'must be less than 15 characters'
      ],

        phoneRules: [
        //v => v.length = 9 || "the phone number contains 9 characters",
        //v => v.length > 0 ||  'this field may not be empty',
        //v => Number.isInteger(Number(v)) || "the value must be an integer number",
           v => !!v || 'this field  is required',
           //v => /[^0-8]/.test(v) || 'must contains  9 numbers',
          V => V.length > 8 || 'less than 9 characters is not accepted ' 
        
        
        
      ],
        textAreaRules:[
        v => v.length <= 150 ||  " must be less than 150 characters",
       
        
      ],
   
      
        //modal: true,
  
  
   
        
      }

    },
    
methods:{
  

  //acceptNumber() {
   //var x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
    //this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    //},
    onSubmit(){
    
   
          localStorage.setItem('sub_service', JSON.stringify(this.select));
          localStorage.setItem('clients', JSON.stringify(this.customer));
          localStorage.setItem('order',JSON.stringify(this.order));
          this.$store.dispatch('preserveLocal');
          //localStorage.setItem('myQuiz' , JSON.stringify(this.quiz))
            //this.$store.dispatch('Localquiz');
          // this.$store.dispatch('createQuiz')

          //this.$store.dispatch('createOrderInfos')
          //this.$store.dispatch('createCustomer')

     // if(localStorage.getItem('jobRequest')!== null ){
      //  this.dialog = true
     // }

 
          //this.$store.dispatch('setSnacbar')
         // this.dialog = true
           
          
         
         
          
   
 //this.$router.push('/')
      },
      accepted(){
       this.$router.replace('/')
       window.localStorage.clear() 
        window.location.reload(true)
      }
    
},
  mounted(){
 //if (localStorage.getItem('services')) 
      //  this.services = JSON.parse(localStorage.getItem('services'));
        localStorage.setItem('service',JSON.stringify(this.services.id));
  },
  computed:{

   
    //if (this.test !=0){
    // localStorage.setItem(this.test)
   // }
    /**   set (services) {
        return  localStorage.setItem('services', JSON.stringify(services));
    },
      get () {
        return localStorage.getItem('services') || 0;
      },
   
      isSelected(){
        return this.jobRequest.includes(this.services.id);
      },
 */

        

      fromDateDisp() {
      return this.order.date? moment(this.order.date).format('dddd,  Do MMMM YYYY') : '';
      // format/do something with date
    },
  ...mapGetters(['getServices']),
  ...mapState(['jobRequest','snackbar', 'modal', 'customer']),
  
        services(){
      return this.getServices(this.id)
},
      
    
    subservices(){
      return this.getServices(this.id).sub_services
    }
    //localStorage.setItem('YourItem', response.data)
  },
   
 
}
</script>
<style  >

.required::after{
content: "*";
width: 40px;
position: static;
color: red;
}
h3{

  
  text-shadow: 10px;
  text-decoration: brown;
  font-family: 'Arial Narrow Bold', sans-serif;
  font-weight: 100;
    font-size: 30px
}

</style>
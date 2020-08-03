<template >

  <v-container fluid > 
 
       
   
<div class="align-center ml-10 flex">
  <v-col cols="12">
  <v-alert
      text
      prominent
     
      border="bottom"
      color="green"
      type="info"
     
    >
     <h4 v-html="$t('texto')">
   </h4>
  </v-alert>
  
   

  </v-col>
</div>
<v-divider></v-divider>

    <div class=" ml-10 mb-2">
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
    </div>
    
<v-row class="justify-space-between">
  <v-col>
     <v-card dark width="800" class=" ml-10 mt-4">
        <v-card-title class="justify-center green" > {{$t('form.title')}}
          <div><h3 class="text--red mr-4" >{{this.$route.params.id}}</h3></div>
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
              
              class="label"
              outlined
              rounded
              
            ></v-text-field>
            
          </v-col>
          <v-col cols="12" sm="6" md="5" >
          <v-text-field
              v-model="customer.last_name"
            :counter="15"
             :rules="nameRules"
              :label= "$t('LastName')"
                append-icon="mdi-account"
              required
              class="label"
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
         class="label"
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
  
   
    :label= "$t('phone')"
    
    
    
    :valid-characters-only="true"
          :value="customer.phone_number"  
             v-model="customer.phone_number"
             required
             
             rounded
             class="label"
              outlined 
            
    ></vue-tel-input-vuetify>
           
        
          </v-col>
          
     </v-row>
    
    <v-col cols="12" sm="6" md="5" class=" offset-3 green--text  text-uppercase" v-html="$t('where do you require this service ? ')"> </v-col>
         <v-row justify="space-between" xs12 lg6>
       <v-col cols="12" sm="6" md="5">
        <v-text-field
        v-model="order.city"
      placeholder="ex: Bamenda"
        append-icon="mdi-map-marker"
        :label= "$t('city')"
        outlined
      
    
        rounded
    ></v-text-field>
       </v-col>
    <v-col cols="12" sm="6" md="5">
        <v-text-field
        v-model="order.neighbourhood"
        :placeholder= "$t('e.g: bonandjo, located 50m from BEAC')"
        append-icon="mdi-crosshairs-gps"
        :label= "$t('neighbourhood')"
        outlined
      
        rounded
    ></v-text-field>
       </v-col>
      
         </v-row>
         <v-col cols="12" sm="6" md="5" class=" offset-3 green--text  text-uppercase" v-html="$t('when do you require this service ? ')"> </v-col>
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
    <v-col cols="12">
        <v-checkbox
              v-model="checkb"
              color="green"
             :rules="ckeckRules" 
            >
              <template v-slot:label>
                <div  >By clicking BOOK NOW, you agree to our
                  <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/terms-and-conditions`" >
                {{$t('Terms & Conditions')}}
                 </router-link>
                 and the <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/privacy-policy`" >
                {{$t('Privacy Policy')}}</router-link>
                </div>
              </template>
               
                  
                 
            </v-checkbox>
    </v-col>
      

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
  </v-col>
  <v-dialog v-model="dialog"  persistent max-width="900px">
    
             <v-card dark class="justify-center ">
 
          <v-card-title>
              
           TERMS & USE
     
          </v-card-title>
          <v-card-text>

"But I must explain to you how all 
this mistaken idea of denouncing pleasure and praising pain was born and I will 
give you a complete account of the system, and expound the actual teachings of the great 
explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, 
or avoids pleasure itself, because it is pleasure, but because those who do not know how
 to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
  is there anyone who loves or pursues or desires to obtain pain of itself, because it is 
  pain, but because occasionally circumstances occur in which toil and pain can procure him
   some great pleasure. To take a trivial example, which of us ever undertakes laborious
    physical exercise, except to obtain some advantage from it? But who has any right to 
    find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
     or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
 voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
  cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id 
  est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam 
  libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
   maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus 
   autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
    repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
     ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
     repellat." 1914 translation by H. Rackham "On the other hand, we denounce with righteous
      indignation and dislike men who are so beguiled and demoralized by the charms of pleasure
       of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are 
       bound to ensue; and equal blame belongs to those who fail in their duty through weakness of
        will, which is the same as saying through shrinking from toil and pain. These cases are perfectly 
    
          </v-card-text>
        <v-card-actions>
          
          <v-btn right color="red" @click="onSubmit">I ACCEPT</v-btn>
          <v-btn right color="red" @click="dialog = false">quit</v-btn>
        </v-card-actions>
      
             </v-card>
    </v-dialog>
  <v-col cols="12" sm="4" md="4" >
     <v-card class="justify-center " flat >
 
          <v-card-title>
      <p class="categorie text-decoration-underline">{{$t('ser')}}</p>
          </v-card-title>
       
              
          <v-card-text>
      <p  class="justify-center category">{{services.description}}</p>
          </v-card-text>
     </v-card>
  </v-col>
  
</v-row>


    
      <v-dialog v-model="this.modal.dialog"  persistent max-width="800px">
    
          <v-card class="justify-center " dark>
 
              <v-card-title>
                  <marquee direction="left" behavior="scroll" scrollamount="10"><h1 class="green--text">
                  Succès !!!<span> <v-icon dark>mdi-checkbox-marked-circle</v-icon></span>  </h1></marquee>
                  <p class="green--text justify-center" v-html= "$t('success')"></p>
              </v-card-title>
              
              <v-card-subtitle>
                  <p class="category " >
                     MR(s) {{this.customer.first_name}}   {{this.customer.last_name}}
                  </p>
              </v-card-subtitle>
                
              <v-card-text>
                  <p class="justify-center" >{{ this.$t('successful')}}</p>
                  <br>  {{ this.$t('thank you for trusting us. ') }}  
              </v-card-text>
              <v-card-actions >
              <v-btn class="mr-10 justify-center" color="success" @click="accepted">OK</v-btn>
              </v-card-actions>
      
          </v-card>
    </v-dialog>
    </v-container>
  

 
</template>
<script>

//import SubServices from '../components/SubServices'
//import HelperQuestion from '../components/HelperQuestion'
import {mapGetters, mapState} from 'vuex'
import moment from 'moment'
//import backgroundUrl from '../assets/'
export default {
  name:'Requirement',

  components:{
  //HelperQuestion,
    //SubServices,
  },


data(){
      return {
        //backgroundUrl,
        id: this.$route.params.id,
        checkb: false,
         selectedItem:'',
       terms: false,
   select: '',
      
      valid: false,
     phone: null,
      customer:{
          address: '',
          first_name: '',
          last_name: '',
          phone_number:'',
          email:'',
         
        },
        order:{
          city: '',
          neighbourhood:'',
          date:'',
          time:'',
          calling_period:'',
          more_info:'',
        },

        isLoading: false,
        form: false,
        object:{ 
   
    creation_date:'',
    customer: '',
    info: '',
    sub_service:'' ,
    
    },
 
dialog: false,
      
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
      
      ckeckRules:[
        v => !!v || this.$t('You must  accept to continue!')
      ],
      emailRules: [
        v => !!v || this.$t('rule'),
        v => /.+@.+\..+/.test(v) || this.$t('email')
        ],
      
      nameRules: [
        v => !!v || this.$t('rule'),
        //v => v.length <=15 || 'must be less than 15 characters'
      ],

        phoneRules: [
        //v => v.length = 9 || "the phone number contains 9 characters",
       // v => v.length <  || this.$t('nber') ,
        //v => Number.isInteger(Number(v)) || "the value must be an integer number",
           v => !!v || this.$t('rule'),
           //v => /[^0-8]/.test(v) || 'must contains  9 numbers',
         
        
        
        
      ],
        textAreaRules:[
        v => v.length <= 150 ||  " must be less than 150 characters",
       
        
      ],
   
      
        //modal: true,
  
  
   
        
      }

    },
    
methods:{
  
  read(){
      this.terms = false
      this.checkb = true
  },

  //acceptNumber() {
   //var x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
    //this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    //},
    start(){
 this.dialog = true

    },
    onSubmit(){
      localStorage.setItem('sub_service', JSON.stringify(this.select));
          localStorage.setItem('clients', JSON.stringify(this.customer));
          localStorage.setItem('order',JSON.stringify(this.order));
          this.$store.dispatch('preserveLocal');
   //this.dialog = false
 //this.$router.push('/')
      },
      accepted(){
        this.modal.dialog = false
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
  ...mapState(['jobRequest','snackbar', 'modal']),
  
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
<style scoped>

.categorie{
  text-align: center;
  text-justify: auto;

    
    font-weight: 600;
    font-size: 30px
}

.category{
  text-align: left;
  text-justify: newspaper;

    
    font-weight: 600;
    font-size: 20px;
    
}


.labeler::after{
content: "*";
width: 50px;
position: static;
color: red;
}

.labele::before{
content: "*";
width: 60px;
margin-left: 4px;
position:static;
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
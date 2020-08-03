<template>
    <v-container>
        <v-row >
        <v-col cols="12">
          <div class="flex justify-center "
          >
         
         <h1 class="categoriesss">  {{$t('terms')}}</h1>
          </div>
        </v-col>
        </v-row>
      <div class="ma-8" >

   <v-col cols="12">
          <div class="flex justify-center "
          >
         
         <h2 class="categoriessss">Definitions:</h2>
          </div>
        </v-col>
        <p>
            

    
    <div class="justify-center align-center">
    
        <ol>
        <li >{{$t('1')}}</li>
        <li>{{$t('2')}} </li>
        <li>{{$t('3')}}</li>
        <li>{{$t('4')}}</li>
        <li>{{$t('five')}}</li>
        <li>{{$t('6')}}</li>
        <li> {{$t('seven')}}</li>
        <li>{{$t('7')}}</li>
        <li>{{$t('eight')}}</li>
        <li>{{$t('nine')}}</li>
        <li>{{$t('ten')}}</li>
        <li>{{$t('11')}}</li>
        <li>{{$t('12')}} </li>
        <li>{{$t('13')}}</li>
        <li>{{$t('14')}}</li>
        <li>{{$t('15')}}</li>
        <li>{{$t('16')}}</li>
        <li>{{$t('25')}}</li>
        <li>{{$t('17')}}</li>
        
        <li>{{$t('18')}}</li>
        <li>{{$t('19')}}</li>
        <li> {{$t('20')}}</li>
        <li>{{$t('21')}}</li>
        <li>{{$t('22')}}</li>
        <li>{{$t('23')}}</li>
        <li> {{$t('24')}}</li>
   
        </ol>


       
    </div>

      </div>

       <v-row >
        <v-col cols="12">
          <div class="flex justify-center "
          >
         
         <h1 class="categoriess">{{$t('Statement of Work')}}</h1>
          </div>
        </v-col>
        <v-alert
      text
      prominent
     class="ma-8"
      border="bottom"
      
    
     
    >
     <h4>
            <p>Boulotman is not responsible for any technician who misrepresents him or
               herself as an employee or contractor of Boulotman company to take contracts
                individually without authorisation from a Boulot man supervisor in the field with 
                a verified identity for Boulotman. In this case, always call the company to verify the
                 technician is from Boulotman. All our technicians are branded with an identity badge 
                 carrying their full name and functions.
If a customer is not satisfied with a service and calls Boulotman for the guarantee and we are unable 
to verify that mission, we will not be held responsible for the damages and have the right to decline 
unless otherwise, the customer wants to get into a new contract.</p>
   </h4>
  </v-alert>
        </v-row>
    </v-container>
</template>
<style scoped>
ol li{
    margin-top: 10px;
}

.categoriesss{
  text-align: center;
  text-justify: auto;
  
    color: brown;
    font-weight: 600;
    font-size: 40px
}
.categoriessss{
  text-align: center;
  text-justify: auto;
  
    color: brown;
   
}
</style>
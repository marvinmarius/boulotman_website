<template>
      <v-container fluid>
        <div v-for="(item, index) in services.sub_services" :key="index">
          <h3 v-for="(q, index) in index.questions" :key="index">
  {{q.text}}
</h3>
        </div>
<Choices v-for="(c, index) in q.choices" :key="index"/>
  </v-container>
  
</template>
<script>
import Choices from '../components/Choices'

export default {
    name:'Questions',
    components:{Choices},
props:{
      services:{
        type: Object
      },
}


}
</script>
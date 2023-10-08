<template>
    <hellok />
    <v-container>
      <p>
        hi
      </p>
     

    </v-container>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import hellok from '../components/hello.vue';
  
  export default defineComponent({
    name: 'app',
  
    components: {
      hellok,
    },
  });
  </script>
  
<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{part.description}}
    </div>
  </div>
</template>

<script>
  import getPartsMixin from './get-parts-mixin';

  export default {
    name: 'PartInfo',
    
    mixins: [getPartsMixin],

    props: {
      partType: {type: String},
      id: {
          type: [Number, String], 
          validateor(value) {
              return Number.isInteger(Number(value));
          }
      }
    },

    computed: {
      part() {
        const { partType, id } = this;
        return this.parts[partType].find(part => part.id === +id);
        // part.id is an integer while id is a string; thus, +id to make id an integer.
        // compare with 3 equals ===
      },
    },
  };
</script>

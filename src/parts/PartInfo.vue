<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{part.description}}
    </div>
  </div>
</template>

<script>
  import parts from '../data/parts';

  export default {
    name: 'PartInfo',
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
        return parts[partType].find(part => part.id === +id);
        // part.id is an integer while id is a string; thus, +id to make id an integer.
        // compare with 3 equals ===
      },
    },
  };
</script>

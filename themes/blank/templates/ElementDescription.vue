<template>
  <!-- If description is HTML -->
  <div v-if="description" :class="classes.container" v-html="sanitize(description)" :id="id"></div>

  <!-- If description is a slot -->
  <div v-else-if="isSlot" :class="classes.container" :id="id"><slot/></div>
</template>

<script>
  import {sanitize} from "isomorphic-dompurify";
  export default {
    name: 'ElementDescription',
    methods: {sanitize},
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>

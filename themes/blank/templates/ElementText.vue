<template>
  <!-- If content is HTML -->
  <div v-if="content" :class="classes.container" v-html="sanitize(content)"></div>

  <!-- If content is a slot -->
  <div v-else-if="isSlot" :class="classes.container"><slot/></div>
</template>

<script>
  import {sanitize} from "isomorphic-dompurify";
  export default {
    name: 'ElementText',
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

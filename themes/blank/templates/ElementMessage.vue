<template>
  <div v-if="message" :class="classes.container" v-html="sanitize(message)"></div>
</template>

<script>
  import {sanitize} from "isomorphic-dompurify";

  export default {
    name: 'ElementMessage',
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

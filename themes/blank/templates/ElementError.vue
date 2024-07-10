<template>
  <div
    v-if="error"
    :class="classes.container"
    :id="id"
    aria-live="assertive"
    v-html="sanitize(error)"
  ></div>
</template>

<script>
  import {sanitize} from "isomorphic-dompurify";
  export default {
    name: 'ElementError',
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

<template>
  <div :class="classes.container">
    <div
      v-for="(error, key, index) in errors"
      :class="classes.error"
      v-html="sanitize(error)"
      :key="index"
    >
    </div>
  </div>
</template>

<script>
  import {sanitize} from "isomorphic-dompurify";
  export default {
    name: 'FormErrors',
    methods: {sanitize},
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          error: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>

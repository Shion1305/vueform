<template>
  <div :class="classes.container">
    <div
      v-for="(message, key, index) in messages"
      :class="classes.message"
      v-html="sanitize(message)"
      :key="index"
    >
    </div>
  </div>
</template>

<script>
  import {sanitize} from "isomorphic-dompurify";

  export default {
    name: 'FormMessages',
    methods: {sanitize},
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          message: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>

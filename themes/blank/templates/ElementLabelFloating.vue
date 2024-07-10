<template>
  <div :class="classes.container">
    <span
      :class="classes.label"
      v-html="sanitize(floating)"
    ></span>
  </div>
</template>

<script>
  import {sanitize} from "isomorphic-dompurify";
  export default {
    methods: {sanitize},
    name: 'ElementLabelFloating',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          label: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>

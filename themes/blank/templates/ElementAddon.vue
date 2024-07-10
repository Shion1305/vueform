<template>
  <!-- If addon is a component -->
  <div v-if="addon && isAddonComponent" :class="classes.container">
    <div :class="classes.wrapper">
      <component :is="addon"/>
    </div>
  </div>

  <!-- If addon is HTML -->
  <div v-else-if="addon" :class="classes.container">
    <div :class="classes.wrapper" v-html="sanitize(addon)"></div>
  </div>

  <!-- If addon is a slot -->
  <div v-else-if="isSlot" :class="classes.container">
    <div :class="classes.wrapper"><slot/></div>
  </div>
</template>

<script>
  import {sanitize} from "isomorphic-dompurify";
  export default {
    name: 'ElementAddon',
    methods: {sanitize},
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>

<template>
  <label :class="classes.container">
    <slot
      v-bind="{ name }"
      :classes="classes"
      :is-disabled="isDisabled"
      :id="id"
      :item="item"
      :value="value"
      :items="items"
      :index="index"
    >
      <div :class="classes.wrapper">
        <input
          type="radio"
          v-model="el$.model"
          v-bind="attrs"
          :value="value"
          :class="classes.input"
          :name="name"
          :id="id"
          :disabled="isDisabled"
        />
        <div :class="classes.text_wrapper">
          <div :class="classes.text" v-html="sanitize(item.label)" />
          <div :class="classes.description" v-html="sanitize(item.description)" />
        </div>
      </div>
    </slot>
  </label>
</template>

<script>
  import {sanitize} from "isomorphic-dompurify";

  export default {
    name: 'RadiogroupRadio_tabs',
    methods: {sanitize},
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text_wrapper: '',
          text: '',
          description: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>

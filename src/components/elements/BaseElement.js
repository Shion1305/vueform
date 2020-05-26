import _ from 'lodash'
import Vue from 'vue'
import MergesElementClasses from './../../mixins/MergesElementClasses'

export default {
  name: 'BaseElement',
  mixins: [MergesElementClasses],
  inject: ['theme', 'form$'],
  provide() {
    const _this = this
  
    return {
      get el$ () {
        return _this.el$
      },
    }
  },
  props: {
    schema: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      model: null,
    }
  },
  computed: {
    value: {
      get() {
        return this.model
      },
      set(value) {
        this.model = value
      }
    },
    label() {
      return this.schema.label
    },
    class() {
      return this.schema.class || null
    },
    classes() {
      return this.mergedClasses
    },
    addClasses() {
      return this.schema.addClasses || {}
    },
    components() {
      return Vue.observable(_.merge({}, this.theme.components, this.schema.components || {}))
    },
    el$() {
      return this
    },
  },
  watch: {
    schema: {
      handler() {
        this.assignSlots()
        this.$forceUpdate()
      },
      deep: true,
      immediate: false
    }
  },
  methods: {
    assignSlots() {
      _.each(this.schema.slots, (slot, name) => {
        let instance = new slot({
          propsData: {
            el$: this.el$
          }
        })

        instance.$mount()

        this.$set(this.$slots, name, [instance._vnode])
      })
    }
  },
  mounted() {
    this.assignSlots()
  },
  updated() {
    this.assignSlots()
  },
}
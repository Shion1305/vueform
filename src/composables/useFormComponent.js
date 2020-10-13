import { computed, toRefs } from 'composition-api'
import useForm$ from './useForm$'
import useTheme from './useTheme'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default function useFormComponent(props, context, dependencies)
{
  const componentName = context.name
  const { defaultClasses } = toRefs(context.data)

  // =============== INJECT ===============

  const { form$ } = useForm$(props, context)
  const { theme } = useTheme(props, context)
  
  // ============== COMPUTED ===============

  const mergedClasses = computed(() => {
    let classes = _.merge({},
      // Default component classes
      defaultClasses.value,

      // Theme / form level overwrites
      theme.value.classes[componentName.value] || {}
    )

    // Add form's addClasses
    classes = mergeComponentClasses(classes, form$.value.addClasses[componentName.value] || null)

    return classes
  })

  const classes = computed({
    get() {
      return mergedClasses.value
    },
    set(val) {
      schema.value.classes = val
    }
  })

  const components = computed(() => {
    return theme.value.components
  })

  const mainClass = computed(() => {
    return _.keys(defaultClasses.value)[0]
  })

  return {
    // Inject
    form$,
    theme,

    // Computed
    classes,
    components,
    mainClass,
  }
}
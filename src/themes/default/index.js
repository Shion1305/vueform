import Laraform from './components/Laraform'
import FormErrors from './components/FormErrors'
import FormMessages from './components/FormMessages'
import FormLanguageSelector from './components/FormLanguageSelector'
import FormLanguageSelectorTab from './components/FormLanguageSelectorTab'
import FormTabs from './components/FormTabs'
import FormTab from './components/FormTab'
import FormWizard from './components/FormWizard'
import FormWizardControls from './components/FormWizardControls'
import FormWizardFinish from './components/FormWizardFinish'
import FormWizardNext from './components/FormWizardNext'
import FormWizardPrevious from './components/FormWizardPrevious'
import FormWizardStep from './components/FormWizardStep'
import FormElements from './components/FormElements'
import FormButton from './components/FormButton'
import FormButtonAnchor from './components/FormButtonAnchor'
import FormButtonSubmit from './components/FormButtonSubmit'
import ElementLayout from './components/ElementLayout'
import ElementLabelFloating from './components/ElementLabelFloating'
import ElementLabel from './components/ElementLabel'
import ElementInfo from './components/ElementInfo'
import ElementDescription from './components/ElementDescription'
import ElementError from './components/ElementError'
import ElementMessage from './components/ElementMessage'
import ElementText from './components/ElementText'
import InputAddon from './components/InputAddon'

import Flatpickr from './components/wrappers/Flatpickr'
import Trix from './components/wrappers/Trix'

// import AddressElement from './components/elements/AddressElement'
// import ButtonsElement from './components/elements/ButtonsElement'
import CheckboxElement from './components/elements/CheckboxElement'
import CheckboxgroupElement from './components/elements/CheckboxgroupElement'
// import DateElement from './components/elements/DateElement'
// import DatetimeElement from './components/elements/DatetimeElement'
// import FileElement from './components/elements/FileElement'
import GroupElement from './components/elements/GroupElement'
import HiddenElement from './components/elements/HiddenElement'
import KeyElement from './components/elements/KeyElement'
import ListElement from './components/elements/ListElement'
// import LocationElement from './components/elements/LocationElement'
import MetaElement from './components/elements/MetaElement'
// import MultifileElement from './components/elements/MultifileElement'
// import MultiselectElement from './components/elements/MultiselectElement'
import ObjectElement from './components/elements/ObjectElement'
// import PasswordElement from './components/elements/PasswordElement'
import RadioElement from './components/elements/RadioElement'
import RadiogroupElement from './components/elements/RadiogroupElement'
// import SelectElement from './components/elements/SelectElement'
// import SliderElement from './components/elements/SliderElement'
// import StaticElement from './components/elements/StaticElement'
// import TagsElement from './components/elements/TagsElement'
import TextareaElement from './components/elements/TextareaElement'
import TextElement from './components/elements/TextElement'
// import TimeElement from './components/elements/TimeElement'
import ToggleElement from './components/elements/ToggleElement'
// import TrixElement from './components/elements/TrixElement'
import TTextareaElement from './components/elements/TTextareaElement'
import TTextElement from './components/elements/TTextElement'
// import TTrixElement from './components/elements/TTrixElement'

import CheckboxgroupSlotCheckbox from './components/elements/slots/CheckboxgroupSlotCheckbox'
import FileSlotProgress from './components/elements/slots/FileSlotProgress'
import MultiselectSlotNoOptions from './components/elements/slots/MultiselectSlotNoOptions'
import MultiselectSlotNoResult from './components/elements/slots/MultiselectSlotNoResult'
import MultiselectSlotOption from './components/elements/slots/MultiselectSlotOption'
import MultiselectSlotSelection from './components/elements/slots/MultiselectSlotSelection'
import MultiselectSlotTag from './components/elements/slots/MultiselectSlotTag'
import MultiselectSlotTagsSelection from './components/elements/slots/MultiselectSlotTagsSelection'
import RadiogroupSlotRadio from './components/elements/slots/RadiogroupSlotRadio'

import columns from './utils/columns'

const components = {
  Laraform,
  FormErrors,
  FormMessages,
  FormLanguageSelector,
  FormLanguageSelectorTab,
  FormTabs,
  FormTab,
  FormWizard,
  FormWizardControls,
  FormWizardFinish,
  FormWizardNext,
  FormWizardPrevious,
  FormWizardStep,
  FormElements,
  FormButton,
  FormButtonAnchor,
  FormButtonSubmit,
  ElementLayout,
  ElementLabelFloating,
  ElementLabel,
  ElementInfo,
  ElementDescription,
  ElementError,
  ElementMessage,
  ElementText,
  InputAddon,

  // Wrappers
  Flatpickr,
  Trix,

  // Element slots
  CheckboxgroupSlotCheckbox,
  FileSlotProgress,
  MultiselectSlotNoOptions,
  MultiselectSlotNoResult,
  MultiselectSlotOption,
  MultiselectSlotSelection,
  MultiselectSlotTag,
  MultiselectSlotTagsSelection,
  RadiogroupSlotRadio,
}

export default {
  components,
  elements: {
    // AddressElement,
    // ButtonsElement,
    CheckboxElement,
    CheckboxgroupElement,
    // DateElement,
    // DatetimeElement,
    // FileElement,
    GroupElement,
    HiddenElement,
    KeyElement,
    ListElement,
    // LocationElement,
    MetaElement,
    // MultifileElement,
    // MultiselectElement,
    ObjectElement,
    // PasswordElement,
    RadioElement,
    RadiogroupElement,
    // SelectElement,
    // SliderElement,
    // StaticElement,
    // TagsElement,
    TextareaElement,
    TextElement,
    // TimeElement,
    ToggleElement,
    // TrixElement,
    TTextareaElement,
    TTextElement,
    // TTrixElement,
  },
  classes: {
  },
  utils: {
    columns,
  },
}

export const core = {
  components,
  elements: {},
  classes: {}
}

export {
  TextElement,
}
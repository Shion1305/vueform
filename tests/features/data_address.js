import { createForm } from 'test-helpers'
import flushPromises from 'flush-promises'

export { submit, formatData, formatLoad } from './data'

export const data = function (elementType, elementName) {
  it('should have "data" as an object with values of children', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: el.value,
    })
  })

  it('should have "data" according to `formatData` if it is set', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          formatData(name, value) {
            return {
              custom: value
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      custom: el.value,
    })
  })
}

export const filtered = function(elementType, elementName) {
  it('should have `filtered` equal to available children filtered values', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.filtered).toStrictEqual({
      el: {
        address: null,
        address2: null,
        city: null,
        country: null,
        zip: null,
      }
    })
  })

  it('should have empty object as `filtered` if not available', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          conditions: [
            ['el2', 'value']
          ]
        },
        el2: {
          type: 'text',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.filtered).toStrictEqual({})
  })
}

export const load = function(elementType, elementName) {
  it('should load data to children on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let address = form.vm.el$('el.address')

    el.load({
      address: 'value'
    })

    expect(el.value.address).toStrictEqual('value')
    expect(address.dirty).toBe(false)
  })

  it('should should format data if "formatData" is "true" on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          formatLoad(value) {
            return Object.assign({}, value, {
              address: `pre-${value.address}`
            })
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load({
      address: 'value'
    }, true)
    
    expect(el.value).toStrictEqual({
      address: 'pre-value',
      address2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
    })
  })
}

export const update = function(elementType, elementName) {
  it('should load data to children on `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let address = form.vm.el$('el.address')

    el.update({
      address: 'value'
    })

    expect(el.value).toStrictEqual({
      address: 'value',
      address2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
    })
    expect(address.dirty).toBe(true)
  })
}

export const clear = function(elementType, elementName) {
  it('should clear children on `clear`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let address = form.vm.el$('el.address')

    el.load({
      address: 'value'
    })

    el.clear()

    expect(el.value).toStrictEqual({
      address: null,
      address2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
    })
    expect(address.dirty).toBe(true)
  })
}

export const reset = function(elementType, elementName) {
  it('should reset children on `reset`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          required: true,
        }
      }
    })

    let el = form.vm.el$('el')
    let address = form.vm.el$('el.address')

    address.validate()

    await flushPromises()

    expect(address.invalid).toBe(true)
    expect(address.validated).toBe(true)
    expect(address.value).toBe(null)

    el.reset()

    expect(address.invalid).toBe(false)
    expect(address.validated).toBe(false)
    expect(address.value).toBe(null)
  })
}
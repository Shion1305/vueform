import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change, setInstances } from 'test-helpers'

describe('Greater Than Rule', () => {
  it('should validate if the element\'s value is greater than an other field\'s if value is string', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    change(a, 'aaa')
    change(b, 'aa')

    expect(a.vm.invalid).toBe(false)

    change(a, 'aa')

    expect(a.vm.invalid).toBe(true)
  })

  it('should validate if the element\'s value is greater than an other field\'s if value is numeric', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'numeric|gt:b'
        },
        b: {
          type: 'text',
          rules: 'numeric'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    change(a, '5')
    change(b, '3')

    setTimeout(() => {
      expect(a.vm.invalid).toBe(false)

      change(a, '3')

      setTimeout(() => {
        expect(a.vm.invalid).toBe(true)

        done()
      }, 1)
    }, 1)
  })

  it('should validate if the element\'s value is greater than an other field\'s if value is array', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|gt:b',
          element: {
            type: 'text'
          }
        },
        b: {
          type: 'list',
          rules: 'array',
          element: {
            type: 'text'
          }
        },
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    let b = findAllComponents(form, { name: 'ListElement' }).at(1)

    setInstances(a, 5)
    setInstances(b, 3)

    LocalVue.nextTick(() => {
      a.vm.validate()

      expect(a.vm.invalid).toBe(false)

      setInstances(a, 3)

      LocalVue.nextTick(() => {
        a.vm.validate()

        expect(a.vm.invalid).toBe(true)

        done()
      })
    })
  })

  it('should watch for change in other field\'s value', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    LocalVue.nextTick(() => {
      change(a, 'aaa')
      change(b, 'aa')

      expect(a.vm.invalid).toBe(false)

      setTimeout(() => {
        change(b, 'aaaa')

        setTimeout(() => {
          expect(a.vm.invalid).toBe(true)

          done()
        }, 1)
      }, 1)

    })
  })

  it('should include other field\'s size in error message', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    change(b, 'aaaaa')
    change(a, 'aaa')

    expect(a.vm.invalid).toBe(true)
    expect(a.vm.error).toContain(5)
  })

  it('should watch other field\'s size in error message', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    change(b, 'aaaaa')
    change(a, 'aaa')

    expect(a.vm.invalid).toBe(true)
    expect(a.vm.error).toContain(5)

    change(b, 'aaaaaaa')

    LocalVue.nextTick(() => {
      expect(a.vm.error).toContain(7)

      done()
    })
  })
})
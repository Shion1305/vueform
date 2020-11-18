import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'
import flushPromises from 'flush-promises'

describe('Message Bag Service', () => {
  it('should render component `errors`', async () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()
    await flushPromises()

    expect(a.vm.messageBag.errors.length).toBe(2)
  })

  it('should prepend `errors`', async () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()
    await flushPromises()

    a.vm.messageBag.prepend('aaa')
    a.vm.messageBag.prepend('bbb')

    expect(a.vm.messageBag.errors.length).toBe(4)
    expect(a.vm.messageBag.errors[0]).toBe('bbb')
    expect(a.vm.messageBag.errors[1]).toBe('aaa')
  })

  it('should append `errors`', async () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()
    await flushPromises()

    a.vm.messageBag.append('aaa')
    a.vm.messageBag.append('bbb')

    expect(a.vm.messageBag.errors.length).toBe(4)
    expect(a.vm.messageBag.errors[2]).toBe('aaa')
    expect(a.vm.messageBag.errors[3]).toBe('bbb')
  })

  it('should prepend `messages`', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.prepend('aaa', 'message')
    a.vm.messageBag.prepend('bbb', 'message')

    expect(a.vm.messageBag.messages.length).toBe(2)
    expect(a.vm.messageBag.messages[0]).toBe('bbb')
    expect(a.vm.messageBag.messages[1]).toBe('aaa')
  })

  it('should append `messages`', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.append('aaa', 'message')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.messages.length).toBe(2)
    expect(a.vm.messageBag.messages[0]).toBe('aaa')
    expect(a.vm.messageBag.messages[1]).toBe('bbb')
  })

  it('should render first `error`', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()

    expect(a.vm.messageBag.error).toBe(a.vm.Validators[0].message)
  })

  it('should render first `message`', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.append('aaa', 'message')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.message).toBe('aaa')
  })

  it('should `clear` all', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.append('aaa')
    a.vm.messageBag.append('aaa', 'message')

    expect(a.vm.messageBag.errors.length).toBe(1)
    expect(a.vm.messageBag.messages.length).toBe(1)

    a.vm.messageBag.clear()

    expect(a.vm.messageBag.errors.length).toBe(0)
    expect(a.vm.messageBag.messages.length).toBe(0)
  })

  it('should `clear` errors', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.append('aaa')
    a.vm.messageBag.append('aaa', 'message')

    expect(a.vm.messageBag.errors.length).toBe(1)
    expect(a.vm.messageBag.messages.length).toBe(1)

    a.vm.messageBag.clear('errors')

    expect(a.vm.messageBag.errors.length).toBe(0)
    expect(a.vm.messageBag.messages.length).toBe(1)
  })

  it('should `clear` messages', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.append('aaa')
    a.vm.messageBag.append('aaa', 'message')

    expect(a.vm.messageBag.errors.length).toBe(1)
    expect(a.vm.messageBag.messages.length).toBe(1)

    a.vm.messageBag.clear('messages')

    expect(a.vm.messageBag.errors.length).toBe(1)
    expect(a.vm.messageBag.messages.length).toBe(0)
  })

  it('should `clearBefore` all', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.prepend('aaa')
    a.vm.messageBag.prepend('aaa', 'message')

    expect(a.vm.messageBag.prepends.errors.length).toBe(1)
    expect(a.vm.messageBag.prepends.messages.length).toBe(1)

    a.vm.messageBag.clearBefore()

    expect(a.vm.messageBag.prepends.errors.length).toBe(0)
    expect(a.vm.messageBag.prepends.messages.length).toBe(0)
  })

  it('should `clearBefore` errors', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.prepend('aaa')
    a.vm.messageBag.prepend('aaa', 'message')

    expect(a.vm.messageBag.prepends.errors.length).toBe(1)
    expect(a.vm.messageBag.prepends.messages.length).toBe(1)

    a.vm.messageBag.clearBefore('errors')

    expect(a.vm.messageBag.prepends.errors.length).toBe(0)
    expect(a.vm.messageBag.prepends.messages.length).toBe(1)
  })

  it('should `clearBefore` messages', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.prepend('aaa')
    a.vm.messageBag.prepend('aaa', 'message')

    expect(a.vm.messageBag.prepends.errors.length).toBe(1)
    expect(a.vm.messageBag.prepends.messages.length).toBe(1)

    a.vm.messageBag.clearBefore('messages')

    expect(a.vm.messageBag.prepends.errors.length).toBe(1)
    expect(a.vm.messageBag.prepends.messages.length).toBe(0)
  })

  it('should `clearAfter` all', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.append('bbb')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.appends.errors.length).toBe(1)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)

    a.vm.messageBag.clearAfter()

    expect(a.vm.messageBag.appends.errors.length).toBe(0)
    expect(a.vm.messageBag.appends.messages.length).toBe(0)
  })

  it('should `clearAfter` errors', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.append('bbb')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.appends.errors.length).toBe(1)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)

    a.vm.messageBag.clearAfter('errors')

    expect(a.vm.messageBag.appends.errors.length).toBe(0)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)
  })

  it('should `clearAfter` messages', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.append('bbb')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.appends.errors.length).toBe(1)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)

    a.vm.messageBag.clearAfter('errors')

    expect(a.vm.messageBag.appends.errors.length).toBe(0)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)
  })

  it('should `clearAfter` errors', () => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.messageBag.append('bbb')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.appends.errors.length).toBe(1)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)

    a.vm.messageBag.clearAfter('messages')

    expect(a.vm.messageBag.appends.errors.length).toBe(1)
    expect(a.vm.messageBag.appends.messages.length).toBe(0)
  })
})
import Lance from '@/components/Lance'
import { mount } from '@vue/test-utils'

test('não aceita lance com valor menor do que zero', () => {
  const wrapper = mount(Lance)
  const input = wrapper.find('input')
  input.setValue(-100)
  const lanceEmitidos = wrapper.emitted('novo-lance')
  wrapper.trigger('submit')
  expect(lanceEmitidos).toBeUndefined()
})

test('emite um lance quando o valor é maior do que zero', () => {
  const wrapper = mount(Lance)
  const input = wrapper.find('input')
  input.setValue(100)
  wrapper.trigger('submit')
  const lanceEmitidos = wrapper.emitted('novo-lance')
  expect(lanceEmitidos).toHaveLength(1)
})

test('emite o valor esperado de um lance válido', () => {
  const wrapper = mount(Lance)
  const input = wrapper.find('input')
  input.setValue(100)
  wrapper.trigger('submit')
  const lanceEmitidos = wrapper.emitted('novo-lance')
  const lance = +lanceEmitidos[0][0]
  expect(lance).toBe(100)
})


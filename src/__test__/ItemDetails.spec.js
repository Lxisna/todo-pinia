import { mount } from '@vue/test-utils'
import ItemEdit from '../components/ItemEdit.vue'
import { expect, test, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

const testingPinia = createTestingPinia({ createSpy: vi.fn })

// const wrapper = mount(ItemEdit)
const wrapper = mount(ItemEdit, {
  global: { plugins: [testingPinia] },
  props: {}
})

test('testing GuessAge component props', async () => {
  expect(wrapper.props.id).toContain('2')
})

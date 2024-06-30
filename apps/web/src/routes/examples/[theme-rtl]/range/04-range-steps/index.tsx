/**
 * title: Steps
 * description: Use the step attribute on the range component to set the increment with which the values will change.
 * height: 100
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Range } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const value = useSignal('2.5')

  return (
    <>
      <label for="default-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        Range ({value.value})
      </label>
      <Range id="default-range" min={0} max={5} step={0.5} bind:value={value} />
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}

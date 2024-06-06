/**
 * title: Input fields
 * description: Use the following examples to apply a small, default or large size for the input fields.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Input } from 'flowbite-qwik'
import { staticGenerateHandler } from '../../layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const val = useSignal('')
  return (
    <>
      <div class="p-3">
        <h2 class="text-2xl font-semibold my-3">Sizes</h2>
        <p class="text-xl">Value : {val.value}</p>
        <div class="flex gap-3">
          <Input bind:value={val} label="Small" placeholder="enter your name" size="sm" />
          <Input bind:value={val} label="Medium" placeholder="enter your name" size="md" />
          <Input bind:value={val} label="Large" placeholder="enter your name" size="lg" />
        </div>
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
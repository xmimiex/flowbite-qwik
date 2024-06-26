/**
 * title: Background image
 * description: Use this jumbotron to apply a background image with a darkening opacity effect to improve readability.
 * height: 400
 */

import { component$ } from '@builder.io/qwik'
import { Jumbotron, Button } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <Jumbotron class="bg-gray-700 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-center bg-no-repeat bg-blend-multiply dark:bg-gray-700">
      <Jumbotron.Heading tag="h2" class="text-white">
        We invest in the world’s potential
      </Jumbotron.Heading>
      <Jumbotron.SubText class="text-white">
        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
      </Jumbotron.SubText>
      <div class="flex justify-center gap-2">
        <Button>Get started</Button>
        <Button color="alternative">Learn more</Button>
      </div>
    </Jumbotron>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}

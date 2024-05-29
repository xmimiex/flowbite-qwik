import { component$ } from '@builder.io/qwik'
import { Button } from '~/components/Button/Button'
import { Jumbotron } from '~/components/Jumbotron/Jumbotron'
import { JumbotronHeading } from '~/components/Jumbotron/JumbotronHeading'
import { JumbotronSubText } from '~/components/Jumbotron/JumbotronSubText'

export default component$(() => {
  return (
    <div>
      <h2 class="text-2xl font-semibold my-3">Default jumbotron</h2>
      <Jumbotron>
        <JumbotronHeading tag="h2">We invest in the world’s potential</JumbotronHeading>
        <JumbotronSubText>
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </JumbotronSubText>
        <div class="flex gap-2 justify-center">
          <Button>Get started</Button>
          <Button color="alternative">Learn more</Button>
        </div>
      </Jumbotron>

      <h2 class="text-2xl font-semibold my-3">Align left jumbotron</h2>
      <Jumbotron align="left">
        <JumbotronHeading tag="h2">We invest in the world’s potential</JumbotronHeading>
        <JumbotronSubText>
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </JumbotronSubText>
        <div class="flex gap-2">
          <Button>Get started</Button>
          <Button color="alternative">Learn more</Button>
        </div>
      </Jumbotron>

      <h2 class="text-2xl font-semibold my-3">Jumbotron with background image</h2>
      <Jumbotron class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] dark:bg-gray-700 bg-gray-700 bg-blend-multiply">
        <JumbotronHeading tag="h2">We invest in the world’s potential</JumbotronHeading>
        <JumbotronSubText>
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </JumbotronSubText>
        <div class="flex gap-2 justify-center">
          <Button>Get started</Button>
          <Button color="alternative">Learn more</Button>
        </div>
      </Jumbotron>
    </div>
  )
})

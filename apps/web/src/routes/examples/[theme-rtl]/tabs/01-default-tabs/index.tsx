/**
 * title: Default Tabs
 * description: Use the following default tabs component example to show a list of links that the user can navigate from on your website.
 * height: 400
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Tabs } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Tabs>
      <Tabs.Tab title="First">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur
        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
      </Tabs.Tab>
      <Tabs.Tab title="Second">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam
        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
      </Tabs.Tab>
      <Tabs.Tab title="Third">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque
        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
      </Tabs.Tab>
      <Tabs.Tab title="Fourth" disabled>
        Lorem ipsum dolor...
      </Tabs.Tab>
    </Tabs>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}

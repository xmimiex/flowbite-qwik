import { Button } from 'flowbite-qwik'
import { component$, PropsOf } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { componentsNaming } from '~/components/homepage/ComponentSection/components'
import { IconArrowUpRightFromSquareOutline } from 'flowbite-qwik-icons'

export const ComponentsSection = component$(() => {
  return (
    <section>
      <div class="max-w-8xl mx-auto flex flex-col gap-8 px-4 py-8 sm:gap-12 lg:px-20 lg:pt-24">
        <div class="flex flex-col items-center gap-4 sm:gap-4">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">Qwik UI Components</h2>
          <p class="mx-auto max-w-3xl text-center text-lg font-normal text-gray-500 dark:text-gray-400">
            Explore the entire collection of{' '}
            <span class="font-medium text-gray-900 dark:text-white">over {Object.keys(componentsNaming).length} open-source UI components</span> and
            interactive elements built with Qwik, Flowbite and Tailwind CSS
          </p>
        </div>
        <div class="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
          {Object.keys(componentsNaming).map((name, i) => {
            return <>{i < 18 && <ComponentCard key={name} name={name} {...componentsNaming[name]} />}</>
          })}
        </div>
        <div class="mb-4 flex w-full justify-center text-center">
          <Button tag={Link} href="/docs/components/accordion" color="light">
            View all components
          </Button>
        </div>
      </div>
    </section>
  )
})

type ComponentCardProps = PropsOf<'div'> & {
  name: string
  folder: string
  img: string
  doc: string
}

const ComponentCard = component$<ComponentCardProps>(({ folder, name, img, doc }) => {
  return (
    <Link
      href={`https://flowbite-qwik.com/docs/${folder}/${doc}`}
      class="dark:hover:shadow-lg-light flex flex-col rounded-lg border border-gray-200 bg-white p-0 text-gray-500 shadow-none hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600"
    >
      <div class="flex items-center justify-between rounded-t-md border-b border-gray-200 bg-gray-50 px-5 py-2.5 dark:border-gray-700 dark:bg-gray-700">
        <span class="text-base font-medium text-gray-900 dark:text-white">{name}</span>
        <span class="text-gray-500 dark:text-gray-400">
          <IconArrowUpRightFromSquareOutline />
        </span>
      </div>
      <div class="flex h-52 items-center justify-center">
        <div class="relative h-4/6 w-56 dark:hidden">
          <img loading="lazy" decoding="async" src={`https://flowbite.s3.amazonaws.com/github/${img}.jpg`} alt={`${name} component thumbnail`} />
        </div>
        <div class="relative hidden h-4/6 w-56 dark:block">
          <img
            loading="lazy"
            decoding="async"
            src={`https://flowbite.s3.amazonaws.com/github/${img}.jpg`}
            alt={`${name} dark mode component thumbnail`}
          />
        </div>
      </div>
    </Link>
  )
})

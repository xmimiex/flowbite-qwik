/**
 * title: With custom button
 * description: Customize the pagination buttons by passing a custom button component.
 */

import { component$, useSignal, Slot } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Pagination, PaginationButtonProps } from 'flowbite-qwik'
import { twMerge } from 'tailwind-merge'

const CustomButton = component$<PaginationButtonProps>(({ active, ...props }) => {
  return (
    <button
      type="button"
      class={twMerge(
        'h-10 w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
        active &&
          'bg-orange-500 text-white dark:bg-orange-500 dark:text-white hover:bg-orange-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white',
      )}
      {...props}
    >
      <Slot />
    </button>
  )
})
export default component$(() => {
  const currentPage = useSignal(1)

  return (
    <>
      <div class="p-3 flex text-center gap-3">
        <Pagination totalPages={100} currentPage={currentPage} paginationButton={CustomButton} />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}

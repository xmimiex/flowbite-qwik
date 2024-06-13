/**
 * title: Scrollable carousel
 * description: Use this example using the prop "scrollable" to scroll inside the carousel
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Carousel, CarouselSlice } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        scrollable
        slideAuto={false}
        onSlideChanged$={() => {
          console.log('changed !')
        }}
      >
        <CarouselSlice>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        </CarouselSlice>
        <CarouselSlice>
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        </CarouselSlice>
        <CarouselSlice>
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        </CarouselSlice>
        <CarouselSlice>
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        </CarouselSlice>
        <CarouselSlice>
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </CarouselSlice>
      </Carousel>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}

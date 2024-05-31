import { PropsOf, component$, useComputed$, useSignal, useTask$ } from '@builder.io/qwik'
import { server$ } from '@builder.io/qwik-city'
import fs from 'fs'
import { CodeBlock } from '../CodeBlock/CodeBlock'
import { Button } from '../Button/Button'
import { IconDesktopPcOutline, IconMobilePhoneOutline, IconTabletOutline } from '../Icon'
import { useDark } from '~/composables/use-dark'
import { useMediaQuery } from '~/composables/use-media-query'
import { Spinner } from '~/components/Spinner/Spinner'
import { isBrowser } from '@builder.io/qwik/build'

type PreviewProps = PropsOf<'iframe'> & {
  url: string
}

type PreviewDisplaySize = 'mobile' | 'tablet' | 'desktop'

export const getExampleCode = server$(function (url: string) {
  const rootDir = process.cwd()
  const exampleUrl = `${rootDir}/src/routes${url}/index@examples.tsx`
  return fs.readFileSync(exampleUrl, 'utf-8')
})

export const Preview = component$<PreviewProps>(({ url, class: classNames, ...props }) => {
  const { isDark } = useDark()

  const desktopScreen = useMediaQuery('(min-width: 1024px)')
  const tabletScreen = useMediaQuery('(min-width: 768px)')
  const displaySize = useSignal<PreviewDisplaySize | undefined>()

  const iframe = useSignal<HTMLIFrameElement>()

  const code = useComputed$(() => getExampleCode(url))

  useTask$(({ track }) => {
    track(() => desktopScreen.value)
    track(() => tabletScreen.value)

    if (desktopScreen.value === null && tabletScreen.value === null) return
    displaySize.value = desktopScreen.value ? 'desktop' : tabletScreen.value ? 'tablet' : 'mobile'
  })

  useTask$(() => {
    if (isBrowser) {
      displaySize.value = desktopScreen.value ? 'desktop' : tabletScreen.value ? 'tablet' : 'mobile'
    }
  })

  useTask$(({ track }) => {
    track(() => isDark.value)

    iframe.value?.contentWindow?.location.reload()
  })

  return (
    <div>
      <ul class="hidden lg:flex p-4 gap-3 justify-center bg-gray-100 w-full border border-gray-200 rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
        <li>
          <Button color="light" square onClick$={() => (displaySize.value = 'mobile')} title="Toggle mobile view">
            <IconMobilePhoneOutline />
          </Button>
        </li>
        <li>
          <Button color="light" square onClick$={() => (displaySize.value = 'tablet')} title="Toggle tablet view">
            <IconTabletOutline />
          </Button>
        </li>
        <li>
          <Button color="light" square onClick$={() => (displaySize.value = 'desktop')} title="Toggle desktop view">
            <IconDesktopPcOutline />
          </Button>
        </li>
      </ul>
      <div class="flex p-0 bg-white border-gray-200 bg-gradient-to-r code-preview dark:bg-gray-900 border-x dark:border-gray-600">
        <div
          class={[
            'w-full mx-auto p-5',
            {
              'max-w-md': displaySize.value === 'mobile',
              'max-w-screen-md': displaySize.value === 'tablet',
              'max-w-screen-lg': displaySize.value === 'desktop',
            },
          ]}
        >
          {displaySize.value ? (
            <iframe ref={iframe} src={url} {...props} class={['w-full', classNames]} />
          ) : (
            <div class="flex justify-center w-full">{<Spinner size="6" />}</div>
          )}
        </div>
      </div>

      <div class="relative">
        <CodeBlock content={code.value} language="tsx" />
      </div>
    </div>
  )
})
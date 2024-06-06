import './global.css'
import { component$, createContextId, useContextProvider, useSignal, Signal, useContext, useStyles$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city'
import { RouterHead } from '~/components/RouterHead/RouterHead'
import { FlowbiteProvider, FlowbiteProviderHeader } from 'flowbite-qwik'
import type { ToastPosition } from 'flowbite-qwik'

export const toastPositionContext = createContextId<Signal<ToastPosition>>('toast-position-context')

export default component$(() => {
  useContextProvider(toastPositionContext, useSignal('top-right'))
  const toastPosition = useContext(toastPositionContext)

  useStyles$(`
    .dark {
      color-scheme: dark;
      background: #111827;
    }
    .light {
      color-scheme: light;
      background: #fff;
    }
  `)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
        <FlowbiteProviderHeader />
      </head>
      <body lang="fr">
        <FlowbiteProvider toastPosition={toastPosition.value} theme="blue">
          <RouterOutlet />
        </FlowbiteProvider>
      </body>
    </QwikCityProvider>
  )
})
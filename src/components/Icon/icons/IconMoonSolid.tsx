import { IconProps } from '@qwikest/icons'
import { FlMoonSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconMoonSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})
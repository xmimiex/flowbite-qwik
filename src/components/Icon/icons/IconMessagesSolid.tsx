import { IconProps } from '@qwikest/icons'
import { FlMessagesSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconMessagesSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})
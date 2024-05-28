import { IconProps } from '@qwikest/icons'
import { FlMapPinOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconMapPinOutline = component$<IconProps>(({ class: classNames, ...props }) => {
  return (
    <span class={classNames}>
      <QwikestIcon {...props} />
    </span>
  )
})
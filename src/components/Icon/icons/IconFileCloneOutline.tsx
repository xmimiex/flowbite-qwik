import { IconProps } from '@qwikest/icons'
import { FlFileCloneOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconFileCloneOutline = component$<IconProps>(({ class: classNames, ...props }) => {
  return (
    <span class={classNames}>
      <QwikestIcon {...props} />
    </span>
  )
})
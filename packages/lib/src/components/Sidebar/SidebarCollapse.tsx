import { Component, FunctionComponent, PropsOf, Slot, component$, useId } from '@builder.io/qwik'
import { InnerSidebarItem, SidebarItem } from './SidebarItem'
import type { IconProps } from 'flowbite-qwik-icons'
import { IconAngleDownSolid } from 'flowbite-qwik-icons'
import { SidebarItemGroup } from './SidebarItemGroup'
import { getChild } from '~/utils/children-inspector'
import { useToggle } from '~/composables'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type SidebarCollapseProps = PropsOf<'div'> & {
  label: string
  border?: boolean
  icon?: Component<IconProps>
  opened?: boolean
}

export const SidebarCollapse: FunctionComponent<SidebarCollapseProps> = ({ children, ...attrs }) => {
  getChild(children, [
    {
      component: SidebarItem,
      foundComponentCallback: (child) => {
        child.props.isCollapse = true
      },
    },
  ])

  return <InternalSidebarCollapse {...attrs}>{children}</InternalSidebarCollapse>
}

export const InternalSidebarCollapse = component$<SidebarCollapseProps>(({ label, opened = false, icon, class: className }) => {
  const { value: isOpen, toggle$ } = useToggle(opened)
  const id = useId()

  return (
    <li>
      <InnerSidebarItem
        icon={icon}
        tag="button"
        onClick$={toggle$}
        id={`flowbite-sidebar-collapse-${id}`}
        class={twMerge('font-medium', clsx(className))}
      >
        {label}
        <IconAngleDownSolid
          q:slot="suffix"
          class={{
            'rotate-180 transform': isOpen.value,
          }}
        />
      </InnerSidebarItem>
      <SidebarItemGroup
        aria-labelledby={`flowbite-sidebar-collapse-${id}`}
        class={['space-y-2 overflow-hidden py-2 duration-300', isOpen.value ? 'block' : 'hidden']}
      >
        <Slot />
      </SidebarItemGroup>
    </li>
  )
})

import { PropsOf, Slot, component$, useComputed$, Component } from '@builder.io/qwik'
import { useBreadcrumbItemClasses } from './composables/use-breadcrumb-item-classes'
import { IconProps } from '@qwikest/icons'
import { IconArrowRightOutline, IconHomeOutline } from '../Icon'

type BreadcrumbItemProps = PropsOf<'a'> & {
  home?: boolean
  href?: string
  homeIcon?: Component<IconProps>
  arrowIcon?: Component<IconProps>
}

export const BreadcrumbItem = component$<BreadcrumbItemProps>(({ href, home = false, homeIcon: HomeIcon, arrowIcon: ArrowIcon }) => {
  const Tag = href ? 'a' : 'span'

  const { breadcrumbItemClasses } = useBreadcrumbItemClasses(useComputed$(() => href))

  return (
    <li class="inline-flex items-center">
      {!home && (!!ArrowIcon ? <ArrowIcon class="w-3 h-3 text-gray-400 mx-1" /> : <IconArrowRightOutline class="w-3 h-3 text-gray-400 ml-1 mr-2" />)}
      <Tag href={href} class={breadcrumbItemClasses.value}>
        {!!HomeIcon && <HomeIcon class="w-3 h-3 text-gray-400 me-2.5" />}
        {home && !Boolean(HomeIcon) && <IconHomeOutline class="w-3 h-3 me-2.5" />}
        <Slot />
      </Tag>
    </li>
  )
})
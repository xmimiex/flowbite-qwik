import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <ul>
      <li>
        <a href="/button">Button</a>
      </li>
      <li>
        <a href="/spinner">Spinner</a>
      </li>
      <li>
        <a href="/tabs">Tabs</a>
      </li>
      <li>
        <a href="/toast">Toast</a>
      </li>
    </ul>
  )
})

# Component boilerplate

```tsx
import type { PropsWithChildren } from 'react'

import styles from './ComponentName.module.css'

export interface ComponentNameProps {
  name: string
}

function ComponentName(props: PropsWithChildren<ComponentNameProps>) {
  return (
    <div className={ styles.container }>
      <h1>Name: { props.name }</h1>
      { props.children }
    </div>
  )
}

export default ComponentName
```

```css
.container {
  background: var(--color-accent);
}
```

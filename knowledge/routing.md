# Routing

```tsx
import { Link, Route, Switch } from 'wouter'

import RouterNestedView from '#views/RouterNested.tsx'
import RouterProtectedView from '#views/RouterProtected.tsx'

import styles from './Router.module.css'

function RouterView() {
  return (
    <>
      <p>An example of nested route with parameter, and a protected route.</p>
      <nav className={ styles.navigation }>
        <Link href="/nested/12">Nested</Link>
        <Link href="/protected">Protected</Link>
      </nav>
      <!-- PARENT `Route` element must have `nest` attribute! -->
      <Switch>
        <Route path="/protected" component={ RouterProtectedView } />
        <Route path="/nested/:id" component={ RouterNestedView } />
        <Route path="/">Click on a link...</Route>
      </Switch>
    </>
  ) 
}

export default RouterView
```

## RouterNestedView

```tsx
import { useRoute } from 'wouter'

function RouterNestedView() {
  const [ match, params ] = useRoute('/nested/:id')

  if (!match) {
    return null
  }

  const id = params.id

  return (
    <>
      <em>Nested route with parameter: { id }</em>
    </>
  ) 
}

export default RouterNestedView
```

## RouterProtectedView

```tsx
import { useLocation, Redirect } from 'wouter'

import { useCurrentUser } from '#hooks/useCurrentUser.ts'
import { isAllowed } from '#utilities.ts'

function RouterProtectedView() {
  const [ location ] = useLocation()
  const user = useCurrentUser()

  if (!isAllowed(user, location)) {
    return <Redirect to="/" />
  }

  return (
    <>
      Protected route. Change availability by modifying "useCurrentUser.ts".
    </>
  ) 
}

export default RouterProtectedView
```

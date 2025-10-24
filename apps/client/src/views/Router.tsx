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
      <Switch>
        <Route path="/protected" component={ RouterProtectedView } />
        <Route path="/nested/:id" component={ RouterNestedView } />
        <Route path="/">Click on a link...</Route>
      </Switch>
    </>
  ) 
}

export default RouterView

import { Link, Route, Switch } from 'wouter'

import GraphQLView from '#views/GraphQL.tsx'
import HomeView from '#views/Home.tsx'
import MUIView from '#views/MUI.tsx'
import RestAPIView from '#views/RestAPI.tsx'
import RouterView from '#views/Router.tsx'
import StateView from '#views/State.tsx'

import styles from './App.module.css'

function App() {
  return (
    <>
      <header className={ styles.header }>
        <h1 className={ styles.heading }>deepboiler</h1>
        <nav className={ styles.navigation }>
          <Link href="/">Home</Link>
          <Link href="/rest-api">REST API</Link>
          <Link href="/graphql">GraphQL</Link>
          <Link href="/router">Router</Link>
          <Link href="/mui">MUI</Link>
          <Link href="/state">State</Link>
        </nav>
      </header>
      <main className={ styles.container }>
        <Switch>
          <Route path="/graphql" component={ GraphQLView } />
          <Route path="/mui" component={ MUIView } />
          <Route path="/rest-api" component={ RestAPIView } />
          <Route path="/router" component={ RouterView } nest />
          <Route path="/state" component={ StateView } />
          <Route path="/" component= { HomeView } />
          <Route>404</Route>
        </Switch>
      </main>
    </>
  )
}

export default App

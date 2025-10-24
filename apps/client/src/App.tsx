import { Link, Route, Switch } from 'wouter'

import HomeView from '#views/Home.tsx'
import RestAPIView from '#views/RestAPI.tsx'
import GraphQLView from '#views/GraphQL.tsx'

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
        </nav>
      </header>
      <main className={ styles.container }>
        <Switch>
          <Route path="graphql" component={ GraphQLView } />
          <Route path="rest-api" component={ RestAPIView } />
          <Route path="/" component= { HomeView } />
        </Switch>
      </main>
    </>
  )
}

export default App

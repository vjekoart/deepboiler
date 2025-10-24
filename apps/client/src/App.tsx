import { Link, Route, Switch } from 'wouter'

import HomeView from '#views/Home.tsx'
import AnotherPageView from '#views/AnotherPage.tsx'

import styles from './App.module.css'

function App() {
  return (
    <>
      <header className={ styles.header }>
        <h1 className={ styles.heading }>deepboiler</h1>
        <nav className={ styles.navigation }>
          <Link href="/">Home</Link>
          <Link href="/another-page">Another page</Link>
        </nav>
      </header>
      <main className={ styles.container }>
        <Switch>
          <Route path="/another-page" component={ AnotherPageView } />
          <Route path="/" component= { HomeView } />
          <Route>404</Route>
        </Switch>
      </main>
    </>
  )
}

export default App

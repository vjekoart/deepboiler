import type { PropsWithChildren } from 'react'

import styles from './BoilerDummy.module.css'

function BoilerDummy(props: PropsWithChildren<{ name: string }>) {
  return (
    <div className={ styles.container }>
      <h1>Name: { props.name }</h1>
      { props.children }
    </div>
  )
}

export default BoilerDummy

import type { PropsWithChildren } from 'react'
import { Button, type ButtonProps } from '@mui/material'

import styles from './BoilerButton.module.css'

/**
 * Custom styling: import styles from module CSS file, use `className` on MUI element, have strongly specific CSS selectors to override
 * Props: import MUI type *Props for the component, use PropsWithChildren if needed, pass props to MUI element with `{ ...props }`
 */
function BoilerButton(props: PropsWithChildren<ButtonProps>) {
  return (
    <Button variant="contained" className={ styles.button } { ...props }>{ props.children }</Button>
  )
}

export default BoilerButton

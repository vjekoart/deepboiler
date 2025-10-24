import { useReducer, type FormEvent, type JSX } from 'react'

import type { ModelItem } from '#models.ts'
import { itemsReducer, type ItemsReducerAction } from '#reducers/itemsReducer.ts'
import BoilerButton from '#components/BoilerButton.tsx'

import styles from './State.module.css'

function StateView() {
  const [ items, dispatch ] = useReducer<Array<ModelItem>, [ItemsReducerAction]>(itemsReducer, [])

  const handleItemCreate = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    const formData = new FormData(ev.currentTarget)
    const formObject = Object.fromEntries(formData.entries())

    dispatch({
      type: 'created',
      name: formObject.itemName.toString(),
    })
  }

  const handleItemDelete = (id: number) => dispatch({
    type: 'deleted',
    id,
  })

  const renderItems = () => {
    const list: Array<JSX.Element> = []

    items.forEach(item => {
      list.push(
        <li key={ item.id }>
          { item.name }
          <BoilerButton type="button" onClick={ () => { handleItemDelete(item.id) } }>Delete</BoilerButton>
        </li>
      )
    })

    return list
  }

  return (
    <form onSubmit={ handleItemCreate }>
      <ul className={ styles.list }>
        { renderItems() }
      </ul>
      <div className={ styles.itemContainer }>        
        <label htmlFor="item-name">Item name:</label>
        <input id="item-name" name="itemName" defaultValue="Cool name" type="text" />
        <BoilerButton type="submit">Add</BoilerButton>
      </div>
    </form>
  )
}

export default StateView

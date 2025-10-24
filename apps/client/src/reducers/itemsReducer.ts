import type { ModelItem } from '#models.ts'

export interface ItemsReducerAction {
  type: string
  id?: number
  name?: string
}

export function itemsReducer(items: Array<ModelItem>, action: ItemsReducerAction): Array<ModelItem> {
  switch (action.type) {
    case 'created':
      if (typeof action.name !== 'string') {
        throw new Error('Cannot create a new item without a name!')
      }

      return [
        ...items,
        {
          id: items.length + 1,
          name: action.name,
        }
      ]

    case 'deleted':
      return items.filter(item => item.id !== action.id)

    default:
      throw new Error(`Unsupported action ${ action.type }!`)
  }
}

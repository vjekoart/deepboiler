# GraphQL

```tsx
import { useEffect } from 'react'
import type { ModelDummy } from '#models.ts'
import { graphRequest } from '#utilities.ts'

function GraphQLView() {
  const showcase = async () => {
    const all = await graphRequest<Array<ModelDummy>>('{ getAll { id uid title } }')
    console.log('1. List all', all)

    const single = await graphRequest<Array<ModelDummy>>('{ getById(id: 1) { id uid title } }')
    console.log('2. Retrieve single', single)

    const newItem = await graphRequest<ModelDummy>('mutation { create (uid: "new-kid", title: "New Kid") { id } }')
    console.log('3. Create new', newItem)

    const createdAll = await graphRequest<Array<ModelDummy>>('{ getAll { id uid title } }')
    console.log('4. List all after create action', createdAll)

    const updatedItem = await graphRequest<Array<ModelDummy>>(`mutation { updateById(id: ${ newItem.data?.create.id }) }`)
    console.log('5. Update the latest item', updatedItem)

    const deleteResponse = await graphRequest<Array<ModelDummy>>(`mutation { deleteById(id: ${ newItem.data?.create.id }) }`)
    console.log('6. Delete the latest item', deleteResponse)

    const finalAll = await graphRequest<Array<ModelDummy>>('{ getAll { id uid title } }')
    console.log('7. List all', finalAll)
    
    const wrongDeleteResponse = await graphRequest<Array<ModelDummy>>('mutation { deleteById(id: 700) }')
    console.log('8. Wrong delete', wrongDeleteResponse)
  }

  useEffect(() => {
    showcase()
  }, [])

  return (
    <>
      An example of CRUD GraphQL queries. Check out both console and network inspector.
    </>
  ) 
}

export default GraphQLView
```

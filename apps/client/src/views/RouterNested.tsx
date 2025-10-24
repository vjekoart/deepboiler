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

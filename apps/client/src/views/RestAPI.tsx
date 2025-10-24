import { useEffect } from 'react'
import type { ModelDummy } from '#models.ts'
import { apiRequest } from '#utilities.ts'

function RestAPIView() {
  const showcase = async () => {
    console.log('1. List all', await apiRequest('rest-api'))
    console.log('2. List one', await apiRequest('rest-api/1'))

    const newItem = await apiRequest<ModelDummy>('rest-api', 'POST', { uid: 'new-kid', title: 'New kid' })

    console.log('3. Create new', newItem)
    console.log('4. Retrieve all', await apiRequest('rest-api'))
    console.log('5. Retrieve new', await apiRequest(`rest-api/${ newItem.id }`))
    console.log('6. Update new', await apiRequest(`rest-api/${ newItem.id }`, 'PUT', { uid: 'newcomer' }))
    console.log('7. Retrieve updated', await apiRequest(`rest-api/${ newItem.id }`))
    console.log('8. Delete new', await apiRequest(`rest-api/${ newItem.id }`, 'DELETE'))
    console.log('9. Retrieve all', await apiRequest('rest-api'))
    console.log('10. Wrong delete', await apiRequest('rest-api/500', 'DELETE'))
  }

  useEffect(() => {
    showcase()
  }, [])

  return (
    <>
      REST API View. Check out the console.
    </>
  )
}

export default RestAPIView

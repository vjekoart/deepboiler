import { useState } from 'react'

import type { ModelUser } from '#models.ts'

export function useCurrentUser() {
  const [ user ] = useState<ModelUser>({ id: 1, authorized: true })
  
  return user
}

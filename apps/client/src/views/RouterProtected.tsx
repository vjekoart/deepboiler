import { useLocation, Redirect } from 'wouter'

import { useCurrentUser } from '#hooks/useCurrentUser.ts'
import { isAllowed } from '#utilities.ts'

function RouterProtectedView() {
  const [ location ] = useLocation()
  const user = useCurrentUser()

  if (!isAllowed(user, location)) {
    return <Redirect to="/" />
  }

  return (
    <>
      Protected route. Change availability by modifying "useCurrentUser.ts".
    </>
  ) 
}

export default RouterProtectedView

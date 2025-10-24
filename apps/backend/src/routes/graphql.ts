import { Router } from 'express'
import { createHandler } from 'graphql-http/lib/use/express'

import { schema, rootValue } from '#controllers/graphql.js'

const router = Router()
const handler = createHandler({
  schema,
  rootValue,
})

router.all('/', handler)

export default router

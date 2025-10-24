import express from 'express'
import cors from 'cors'

import { errorHandler } from '#middleware.js'
import graphRouter from '#routes/graphql.js'
import restRouter from '#routes/rest-api.js'

const app = express()
const port = process.env.PORT ?? '9001'

app.use(cors())
app.use(express.json())

app.use('/graphql', graphRouter)
app.use('/rest-api', restRouter)
app.get('/', (req, res) => res.status(200).send('Hello!'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Backend service listening on port '${port}'...`)
})

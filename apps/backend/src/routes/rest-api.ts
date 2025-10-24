import { Router } from 'express'
import { getById, getAll, createOne, updateOne, deleteOne } from '#controllers/rest-api.js'

const router = Router()

router.get('/:itemId', getById)
router.get('/', getAll)
router.post('/', createOne)
router.put('/:itemId', updateOne)
router.delete('/:itemId', deleteOne)

export default router

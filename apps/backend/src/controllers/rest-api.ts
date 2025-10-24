import type { Request, Response } from 'express'

import { dummyCollection } from '#models.js'

export const getById = async (req: Request, res: Response) => {
  const itemId = parseInt(req.params.itemId)
  const target = dummyCollection.find(el => el.id === itemId)

  if (!target) {
    throw new Error(`Could not find item with ID ${ itemId }`)
  }

  res.status(200).json(target)
}

export const getAll = async (req: Request, res: Response) => {
  res.status(200).json(dummyCollection)
}

export const createOne = async (req: Request, res: Response) => {
  const newDummy = {
    id: dummyCollection[dummyCollection.length - 1].id + 1,
    uid: req.body.uid,
    title: req.body.title,
  }

  dummyCollection.push(newDummy)
  res.status(201).json(newDummy)
}

export const updateOne = async (req: Request, res: Response) => {
  const itemId = parseInt(req.params.itemId)
  const target = dummyCollection.find(el => el.id === itemId)

  if (!target) {
    throw new Error(`Could not find item with ID ${ itemId }`)
  }

  if (req.body.uid) {
    target.uid = req.body.uid
  }

  if (req.body.title) {
    target.title = req.body.title
  }

  res.status(200).json(target)
}

export const deleteOne = async (req: Request, res: Response) => {
  const itemId = parseInt(req.params.itemId)
  const targetIndex = dummyCollection.findIndex(el => el.id === itemId)

  if (targetIndex === -1) {
    throw new Error(`Could not find item with ID ${ itemId }`)
  }

  dummyCollection.splice(targetIndex, 1)
  res.status(200).json({ status: 'ok' })
}

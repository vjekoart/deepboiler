import { buildSchema } from 'graphql'
import { dummyCollection } from '#models.js'

export const schema = buildSchema(`
  type ModelDummy {
    id: Int!
    uid: String!
    title: String!
  }

  type Query {
    getAll: [ModelDummy!]!
    getById(id: Int!): ModelDummy!
  }

  type Mutation {
    create(uid: String!, title: String!): ModelDummy
    updateById(id: Int!): Boolean
    deleteById(id: Int!): Boolean
  }
`)

export const rootValue = {
  getAll: () => dummyCollection,
  getById: ({ id }: { id: number }) => {
    const target = dummyCollection.find((dummy) => dummy.id === id)

    if (!target) {
      throw new Error(`Could not find item with ID ${ id }`)
    }

    return target
  },
  create: ({ uid, title }: { uid: string, title: string }) => {
    const newDummy = {
      id: dummyCollection[dummyCollection.length - 1].id + 1,
      uid: uid,
      title: title,
    }

    dummyCollection.push(newDummy)
    return newDummy
  },
  updateById: ({ id, uid, title }: { id: number, uid?: string, title?: string }) => {
    const target = dummyCollection.find(el => el.id === id)

    if (!target) {
      throw new Error(`Could not find item with ID ${ id }`)
    }

    if (uid) {
      target.uid = uid
    }

    if (title) {
      target.title = title
    }

    return true
  },
  deleteById: ({ id }: { id: number }) => {
    const targetIndex = dummyCollection.findIndex(el => el.id === id)

    if (targetIndex === -1) {
      throw new Error(`Could not find item with ID ${ id }`)
    }

    dummyCollection.splice(targetIndex, 1)
    return true
  },
}

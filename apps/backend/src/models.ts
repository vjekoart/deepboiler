export interface ModelDummy {
  id: number
  uid: string
  title: string
}

export const dummyCollection: Array<ModelDummy> = [
  {
    id: 1,
    uid: 'first-dummy',
    title: 'First dummy',
  }, {
    id: 2,
    uid: 'second-dummy',
    title: 'Second dummy',
  }
]

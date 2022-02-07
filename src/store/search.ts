import {createStore, createEvent, createEffect, forward, sample} from 'effector'


const searchChanged = createEvent<string>()
const searchReset = createEvent()
const searchButtonClicked = createEvent()

const $search = createStore('')
  .on(searchChanged, (_oldSearch, newSearch ) => newSearch ?? null)
  .reset(searchReset)

const startSearchFx = createEffect<string, void, Error>({handler: (search: string) => console.log('Поиск начался', search)})

sample({source: $search, target: startSearchFx, clock: searchButtonClicked})
forward({from: startSearchFx, to: searchReset})

export { $search, searchChanged, searchButtonClicked }
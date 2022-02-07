import { reactive } from 'vue'
import { Character } from './models/Character'
import { generateId } from './utils/GenerateId'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  groups: [
    {
      id: generateId(),
      name: 'The Pack',
      characters: [
        new Character({ name: 'Dip', maxHp: 100, hp: 75, ac: 14 }),
        new Character({ name: 'Durpin', maxHp: 150, hp: 33, ac: 18 }),
        new Character({ name: 'Cholera', maxHp: 88, hp: 88, ac: 19 }),
        new Character({ name: 'Beryl', maxHp: 49, hp: 3, ac: 13 })
      ]
    },
    {
      id: generateId(),
      name: 'The Last',
      characters: [
        new Character({ name: 'Adrian', maxHp: 100, hp: 75, ac: 14 }),
        new Character({ name: 'Ulfrid', maxHp: 150, hp: 33, ac: 18 }),
        new Character({ name: 'Kashten', maxHp: 88, hp: 88, ac: 19 }),
      ]
    }
  ]
})

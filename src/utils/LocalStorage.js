import { AppState } from "../AppState.js"
import { Character } from "../models/Character.js"


export function saveState() {
  localStorage.setItem('SimpleStats', JSON.stringify({ groups: AppState.groups }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('SimpleStats'))
  if (data) {
    data.groups.forEach(g => {
      g.characters = g.characters.map(c => new Character(c))
    })
    AppState.groups = data.groups
  }
}
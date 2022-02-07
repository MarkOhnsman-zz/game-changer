import { AppState } from "../AppState.js"


export function saveState() {
  localStorage.setItem('SimpleStats', JSON.stringify({ AppState }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('SimpleStats'))
  AppState.groups = data.groups
}
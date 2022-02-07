import { generateId } from "../utils/GenerateId"

export class Character {
  /**
  * @param data Information about the user.
  * @param data.name The name of the user.
  * @param data.maxHp The maxHp of the user.
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.maxHp = data.maxHp
    this.hp = data.hp
    this.ac = data.ac
    // TODO add metadata
    // this.meta = data.meta 
  }
}
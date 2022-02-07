<template>
  <div class="character my-4">
    <div
      class="border rounded-pill border-primary text-center p-2 bg-white position-relative"
      :class="{
        'border-danger': status === 'danger',
        'border-warning': status === 'warning'
      }"
    >
      <p class="m-0">{{ character.name }}</p>
      <div class="d-flex justify-content-center align-items-center">
        <h1
          contenteditable
          @blur="updateHealth"
          :title="character.hp + '/' + character.maxHp + ' click to edit'"
        >{{ character.hp }}</h1>
        <i class="mdi mdi-heart-outline ms-2"></i>
      </div>
      <div class="ac">
        <h4 class="m-0 border border-dark p-1 bg-white d-inline">
          <i class="mdi mdi-shield-outline"></i>
          {{ character.ac }}
        </h4>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"
import { Character } from "../models/Character"
import { saveState } from "../utils/LocalStorage"

export default {
  props: {
    character: {
      type: Character,
      required: true
    }
  },
  setup(props) {
    return {
      status: computed(() => {
        const health = Math.floor((props.character.hp / props.character.maxHp) * 100)
        if (health > 74) {
          return 'primary'
        } else if (health > 49) {
          return 'warning'
        } else {
          return 'danger'
        }
      }),
      updateHealth() {
        props.character.hp = window.event.target.innerText
        saveState()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.character {
  width: 10rem;
}
.ac {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
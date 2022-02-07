<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 bg-white pt-3">
        <ul class="nav nav-tabs">
          <li class="nav-item" v-for="group in groups" :key="group.id">
            <span
              class="nav-link no-select selectable"
              :class="{ active: group.id === activeGroup.id }"
              aria-current="page"
              @click="activeGroup = group"
            >
              <b>{{ group.name }}</b>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link selectable text-success">
              <i class="mdi mdi-plus"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row p-3" :class="{ 'flex-column': column }">
      <div class="col-12 d-flex">
        <div class="mx-2" v-if="!locked">
          <i
            v-if="column"
            class="selectable mdi mdi-chevron-right"
            @click="column = false"
            title="rotate list"
          ></i>
          <i
            v-else
            class="selectable mdi mdi-chevron-down"
            @click="column = true"
            title="rotate list"
          ></i>
        </div>
        <div class="mx-2" v-if="!locked">
          <i class="mdi mdi-pencil"></i>
        </div>
        <div class="mx-2" v-if="!locked">
          <i class="mdi mdi-plus"></i>
        </div>
        <div class="mx-2">
          <i v-if="!locked" class="selectable mdi mdi-lock-open" @click="locked = true"></i>
          <i v-else class="selectable mdi mdi-lock" @click="locked = false"></i>
        </div>
      </div>
      <div class="col" v-for="character in activeGroup.characters" :key="character.id">
        <Character :character="character" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from "vue"
import { AppState } from "../AppState"
import { loadState } from "../utils/LocalStorage"


export default {
  name: 'Home',
  setup() {
    const column = ref(false)
    const locked = ref(false)
    const activeGroup = ref({})
    onMounted(() => {
      loadState()
    })
    watchEffect(() => {
      activeGroup.value = AppState.groups[0]
    })
    return {
      activeGroup,
      column,
      locked,
      groups: computed(() => AppState.groups)
    }
  }
}
</script>

<style scoped lang="scss">
</style>

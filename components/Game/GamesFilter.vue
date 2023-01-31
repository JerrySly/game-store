<template>
  <div class="filter">
    <div class="filter__type">
      <label class="filter__label" for="type">Types</label>
      <v-select
        v-model="filter.types"
        name="type"
        outlined
        :items="types"
        multiple
      ></v-select>
    </div>
    <div class="filter__years">
      <label class="filter__label" for="years">Create years</label>
      <v-range-slider
        :tick-labels="yearLabels"
        :value="[filter.range[0], filter.range[1]]"
        ticks="always"
        tick-size="1"
        outlined
        name="years"
        :min="yearFrom"
        :max="currentYear"
      >
        <template #thumb-label="props">
          {{ props.value }}
        </template>
      </v-range-slider>
    </div>
    <div class="filter__type">
      <label class="filter__label" for="tags">Tags</label>
      <v-select
        v-model="filter.tags"
        outlined
        name="tags"
        multiple
        :items="tags"
      ></v-select>
    </div>
    <div class="filter__actions actions">
      <v-btn class="actions__single" large>UPDATE</v-btn>
      <v-btn class="actions__single" large @click="reset">RESET</v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import _ from 'lodash'
import { ref } from 'vue'

const types = ref(['RPG', 'ACTIONS'])
const tags = ref(['COOP', 'ONLINE'])
const currentYear = new Date().getFullYear()
const yearTo = ref(currentYear)
const yearFrom = ref(1980)
const yearLabels = _.range(yearFrom, yearTo)

const filter = ref({
  types: null,
  tags: null,
  range: [yearFrom.value, yearTo.value],
})

const reset = () => {
  filter.value = {
    types: null,
    tags: null,
    range: [yearFrom.value, yearTo.value],
  }
}
</script>

<style lang="scss" scoped>
.filter {
  max-width: 400px;
  height: 100%;
  &__label {
    font-size: 18px;
    display: block;
    padding-bottom: 10px;
  }
}
.actions {
  &__single {
    width: 100%;
    &:last-child {
      margin-top: 10px;
    }
  }
}
</style>

export const state = (): FilterState => ({
  types: [],
  tags: [],
})

export const getters = {
  types: (state: FilterState) => state.types,
  tags: (state: FilterState) => state.tags,
}

export const mutations = {
  SET_TYPES( state:FilterState , value: Array<string>) {
    state.types = value;
  },
  SET_TAGS(state:FilterState , value: Array<string>) {
    state.tags = value;
  }
}
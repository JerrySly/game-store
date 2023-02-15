export const state = (): ErrorState => ({
  errorCode: 0,
})

export const mutations = {
  SET_ERROR(state: ErrorState, value: number) {
    console.log('Set')
    state.errorCode = value
    console.log(state, value);
  },
}

export const getters = {
  error: (state: ErrorState): number => state.errorCode,
}

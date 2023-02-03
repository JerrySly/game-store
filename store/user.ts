export const state = (): UserStore => ({
  user: {
    id: '1',
    login: 'Jerry',
  },
})

export const getters = {
  user: (state: UserStore) => state.user,
}

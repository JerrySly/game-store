export const state = (): UserStore => ({
  user: {
    id: '1',
    login: 'Jerry',
    src: ''
  },
})

export const getters = {
  user: (state: UserStore) => state.user,
}

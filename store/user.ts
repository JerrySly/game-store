export const state = (): UserStore => ({
  user: {
    id: '1',
  },
})
export const mutations = {
  SET_USER(state: UserStore, value) {
    state.user = value
  },
}

export const actions = {
  singUp({ commit }: { commit }, user: User) {
    this.$axios
      .post('/singUp', {
        email: user.email,
        password: user.password,
      })
      .then((data) => {
        commit('SET_USER', data)
      })
      .catch(({ response }) => {
        console.log(response)
        commit('error/SET_ERROR', response.status, { root: true })
      })
  },
}

export const getters = {
  user: (state: UserStore) => state.user,
}

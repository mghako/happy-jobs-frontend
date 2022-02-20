import authRepositories from "../../repositories/authRepository"

const state = {
    user: null
}

const getters = {
    user: state => state.user,
    authenticated: state => state.user !== null
}

const actions = {
    async login({commit}, user) {
        await authRepositories.createSession();
        const response = await authRepositories.login(user);
        commit('SET_USER', response.data)
    }
}

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    }
}


export default {
    state, getters, actions, mutations
}

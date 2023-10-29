export const state = () => ({
    news: [
        {
            uuid: "2321",
            titile: "4vdsfsdf",
            body: "vervwevr2",
            dateCreated: "",
            dateModified: ""
        }
    ]
})

export const actions = {
    async fetchNews({ state }) {
        // make request
        state.commit('pushNews')
    },
    addSeveralNews({ commit }, news) {
        commit('pushSeveralNews',news)
    },
    addNews({ commit }, news) {
        commit('pushOneNews', news)
    },
    removeNews({ commit }, uuid) {
        commit('removeNews', uuid)
    },
    updateNews({ commit }, news) {
        commit('updateNews', news)
    }
}

export const getters = {
    getNews(state) {
        return state.news
    },
    getNewsCount(state) {
        return state.news.length
    },
    getNewsByFilter(state, filter) {
        return state.news.filter(filter)
    }
}

export const mutations = {
    pushNews(state, payload) {
        state.news = payload
    },
    pushOneNews(state, payload) {
        state.news.push(payload)
    },
    pushSeveralNews(state, payload) {
        state.news = state.news.concat(payload)
    },
    removeNews(state, uuid) {
        state.news = state.news.filter((news) => news.uuid !== uuid)
    },
    updateNews(state, payload) {
        const i = state.news.findIndex(x => x.uuid === payload.uuid)
        if (i !== -1) {
            state.news.splice(i, 1, payload)
        }
    }
}
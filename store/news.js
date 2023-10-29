const state = {
    news: [
        {
            uuid: "2321",
            title: "4vdsfsdf",
            body: "vervwevr2",
            dateCreated: "",
            dateModified: ""
        }
    ]
}

const actions = {
    fetchNews: ({ commit, dispatch }, payload) => new Promise((resolve, reject) => {
        // make request
        commit('pushSeveralNews', payload)
        return resolve()
    }),
    loadNews: ({ commit, dispatch }, payload) => new Promise((resolve, reject) => {
        commit('pushSeveralNews', payload)
        return resolve()
    }),
    addSeveralNews: (store, news) => new Promise((resolve, reject) => {
        store.commit('pushSeveralNews', news)
        return resolve()
    }),
    addNews: (store, payload) => new Promise((resolve, reject) => {
        store.commit('pushOneNews', payload)
        return resolve()
    }),
    removeNews: (store, uuid) => new Promise((resolve, reject) => {
        store.commit('removeNews', uuid)
        return resolve()
    }),
    updateNews: (store, payload) => new Promise((resolve, reject) => {
        store.commit('updateNews', payload)
        return resolve()
    })
}

const getters = {
    getNews: state => state.news,
    getNewsCount: state => state.news.length,
    // getNewsByFilter: state => filter => state.news.filter(filter),
    getNewsByUuid: state => uuid => state.news.find(news => news.uuid === uuid),
    getNewsByTitle: state => title => state.news.find(news => news.title === title)
}

const mutations = {
    pushNews: (state, payload) => {
        state.news = payload
    },
    pushOneNews: (state, payload) => {
        state.news.push(payload)
    },
    pushSeveralNews: (state, payload) => {
        state.news = state.news.concat(payload)
    },
    removeNews: (state, uuid) => {
        state.news = state.news.filter((news) => news.uuid !== uuid)
    },
    updateNews: (state, payload) => {
        const i = state.news.findIndex(x => x.uuid === payload.uuid)
        if (i !== -1) {
            state.news.splice(i, 1, payload)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
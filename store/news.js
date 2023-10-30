const state = {
    news: [
        {
            uuid: "a420871a-e9a3-4f3f-bbfe-a5311ef6ab8f",
            title: "4vdsfsdf",
            body: "vervwevr2",
            dateCreated: new Date(),
            dateModified: new Date()
        },
        {
            uuid: "7b09d45e-8b68-4ffd-b32d-ddf2e11c9153",
            title: "4vdsfsdf",
            body: "vervwevr2",
            dateCreated: new Date(),
            dateModified: new Date()
        },
        {
            uuid: "168ed6c2-3cb3-4340-859d-6f3dc136b860",
            title: "4vdsfsdf",
            body: "vervwevr2",
            dateCreated: new Date(),
            dateModified: new Date()
        },
        {
            uuid: "80c46087-dae8-46a9-a333-10800b98bfca",
            title: "4vdsfsdf",
            body: "vervwevr2",
            dateCreated: new Date(),
            dateModified: new Date()
        },
        {
            uuid: "f43c905e-4479-46a6-b266-4ddbdd5467a4",
            title: "4vdsfsdf",
            body: "vervwevr2",
            dateCreated: new Date(),
            dateModified: new Date()
        }
    ]
}

const actions = {
    fetchNews: ({ commit, dispatch }, payload) => new Promise((resolve, reject) => {
        // make request
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
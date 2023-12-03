const state = {
    theme: 'light'
}


const mutations = {
    updateTheme(state, theme) {
        state.theme = theme
    }
}

export default {
    state,
    mutations
}

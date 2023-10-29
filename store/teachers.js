const state = {
    teachers: [
        {
            uuid: "1",
            fullName: "2",
            bio: ["", ""],
            divisionOrPosition: "321321",
            academicTitleAndAademicDegree: "",
            scientificSpecialty: "",
            experience: "3",
            professionalDevelopment: ["3232"],
            activities: ["3223"],
            titlesAwardsAdditionalCompetencies: "",
            publications: ["4"],
            preparedBy: "3",
            Subjects: [{ specialization: ["23213213"] }],
            Contacts: "1",
            DateCreated: "",
            DateModified: ""
        }
    ]
}

const actions = {
    fetchTeachers: ({ commit, dispatch }, payload) => new Promise((resolve, reject) => {
        //make request
        commit('pushSeveralTeachers', payload)
        return resolve()
    }),
    loadTeachers: ({ commit, dispatch }, payload) => new Promise((resolve, reject) => {
        commit('pushSeveralTeachers', payload)
        return resolve()
    }),
    addTeachers: (store, payload) => new Promise((resolve, reject) => {
        store.commit('pushSeveralTeachers', payload)
        return resolve()
    }),
    addTeacher: (store, payload) => new Promise((resolve, reject) => {
        store.commit('pushOneTeacher', payload)
        return resolve()
    }),
    removeTeacher: (store, uuid) => new Promise((resolve, reject) => {
        store.commit('removeTeacher', uuid)
        return resolve()
    }),
    updateTeacher: (store, payload) => new Promise((resolve, reject) => {
        commit('updateTeacher', payload)
        return resolve()
    })
}

const getters = {
    getTeachers: state => state.teachers,
    getTeachersCount: state => state.teachers.length,
    getTeachersByName: state => fullName => state.teachers.find(teacher => teacher.fullName === fullName),
    getTeachersByUuid: state => uuid => state.teachers.find(teacher => teacher.uuid === uuid)
    // getTeachersByFilter: state => state.teachers.filter(filter)
}

const mutations = {
    pushTeacher: (state, payload) => {
        state.teachers = payload
    },
    pushSeveralTeachers: (state, teachers) => {
        state.teachers = state.teachers.concat(teachers)
    },
    pushOneTeacher: (state, teacher) => {
        state.teachers.push(teacher)
    },
    removeTeacher: (state, uuid) => {
        state.teachers = state.teachers.filter((teacher) => teacher.uuid !== uuid)
    },
    updateTeacher: (state, payload) => {
        const i = state.teachers.findIndex(x => x.uuid === payload.uuid)
        if (i !== -1) {
            state.teachers.splice(i, 1, payload)
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
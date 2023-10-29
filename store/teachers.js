export const state = () => ({
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
})

export const actions = {
    async fetchTeachers({ commit }, teachers) {
        // make request
        commit('pushSeveralTeachers', teachers)
    },
    addTeachers({ commit }, payload) {
        commit('pushSeveralTeachers', teachers)
    },
    addTeacher({ commit }, teacher) {
        commit('pushOneTeacher', teacher)
    },
    removeTeacher({ commit }, uuid) {
        commit('removeTeacher', uuid)
    },
    updateTeacher({ commit }, teacher) {
        commit('updateTeacher', teacher)
    }
}

export const getters = {
    getTeachers(state) {
        return state.teachers
    },
    getTeachersCount(state) {
        return state.teachers.length
    },
    getNewsByFilter(state, filter) {
        return state.teachers.filter(filter)
    }
}

export const mutations = {
    pushTeacher(state, payload) {
        state.teachers = payload
    },
    pushSeveralTeachers(state, teachers) {
        state.teachers = state.teachers.concat(teachers)
    },
    pushOneTeacher(state, teacher) {
        state.teachers.push(teacher)
    },
    removeTeacher(state, uuid) {
        state.teachers = state.teachers.filter((teacher) => teacher.uuid !== uuid)
    },
    updateTeacher(state, payload) {
        const i = state.teachers.findIndex(x => x.uuid === payload.uuid)
        if (i !== -1) {
            state.teachers.splice(i, 1, payload)
        }
    }
}
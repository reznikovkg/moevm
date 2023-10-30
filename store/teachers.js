const state = {
    teachers: [
        {
            uuid: "c63285b3-999d-49df-b484-a561bf9cc4a2",
            firstName: "Светлана",
            lastName: "Болотова",
            patronymic: "Юрьевна",
            bio: [],
            divisionPosition: {
                division: "Кафедра математического обеспечения ЭВМ",
                position: "Доцент"
            },
            academicTitle: "Доцент",
            academicDegree: "Кандидат физико-математических наук",
            scientificSpecialty: "(05.13.17) Теоретические основы информатики",
            experience: {
                general: 11,
                specialty: 11
            },
            professionalDevelopment: [
                "Подготовка экспертов для работы в региональной предметной комиссии при проведении государственной итоговой аттестации по образовательным программам среднего и общего образования по предмету \"Информатика и ИКТ\" (2018г.)",
                "Использование электронного обучения и дистанционных технологий в образовательной практике вуза (2021г.)",
                "Психология делового общения и бизнес-переговоров (2021г.)",
                "Оказание первой помощи (2021г.)"
            ],
            activities: [""],
            titlesAwardsAdditionalCompetencies: "",
            publications: {
                scientific: "http://www.lib.vsu.ru/for.education.vsu.ru/vsuauthscript.php?author=%7B$Болотова%20Светлана%20Юрьевна%7D",
                educational: "http://www.lib.vsu.ru/for.education.vsu.ru/vsumetod.php?author=%7B$Болотова%20Светлана%20Юрьевна%7D"
            },
            preparedBy: {
                doctoralDegree: 0,
                candidatesOfSciences: 0
            },
            courses: [
                {
                    specialization: "Направление 01.03.02 Прикладная математика и информатика",
                    subjects: [
                        "Программирование для мобильных устройств",
                        "Языки и методы программирования"
                    ]
                },
                {
                    specialization: "Направление 02.03.02 Фундаментальная информатика и информационные технологии",
                    subjects: [
                        "Архитектура мобильных устройств",
                        "Программирование для мобильных устройств"
                    ]
                },
                {
                    specialization: "Направление 02.04.02 Фундаментальная информатика и информационные технологии",
                    subjects: [
                        "Программирование на платформе iOS",
                        "Создание мобильных приложений iOS"
                    ]
                }
            ],
            contacts: "",
            dateCreated: new Date(),
            dateModified: new Date()
        },
        {
            uuid: "24d4e64b-487f-4eb3-9d48-e92145734314",
            firstName: "Геннадий",
            lastName: "Абрамов",
            patronymic: "Владимирович",
            bio: [],
            divisionPosition: [
                {
                    division: "Кафедра математического обеспечения ЭВМ",
                    position: "Заведующий кафедрой"
                },
                {
                    division: "Кафедра информационных систем",
                    position: "Профессор"
                }
            ],
            academicTitle: "Профессор",
            academicDegree: "Доктор технических наук",
            scientificSpecialty: "(05.13.01) Системный анализ, управление и обработка информации (по отраслям)",
            experience: {
                general: 41,
                specialty: 28
            },
            professionalDevelopment: [
                "Локальные сети и интернет (2017г.)",
                "Оказание первой помощи (2018г.)",
                "Создание междисциплинарных образовательных программ в математическом моделировании и программировании для исследования актуальных проблем математики и учебного процесса (2018г.) Использование электронного обучения и дистанционных технологий в образовательной практике вуза (2021г.)",
                "Оказание первой помощи (2021г.)"
            ],
            activities: [""],
            titlesAwardsAdditionalCompetencies: "",
            publications: {
                scientific: "http://www.lib.vsu.ru/for.education.vsu.ru/vsuauthscript.php?author=%7B$Абрамов%20Геннадий%20Владимирович%7D",
                educational: "http://www.lib.vsu.ru/for.education.vsu.ru/vsumetod.php?author=%7B$Абрамов%20Геннадий%20Владимирович%7D"
            },
            preparedBy: {
                doctoralDegree: 0,
                candidatesOfSciences: 0
            },
            courses: [
                {
                    specialization: "Направление 02.03.02 Фундаментальная информатика и информационные технологии",
                    subjects: [
                        "Архитектура вычислительных систем",
                        "Компьютерные сети"
                    ]
                },
                {
                    specialization: "Направление 09.06.01 Информатика и вычислительная техника",
                    subjects: [
                        "Современные направления развития информатики и информационных технологий",
                        "Интеллектуальные системы и технологии"
                    ]
                },
                {
                    specialization: "специальность 10.05.01 Компьютерная безопасность",
                    subjects: ["Компьютерные сети"]
                }
            ],
            contacts: "",
            dateCreated: new Date(),
            dateModified: new Date()
        },
        {
            uuid: "b7a196e7-a4b2-4655-bdec-71d8aff8e002",
            firstName: "Ирина",
            lastName: "Астахова",
            patronymic: "Федоровна",
            bio: [
                {
                    date: 1950,
                    fact: "Год рождения"
                },
                {
                    date: 1972,
                    fact: "Окончание факультета прикладной математики и механики"
                },
                {
                    date: 1988,
                    fact: "Защита кандидатской диссертации"
                },
                {
                    date: 1997,
                    fact: "Защита докторской диссертации"
                },
            ],
            divisionPosition: [{
                division: "Кафедра математического обеспечения ЭВМ",
                position: "Профессор"
            },
            {
                division: "Кафедра программного обеспечения и администрирования информационных систем",
                position: "Профессор"
            }
            ],
            academicTitle: "Профессор",
            academicDegree: "Доктор технических наук",
            scientificSpecialty: "(05.13.18) Математическое моделирование, численные методы и комплексы программ",
            experience: {
                general: 51,
                specialty: 51
            },
            professionalDevelopment: [
                "Математические методы в высшей школе (2011г.) ",
                "Информационно-коммуникационные технологии в образовании (2016г.) ",
                "Оказание первой помощи (2018г.)",
                "Электронно-информационная среда вуза. Информационная безопасность. Дистанционные образовательные технологии (2018г.) ",
                "Проектирование образовательного процесса в вузе в контексте изменений законодательства, организация (2018г.) ",
                "Разработка и реализация рабочих программ дисциплин (модулей) по финансовой грамотности для студентов образовательных организаций высшего образования (2019г.) Психолого-педагогическая компетентность преподавателя вуза: теории и технологии (2021г.)",
                "Подготовка экспертов региональной предметной комиссии по математике при проведении государственной итоговой аттестации по образовательным программам среднего общего образования (2021г.)",
                "Использование электронного обучения и дистанционных технологий в образовательной практике вуза (2021г.)",
                "Оказание первой помощи (2021г.)"
            ],
            activities: "Разрабатываются информационные системы в образовании, в отраслях строительной индустрии, рассматриваются вопросы проектирования баз данных с использованием CASE технологий, их создание. Разрабатываются математические модели для информационных систем",
            titlesAwardsAdditionalCompetencies: "Соровский доцент 2000г., руководитель гранта РФФИ по Информатике (1999-2001)",
            publications: {
                scientific: "http://www.lib.vsu.ru/for.education.vsu.ru/vsuauthscript.php?author=%7B$Астахова%20Ирина%20Федоровна%7D",
                educational: "http://www.lib.vsu.ru/for.education.vsu.ru/vsumetod.php?author=%7B$Астахова%20Ирина%20Федоровна%7D"
            },
            preparedBy: {
                doctoralDegree: 0,
                candidatesOfSciences: 0
            },
            courses: [
                {
                    specialization: "Направление 01.03.02 Прикладная математика и информатика",
                    subjects: [" Базы данных"]
                },
                {
                    specialization: "Направление 02.03.02 Фундаментальная информатика и информационные технологии",
                    subjects: ["Реляционные системы управления базами данных"]
                },
                {
                    specialization: "Направление 02.04.02 Фундаментальная информатика и информационные технологии",
                    subjects: ["Объектные базы данных"]
                }
            ],
            contacts: "394006, г. Воронеж, Университетская пл., 1(0732) 208-698 ifa@mo.main.vsu.ru",
            dateCreated: new Date(),
            dateModified: new Date()
        },
        {
            uuid: "f5ca43fd-874f-4559-87a4-d55d77817a57",
            firstName: "Ирина",
            lastName: "Каширская",
            patronymic: "Ивановна",
            bio: [],
            divisionPosition: [
                {
                    division: "Кафедра математического обеспечения ЭВМ",
                    position: "Старший преподаватель"
                },
                {
                    division: "Кафедра программного обеспечения и администрирования информационных систем",
                    position: "Старший преподаватель"
                }
            ],
            academicTitle: "",
            academicDegree: "",
            scientificSpecialty: "",
            experience: {
                general: 51,
                specialty: 51
            },
            professionalDevelopment: [
                "Информационно-коммуникационные технологии в образовании (2015г.)",
                "Информационно-коммуникационные технологии в образовании (2016г.)",
                "Оказание первой помощи (2018г.)",
                "Подготовка экспертов для работы в региональной предметной комиссии при проведении государственной итоговой аттестации по образовательным программам среднего и общего образования по предмету "Информатика и ИКТ" (2018г.) ",
                "Создание междисциплинарных образовательных программ в математическом моделировании и программировании для исследования актуальных проблем математики и учебного процесса (2019г.)",
                "Создание междисциплинарных образовательных программ в математическом моделировании и программировании для исследования актуальных проблем математики и учебного процесса (2020г.)",
                "Оказание первой помощи (2021г.)",
                "Использование электронного обучения и дистанционных технологий в образовательной практике вуза (2021г.)", F
            ],
            activities: "",
            titlesAwardsAdditionalCompetencies: "",
            publications: {
                scientific: "http://www.lib.vsu.ru/for.education.vsu.ru/vsuauthscript.php?author=%7B$Каширская%20Ирина%20Ивановна%7D",
                educational: "http://www.lib.vsu.ru/for.education.vsu.ru/vsumetod.php?author=%7B$Астахова%20Ирина%20Федоровна%7D"
            },
            preparedBy: {
                doctoralDegree: 0,
                candidatesOfSciences: 0
            },
            courses: [
                {
                    specialization: "Направление 02.03.03 Математическое обеспечение и администрирование информационных систем",
                    subjects: [
                        "Основы веб-верстки",
                        "Базы данных",
                        "Интегрированные информационные технологии общего назначения",
                        "Проектирование информационных систем"
                    ]
                },
                {
                    specialization: "Направление 09.03.03 Прикладная информатика",
                    subjects: [
                        "Основы веб-верстки",
                        "Интегрированные информационные технологии общего назначения"
                    ]
                }
            ],
            contacts: "",
            dateCreated: new Date(),
            dateModified: new Date()
        },
        {
            firstName: "Олег",
            lastName: "Горбенко",
            patronymic: "Данилович",
            bio: [],
            divisionPosition: [
                {
                    division: "Кафедра математического обеспечения ЭВМ",
                    position: "Доцент"
                }
            ],
            academicTitle: "Доцент",
            academicDegree: "Доктор технических наук",
            scientificSpecialty: "(01.02.04) Механика деформируемого твердого тела",
            experience: {
                general: 51,
                specialty: 51
            },
            professionalDevelopment: [
                "Математические методы в высшей школе (2010г.)",
                "Информационно-коммуникационные технологии в образовании (2016г.)",
                "Математика и информатика (2018г.) ",
                "Подготовка экспертов для работы в региональной предметной комиссии при проведении государственной итоговой аттестации по образовательным программам среднего общего образования по предмету «Информатика и ИКТ» (2019г.)",
                "Использование электронного обучения и дистанционных технологий в образовательной практике вуза (2021г.)",
                "Оказание первой помощи (2021г.)"
            ],
            activities: "",
            titlesAwardsAdditionalCompetencies: "",
            publications: {
                scientific: "http://www.lib.vsu.ru/for.education.vsu.ru/vsuauthscript.php?author=%7B$Горбенко%20Олег%20Данилович%7D",
                educational: "http://www.lib.vsu.ru/for.education.vsu.ru/vsumetod.php?author=%7B$Горбенко%20Олег%20Данилович%7D"
            },
            preparedBy: {
                doctoralDegree: 52,
                candidatesOfSciences: 52
            },
            courses: [
                {
                    specialization: "Направление 01.03.02 Прикладная математика и информатика",
                    subjects: ["Современные Internet-технологии"]
                },
                {
                    specialization: "Направление 02.03.02 Фундаментальная информатика и информационные технологии",
                    subjects: [
                        "Информатика и программирование",
                        "Программирование web-приложений"
                    ]
                },
                {
                    specialization: "Направление 02.04.02 Фундаментальная информатика и информационные технологии",
                    subjects: [" Современные Internet-технологии"]
                },
                {
                    specialization: "Направление 09.04.03 Прикладная информатика",
                    subjects: [" Современные Internet-технологии"]
                }
            ],
            contacts: "",
            dateCreated: new Date(),
            dateModified: new Date()
        }
    ]
}

const actions = {
    fetchTeachers: ({ commit, dispatch }, payload) => new Promise((resolve, reject) => {
        //make request
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
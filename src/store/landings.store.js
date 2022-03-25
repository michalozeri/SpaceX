import { landingsService } from "../../services/landings.service.js";
export const landingStore = {
    state: {
        landings: null,
        filterBy: 'all',
    },
    getters: {
        landings({ landings }) { return landings },

        landingsToShow(state) {

            if (state.filterBy === 'all') return state.landings
            else {
                if (state.filterBy === 'true') state.filterBy = true
                else if (state.filterBy === 'false') state.filterBy = false
                const filteredLandings = state.landings.filter(landing => {
                    return landing.success === state.filterBy
                })
                return filteredLandings

            }
        },
    },

    mutations: {
        setLandings(state, { landings }) {
            state.landings = landings
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
    },
    actions: {
        async loadLandings({ commit }) {
            try {
                const landings = await landingsService.query()
                commit({ type: 'setLandings', landings })
                return landings //YESSSSS
            } catch (err) {
                console.log('Error in searchSongs action: ', err)
                throw err
            }
        }
    },
    modules: {}
}
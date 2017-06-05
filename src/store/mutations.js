import {
    HIDELOADING,
    SHOWLOADING,
    HIDEHEADER,
    SHOWHEADER,
    HIDEFOOTER,
    SHOWFOOTER
} from './type.js'
import getters from './getters'

const state = {
    loading: false,
    header: true,
    footer: true
}

const mutations = {
    [HIDELOADING]: (state) => {
        state.loading = false;
    },
    [SHOWLOADING]: (state) => {
        state.loading = true;
    },
    [HIDEHEADER]: (state) => {
        state.header = false
    },
    [SHOWHEADER]: (state) => {
        state.header = true
    },
    [HIDEFOOTER]: (state) => {
        state.footer = false
    },
    [SHOWFOOTER]: (state) => {
        state.footer = true
    }
}
export default {
    state,
    getters,
    mutations
}
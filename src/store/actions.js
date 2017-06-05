import * as types from './type'
export default {
    hideLoading: ({ commit }) => {
        commit(types.HIDELOADING)
    },
    showLoading: ({ commit }) => {
        commit(types.SHOWLOADING)
    },
    hideHeader: ({ commit }) => {
        commit(types.HIDEHEADER)
    },
    showHeader: ({ commit }) => {
        commit(types.SHOWHEADER)
    },
    hideFooter: ({ commit }) => {
        commit(types.HIDEFOOTER)
    },
    showFooter: ({ commit }) => {
        commit(types.SHOWFOOTER)
    }
}
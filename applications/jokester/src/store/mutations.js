import * as types from './mutations-types'

export const mutations = {
    [types.INIT_JOKES] (state,payload)
    {state.jokes.push(...payload)
},

    [types.ADD_JOKE] (state,payload){
        state.jokes.push(payload)
    }

}
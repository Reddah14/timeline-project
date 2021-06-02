import { uid } from 'quasar'

const state = {
	events: []
}

const mutations = {
    addEvent(state, event) {
        state.events.push(event)
    },
	updateEvent(state, event) {
        for(var i=0; i< state.events.length; i++) {
            if ( state.events[i].id == event.id ) {
                Object.assign( state.events[i], event )
            }
        }
	}
}

const actions = {
    addEvent({ commit }, event) { 
    	let newID = uid() //generate uniqueID
		event.id = newID

// now we commit the mutation
        commit('addEvent', event)
    },
	updateEvent({ commit }, event) {
		commit('updateEvent', event)
	},
	deleteEvent({ commit }, event_Id) {
		commit('deleteEvent', event_Id)
	}
}

const getters = {
    events: (state) => {
        return state.events
    }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
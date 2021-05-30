import { uid } from 'quasar'

const state = {
	events: [
		{
			id: 1,
			title: 'I was born',
			subtitle: 'February 8, 1986',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			id: 2,
			title: '1st trip home',
			subtitle: 'February 21, 1986',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			id: 3,
			title: 'London trip',
			subtitle: 'March 14, 2020',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},            
	]
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
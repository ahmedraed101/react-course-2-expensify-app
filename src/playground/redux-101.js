import { createStore } from 'redux'

// Action Generators - function that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy,
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy,
})

const setCount = ({ count }) => ({ type: 'SET', count })

const resetCount = () => ({ type: 'RESET' })

// Reducers
// 1. Reducers are pure functions (the input only depends on the inpu + dosn't change things out side the function scope).
// 2. Never change the state or action

const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy }

        case 'DECREMENT':
            return { count: state.count - action.decrementBy }

        case 'SET':
            return { count: action.count }

        case 'RESET':
            return { count: 0 }

        default:
            return state
    }
}

const store = createStore(counterReducer)

const unsbscribe = store.subscribe(() => console.log(store.getState()))
// unsbscribe() // to unsubscribe

store.dispatch(incrementCount())
store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 8 }))
store.dispatch(resetCount())
store.dispatch(setCount({ count: 37 }))

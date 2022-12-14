import expensesReducer from './../../reducers/expenses'
import expenses from './../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id }
    const state = expensesReducer(expenses, action)
    // expect(state).toEqual([...expenses.filter((ex) => ex.id !== expenses[1].id)])
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '-1' }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const action = { type: 'ADD_EXPENSE', expense: expenses[0] }
    const state = expensesReducer(undefined, action)
    expect(state).toEqual([expenses[0]])
})

test('should edit an expense', () => {
    const updates = {
        amount: 12398,
    }
    const action = { type: 'EDIT_EXPENSE', id: expenses[1].id, updates }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(updates.amount)
})

test('should not edit an expense if id not found', () => {
    const updates = {
        amount: 12398,
    }
    const action = { type: 'EDIT_EXPENSE', id: '-1', updates }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

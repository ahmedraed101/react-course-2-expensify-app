import {
    addExpense,
    removeExpense,
    editExpense,
} from './../../actions/expenses'

test('should setup remove Expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' })
})

test('should setup edit Expense action object', () => {
    const updates = {
        note: 'new note',
        amount: '234.23',
    }

    const action = editExpense('123abc', updates)
    expect(action).toEqual({ type: 'EDIT_EXPENSE', id: '123abc', updates })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Water Bill',
        note: 'no notes',
        amount: 5000,
        createdAt: 1000000,
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { ...expenseData, id: expect.any(String) },
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
        },
    })
})

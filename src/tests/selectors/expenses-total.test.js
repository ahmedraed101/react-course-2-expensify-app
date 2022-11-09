import selectExpensesTotal from './../../selectors/expenses-total'
import expenses from './../fixtures/expenses'

test('expect to return total amount', () => {
    expect(selectExpensesTotal(expenses)).toEqual(140000)
})

test('expect to return zero for empty array', () => {
    expect(selectExpensesTotal([])).toEqual(0)
})

test('expect to return the amount of the one expense', () => {
    expect(selectExpensesTotal([expenses[0]])).toEqual(expenses[0].amount)
})

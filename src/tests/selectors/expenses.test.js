import moment from 'moment'
import selectExpenses from './../../selectors/expenses'
import expenses from './../fixtures/expenses'

test('should filter be text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined,
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0),
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('sould sort by Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('sould sort by Amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})

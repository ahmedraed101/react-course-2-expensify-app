import moment from 'moment'
import {
    setTextFilter,
    setStartDate,
    setEndDate,
    sortByDate,
    sortByAmount,
} from './../../actions/filters'

test('should  generate set start date object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({ type: 'SET_START_DATE', startDate: moment(0) })
})

test('should  generate set end date object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({ type: 'SET_END_DATE', endDate: moment(0) })
})

test('should generate sort by date object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('should generate sort by amount object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('should generate set text object with text value', () => {
    const text = 'rent'
    const action = setTextFilter(text)
    expect(action).toEqual({ type: 'SET_TEXT_FILTER', text })
})

test('should generate set text object with default', () => {
    const action = setTextFilter()
    expect(action).toEqual({ type: 'SET_TEXT_FILTER', text: '' })
})

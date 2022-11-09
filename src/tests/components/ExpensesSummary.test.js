import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from './../../components/ExpensesSummary'
import expenses from './../fixtures/expenses'

test('should render message for expenses', () => {
    const [expenseCount, expensesTotal] = [2, 3400]
    const wrapper = shallow(
        <ExpensesSummary
            expenseCount={expenseCount}
            expensesTotal={expensesTotal}
        />
    )
    expect(wrapper).toMatchSnapshot()
})

test('should render message for only one expense', () => {
    const [expenseCount, expensesTotal] = [1, 290]
    const wrapper = shallow(
        <ExpensesSummary
            expenseCount={expenseCount}
            expensesTotal={expensesTotal}
        />
    )
    expect(wrapper).toMatchSnapshot()
})

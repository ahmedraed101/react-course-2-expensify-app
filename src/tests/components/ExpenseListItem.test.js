import React from 'react'
import { shallow } from 'enzyme'
import expenses from './../fixtures/expenses'
import ExpenseListItem from './../../components/ExpenseListItem'

test('should render expense list item with values', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})

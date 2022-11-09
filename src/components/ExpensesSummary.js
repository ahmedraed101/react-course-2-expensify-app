import React from 'react'
import { connect } from 'react-redux'
import expensesFilterTotal from './../selectors/expenses-total'
import selectExpenses from './../selectors/expenses'
import { formatToDollar } from './../utils/formaters'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = `expense${expenseCount !== 1 ? 's' : ''}`
    const formatedTotal = formatToDollar(expensesTotal)
    return (
        <div>
            <h2>
                Viewing {expenseCount} {expenseWord} totalling {formatedTotal}
            </h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visiableExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visiableExpenses.length,
        expensesTotal: expensesFilterTotal(visiableExpenses),
    }
}

export default connect(mapStateToProps)(ExpensesSummary)

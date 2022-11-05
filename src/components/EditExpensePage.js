import React from 'react'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from './../actions/expenses'
import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(expense)
        this.props.history.push('/')
    }

    onRemove = () => {
        this.props.removeExpense(this.props.expense.id)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                    expense={this.props.expense}
                />

                <button onClick={this.onRemove}>remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(
        (expense) => expense.id === props.match.params.id
    ),
})

const mapDispatchToProps = (dispatch) => ({
    editExpense: (expense) => dispatch(editExpense(expense.id, expense)),
    removeExpense: (id) => dispatch(removeExpense({ id })),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)

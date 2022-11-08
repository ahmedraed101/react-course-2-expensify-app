import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {
    state = {
        description: this.props.expense ? this.props.expense.description : '',
        note: this.props.expense ? this.props.expense.note : '',
        amount: this.props.expense
            ? (this.props.expense.amount / 100).toString()
            : '',
        createdAt: this.props.expense
            ? moment(this.props.expense.createdAt)
            : moment(),
        calenderFocused: false,
        error: '',
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if (!createdAt) return
        this.setState(() => ({ createdAt }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please provide a description and amount.',
            }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                id: this.props.expense ? this.props.expense.id : '',
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && (
                    <div className="error-message">
                        <p>{this.state.error}</p>
                    </div>
                )}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button type="submit">
                        {this.props.expense ? 'Edit expense' : 'Add expense'}
                    </button>
                </form>
            </div>
        )
    }
}

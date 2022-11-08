import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { formatToDollar } from './../utils/formaters'

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div className="container">
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>
                {formatToDollar(amount)}
                <br />
                {moment(createdAt).format('MMM Do, YYYY')}
                {/* MMM D, YYYY = LL */}
            </p>
        </div>
    )
}

export default ExpenseListItem

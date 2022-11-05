import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div className="container">
        <h1>info</h1>
        <p>
            The Info is: <span style={{ color: 'white' }}>{props.info}</span>
        </p>
    </div>
)

// this is the function that returns the HOC (higher order components)
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private info. Please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view the info</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(
//     <AdminInfo isAdmin={true} info="there are the details" />,
//     document.getElementById('app')
// )

ReactDOM.render(
    <AuthInfo isAuthenticated={true} info="there are the details" />,
    document.getElementById('app')
)

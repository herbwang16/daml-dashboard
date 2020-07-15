import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ReadUser } from '../../api/api';

class ProtectedRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          loading: true,
          auth: false
        }
    }

    async componentWillMount() {
        await ReadUser(localStorage.getItem('token')).then(() => this.setState({loading: false, auth: true})).catch(() => {this.setState({loading: false, auth: false})});
    }

    render() {
        const { Component, ...rest } = this.props;

        return (
        <Route {...rest} render = {(props) => (
            this.state.loading ? 
                (
                    <div>LOADING dot dot dot</div>
                ) :
                (
                    this.state.auth ? 
                    (
                        <Component {...props}/>
                    ) :
                    (
                        <Redirect to={{ pathname: '/login' }} />
                    )
                )
        )}/>
        );
    }
}

export default ProtectedRoute;
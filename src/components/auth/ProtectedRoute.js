import React from 'react';
import { Redirect } from 'react-router-dom';
import { ReadUser } from '../../api/api';

class ProtectedRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          loading: true,
          auth: false
        }
    }

    componentDidMount() {
        ReadUser(localStorage.getItem('token')).then(() => this.setState({loading: false, auth: true})).catch(() => {this.setState({loading: false, auth: false})});
    }

    render() {
        const Component = this.props.component;

        return this.state.auth ? (
            <Component />
        ) : (
            this.state.loading ? (
                <div>LOADING dot dot dot</div>
            ) : (
            <Redirect to={{ pathname: '/login' }} />
            )
        );
    }
}

export default ProtectedRoute;
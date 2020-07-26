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
        console.log(this.state)
        await ReadUser(localStorage.getItem('token')).then(() => this.setState({loading: false, auth: true})).catch(() => {this.setState({loading: false, auth: false})});
        console.log(this.state)
    }

    render() {
        const { component: Component, ...rest } = this.props;
        console.log({...rest});

        return (
        <Route {...rest}>
            {
            this.state.loading ? 
                (
                    <div>LOADING dot dot dot</div>
                ) :
                (
                    this.state.auth ? 
                    (
                        <Component/>
                    ) :
                    (
                        <Redirect to={{ pathname: '/login' }} />
                    )
                )
            }
        </Route>
        );
    }
}

export default ProtectedRoute;
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ReadUser } from '../../api/api';
import { Context } from "../context/Context";

class ProtectedRoute extends React.Component {
    static contextType = Context;

    constructor(props) {
        super(props)
        this.state = {
          loading: true,
          auth: false
        }
    }

    async componentWillMount() {
        const { context, dispatch } = this.context;
        console.log(this.state)
        await ReadUser(localStorage.getItem('token'))
            .then(res => {
                this.setState({loading: false, auth: true});
                dispatch({type: 'CHANGE PROFILE', payload: {email: res.email}});
            })
            .catch(() => {
                this.setState({loading: false, auth: false})
            });
        console.log(this.state)
    }

    render() {
        const { component: Component, ...rest } = this.props;

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
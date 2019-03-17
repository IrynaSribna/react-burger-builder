import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component { //INTERESTING it is an anonymous components
        state = {
            error: null
        }
        //we had here before componentDidMount()
        //but this method works only when childeren's componentDidMount execured
        //therefore we could not catch errors in the child component BurgerBuilder
        constructor(props) {
            super(props);
            axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            })
            axios.interceptors.response.use(res => res, error => { //res => res returns the res
                this.setState({error: error});
            })
        }

        errorConfirmedHandler = () => {this.setState({error: null})}
        
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                            modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }

    }
}

export default withErrorHandler;
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
        //we could you componentWillMount() here but thid lifecycle hook can get obsolete
        constructor(props) {
            super(props);
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => { //res => res returns the res
                this.setState({error: error});
            })
        }

        //remove inteceptors to prevent memory leaks otherwise there will be a lot of instances
        //for all components wrapped with withErrorHandler one
        //once we do not need the component wrapped with withErrorHandler, the interceptor attached to the wrapped component will be cleaned up
        componentWillUnmount() {
            console.log('Will Unmount ', this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
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
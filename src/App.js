import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  //to test componentWillUnmount in withErrorHandler component
  // state = {
  //   show: true
  // };

  componentDidMount() {
    setTimeout(() => {
      this.setState({show: false});
    }, 5000);
  }

  render() {
    return (
      <Layout>
        {/* to test componentWillUnmount in withErrorHandler component */}
        {/* {this.state.show ? <BurgerBuilder /> : null} */}
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;

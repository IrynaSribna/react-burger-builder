import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

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
        <Switch>
          <Route path="/" exact component={BurgerBuilder} /> {/* exact is needed if we do not wrap to Switch */}
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Layout>
    );
  }
}

export default App;

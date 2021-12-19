import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unSubscriptFormAuth = null;

  componentDidMount(){
    this.unSubscriptFormAuth = auth.onAuthStateChanged((user)=>{
      this.setState({currentUser: user});
      console.log(user);
    });
  }
  componentWillUnmount(){
    this.unSubscriptFormAuth();
  }
  render(){
    return(
      <div>
        <Header currentUser = { this.state.currentUser } />
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route path = '/shop' component = {ShopPage} />
          <Route path = '/signin' component = {SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
export default App;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unSubscribeFormAuth = null; //this unSubscribeFormAuth use to close subscription from the google firebase. if you want to use this class variable in that time you must need to call the this object.

  //Now call the componentlifecycle method.
  
  componentDidMount(){
    this.unSubscribeFormAuth =  auth.onAuthStateChanged( async userAuth =>{
      //Retrive data from database and store it into the application state.
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          this.setState({
            currentUser: {
              id: userRef.id,
              ...userRef.data()
            }
          }, () =>{
            console.log(this.state);
          });
        }else{
          this.state = null;
        }
  }
    )
}
  //componentWillUnmount() this life cycle method will be unSubscribe the application from the firebase.
  componentWillUnmount(){
    this.unSubscribeFormAuth();
  }
  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser} />
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
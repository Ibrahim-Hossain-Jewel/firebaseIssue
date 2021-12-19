import React from "react";
import './sign-in.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email: '',password: ''});
    }
    changeHandle = event =>{
        const {name,value} = event.target;
        //Now making dynamicly sets properties states
        this.setState({[name]: value});
    }
    render(){
        return(
            <div className = "sign-in">
                <h2>I already have an account</h2>
                <span className = "title" >Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <label> Email </label> <br />
                    <input type = "email" name  = "email" value = {this.state.email} onChange = {this.changeHandle} size = "30" /> <br /> <br />
                    <label> Password </label> <br />
                    <input type = "password" name = "password" value = {this.state.password} onChange = {this.changeHandle} size = "30" /> <br />
                    <CustomButton type = "submit" > SIGN IN </CustomButton>
                    <CustomButton onClick = { signInWithGoogle } > 
                       {' '} SIGN IN WITH GOOGLE {' '}
                    </CustomButton>
                 </form>
            </div>
        )
    }
}
export default SignIn;
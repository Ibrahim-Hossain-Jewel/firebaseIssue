import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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
    handleChange = event =>{
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
                    <FormInput 
                    label = "email"
                    type = "email"
                    name  = "email"
                    value = {this.state.email}
                    handleChange = {this.handleChange}
                    required

                    />
                    <FormInput 
                    label = "password"
                    type = "password" 
                    name = "password"
                    value = {this.state.password} 
                    handleChange = {this.handleChange}
                    required
                    />
                    <div className="button">
                        <CustomButton type = "submit" > SIGN IN </CustomButton>
                        <CustomButton onClick = { signInWithGoogle } isGoogleSign > 
                        {' '} SIGN IN WITH GOOGLE {' '}
                        </CustomButton>
                    </div>
                 </form>
            </div>
        )
    }
}
export default SignIn;

import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { login } from '../../Redux/auth-reducer';
import { maxLenghtCreator, requared } from '../../utils/validators/validators';
import Input from '../common/FormControls/FormControlsInput';



const maxLength30 = maxLenghtCreator(30)

const LoginForm = (props) => {



    return (
        <form onSubmit={props.handleSubmit}>
            <div> <Field placeholder="Email" name={"email"} component={Input} validate={[requared, maxLength30]} /> </div>
            <div><Field placeholder="Password" type="password" name={"password"} component={Input} validate={[requared, maxLength30]} /></div>
            <div><Field type="checkbox" component={Input} name={"rememberMe"} /> remember me</div>
            <div> <button>Submit</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login', })(LoginForm)






const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { login })(Login)
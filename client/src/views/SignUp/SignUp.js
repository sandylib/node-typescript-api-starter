import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Redirect, useLocation } from "react-router-dom";
import Link from '@material-ui/core/Link';
import Typography from '../../components/Typography/Typography';
import AppForm from '../../components/AppForm/AppForm';
import { email, required } from '../../form/validation';
import RFTextField from '../../form/RFTextField';
import FormButton from '../../form/FormButton';
import { withAuth } from '../../components/Authentication/Authentication'
import FormFeedback from '../../form/FormFeedback';
import request from '../../utils/request';
import { registUrl } from '../../config/url';
import {CURRENT_USER} from '../../constants/applicationConstants'

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

const deaultValues = {
  email:'',
  name:'',
  password: '',
  passwordConfirmation: ''
}

const deaultErrors = {
  email:'',
  name: '',
  password: '',
  passwordConfirmation: ''
}

function SignUp({authenticate, isAuthenticated}) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [values, setValues] = React.useState(deaultValues);
  const [errors, setErrors] = React.useState(deaultErrors);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);

  const handleChange = ({target}) => {
    const {name, value} = target;
   
    setValues({
      ...values,
      [name]: value
    });
   
  };

  const validate = () => {
    const errorsObj = required([ 'email', 'name', 'password', 'passwordConfirmation'], values);
 
    if (!errorsObj.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errorsObj.email = email(values.email, values);
      }
    }

    return errorsObj;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if( Object.keys(validationErrors).length > 0) {
   
      setErrors(validationErrors);
      return;

    }

    try {
    
      setSubmitting(true);
      const validCurrentUser = {
        email: values.email,
        name: values.name,
        password: values.password,
        passwordConfirmation: values.passwordConfirmation
      };
     
      const resp =  await request(registUrl, {
        method: 'POST',
        body: JSON.stringify({...validCurrentUser})
      });
   
      setSubmitting(false);
 
      if(resp.status === 200){
        await authenticate(values.email, values.password);

       history.push('/');
      } else {
        const error = await resp.json();
        setSubmitError(error.message);
      }
      
      
    } catch (error) {
      setSubmitting('create failed, please try it again later')
      setSubmitting(false);
    }

  
  };

 if(isAuthenticated) return <Redirect to={from} />

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/signin" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
            <form  className={classes.form} autoComplete="off" noValidate>
             <RFTextField
                autoComplete="email"
                fullWidth
                disabled={submitting}
                label="Email"
                margin="normal"
                name="email"
                error={errors.email}
                value={values.email}
                onChange={handleChange}
              />
              <RFTextField
                autoComplete="name"
                fullWidth
                disabled={submitting}
                label="Name"
                margin="normal"
                name="name"
                error={errors.name}
                value={values.name}
                onChange={handleChange}
              />
              <RFTextField
                fullWidth
                disabled={submitting}
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
                error={errors.password}
                value={values.password}
                onChange={handleChange}
              />

              <RFTextField
                fullWidth
                disabled={submitting}
                name="passwordConfirmation"
                autoComplete="current-passwordConfirmation"
                label="Password Confirmation"
                type="password"
                margin="normal"
                error={errors.passwordConfirmation}
                value={values.passwordConfirmation}
                onChange={handleChange}
              />
             
            {submitError && submitError.length > 0 && <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>}
              <FormButton
                className={classes.button}
                disabled={submitting}
                color="secondary"
                fullWidth
                onClick={handleSubmit}
              >
                {submitting  ? 'In progress…' : 'Sign Up'}
              </FormButton>
            </form>
       
      </AppForm>
    </React.Fragment>
  );
}

export default withAuth(SignUp);


import React from 'react';
import { useLocation, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '../../components/Typography/Typography';
import AppForm from '../../components/AppForm/AppForm';
import { email,required } from '../../form/validation';
import RFTextField from '../../form/RFTextField';
import FormButton from '../../form/FormButton';
import FormFeedback from '../../form/FormFeedback';

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
  email: '',
  password: ''
}

const deaultErrors = {
  email: undefined,
  password: undefined
}

function SignIn({authenticate, isAuthenticated}) {
  const location = useLocation();
  const classes = useStyles();
  const [values, setValues] = React.useState(deaultValues);
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState(deaultErrors);
  const [submitError, setSubmitError] = React.useState(false);
  const { from } = location.state || { from: { pathname: "/" } };
  const [authData, setAuthData] = React.useState({
    isLoggingIn: !isAuthenticated,
    redirectToReferrer: isAuthenticated,
    hasAuthenticationFailed: false
  })
  const handleChange = ({target}) => {
    const {name, value} = target;
   
    setValues({
      ...values,
      [name]: value
    });
   
  };

  const validate = () => {
    const validateErrors = required(['email', 'password'], values);

    if (!validateErrors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        validateErrors.email = email(values.email, values);
      }
    }

    return validateErrors;
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
      const resp =  await authenticate(values.email, values.password);
      setSubmitting(false);
 
      if(resp.status === 200){
        setAuthData({
          isLoggingIn: false,
          redirectToReferrer: true,
          hasAuthenticationFailed: false
        });
      } else {
        const error = await resp.json();
        setSubmitError(error.message);
      }
      

      
    } catch (error) {
     
      setAuthData({
        isLoggingIn: false,
        redirectToReferrer: false,
        hasAuthenticationFailed: true
      });
      setSubmitting(false);
    }

   
  };

  if (authData.redirectToReferrer) return <Redirect to={from} />;
  if(authData.isLoggingIn) {

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link href="/signup" align="center" underline="always">
              Sign Up here
            </Link>
          </Typography>
        </React.Fragment>
            <form  className={classes.root}  autoComplete="off"  noValidate>
              <RFTextField
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                disabled={submitting}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                error={errors.email}
                size="large"
                value={values.email}
              />
              <RFTextField
                fullWidth
                size="large"
                onChange={handleChange}
                disabled={submitting}
                error={errors.password}
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
                value={values.password}
              />

          {submitError ? (
            <FormFeedback className={classes.feedback} error>
              {submitError}
            </FormFeedback>
          ) : null}
           
              <FormButton
                className={classes.button}
                disabled={submitting}
                size="large"
                color="secondary"
                fullWidth
                onClick={handleSubmit}
              >
                {'Sign In'}
              </FormButton>
            </form>
      </AppForm>
    </React.Fragment>
   );
  }

  if(authData.hasAuthenticationFailed) return  (<Redirect to={'/notfound'} />);

  return <div>Loading...</div>
}

export default SignIn;
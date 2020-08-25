import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '../../components/Typography/Typography';
import AppForm from '../../components/AppForm/AppForm';
import { email,required } from '../../form/validation';// './modules/form/validation';
import RFTextField from '../../form/RFTextField';
import FormButton from '../../form/FormButton';


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

function SignIn() {
  const history = useHistory();
  const classes = useStyles();
  const [values, setValues] = React.useState(deaultValues);
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState(deaultErrors);
  const [submitError, setSubmitError] = React.useState(false);
  const handleChange = ({target}) => {
    const {name, value} = target;
   
    setValues({
      ...values,
      [name]: value
    });
   
  };

  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };


  const handleSubmit = async (e) => {

   e.preventDefault();
    const validationErrors = validate(values);
 
    if( Object.keys(validationErrors).length > 0) {
      
      setErrors(validationErrors);
      return;

    }
    
    try {
    
      setSubmitting(true);
     
      const resp = await fetch('/api/v1/login', {
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'POST',
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      })

      history.push('/');
      setSubmitting(false);
      
    } catch (error) {
      setSubmitting(error.message);
      setSubmitting(false);
    }

   
  };

  

  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
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
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}

export default SignIn;
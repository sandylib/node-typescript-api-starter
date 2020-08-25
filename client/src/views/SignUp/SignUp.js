import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '../../components/Typography/Typography';
import AppFooter from '../AppFooter/AppFooter';
import AppAppBar from '../AppAppBar/AppAppBar';
import AppForm from '../../components/AppForm/AppForm';
import { email, required } from '../../form/validation';
import RFTextField from '../../form/RFTextField';
import FormButton from '../../form/FormButton';
// import FormFeedback from './modules/form/FormFeedback';

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
  firstName:'',
  lastName:'',
  email:'',
  password: '',
  passwordConfirmation: ''
}

const deaultErrors = {
  firstName:'',
  lastName:'',
  email:'',
  password: '',
  passwordConfirmation: ''
}

function SignUp() {
  const classes = useStyles();
  const [values, setValues] = React.useState(deaultValues);
  const [errors, setErrors] = React.useState(deaultErrors);
  const [submitting, setSubmitting] = React.useState(false);

  const validate = (values) => {
    const errors = required(['firstName', 'lastName', 'email', 'password'], values);
 
    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if(validationErrors){
      return setErrors(validationErrors);
    }

    setSubmitting(true);

  
  };

  const handleChange = ({target}) => {
    const {name, value} = target;
   
    setValues({
      ...values,
      [name]: value
    });
   
  };

  return (
    <React.Fragment>
      {/* <AppAppBar /> */}
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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <RFTextField
                    onChange={handleChange}
                    autoFocus
                    disabled={submitting}
                    autoComplete="fname"
                    fullWidth
                    label="First name"
                    name="firstName"
                    error={errors.firstName}
                    value={values.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <RFTextField
                    onChange={handleChange}
                    disabled={submitting}
                    autoComplete="lname"
                    fullWidth
                    label="Last name"
                    name="lastName"
                    error={errors.lastName}
                    value={values.lastName}
                  />
                </Grid>
              </Grid>
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
             
             {/* <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback> */}
              <FormButton
                className={classes.button}
                disabled={submitting}
                color="secondary"
                fullWidth
              >
                {submitting  ? 'In progress…' : 'Sign Up'}
              </FormButton>
            </form>
       
      </AppForm>
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}

export default SignUp;


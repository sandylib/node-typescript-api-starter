import React from 'react'
import Typography from '../../components/Typography/Typography';
import AppForm from '../../components/AppForm/AppForm';
import {useHistory} from 'react-router-dom';
import Link from '@material-ui/core/Link';
export const PermissionDenied = () => {
  const history = useHistory();
  return (
    <AppForm>
      <Typography variant="h3" gutterBottom marked="center" align="center">
         you do not have permission to access this page
       </Typography>
       <Link variant="button"   onClick={()=> history.push('/')}  > Home</Link>
    </AppForm>
  )
}
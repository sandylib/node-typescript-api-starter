import React from 'react'
import Typography from '../../components/Typography/Typography';
import AppForm from '../../components/AppForm/AppForm';


export const PermissionDenied = () => {
  return (
    <AppForm>
      <Typography variant="h3" gutterBottom marked="center" align="center">
         you do not have permission to access this page
       </Typography>
    </AppForm>
  )
}
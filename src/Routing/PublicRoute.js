import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../services/token-services';

export default function PublicRoute({component, onLogin, ...props}) {
  const Component = component

  return (
    <Route 
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken() 
          ? <Redirect to={'/'} /> 
          : <Component {...componentProps} 
          onLogin = {onLogin}/>
      )} 
    />
  )
}
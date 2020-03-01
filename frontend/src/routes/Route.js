import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  // se não estiver logado e acessar uma rota privada, redireciona para tela de login
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // se ja estiver logado e acessar uma rota publica, volta para o dashboard
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // se o usuario estiver autenticado, usa o latout padrão. Senão, usa o auth
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

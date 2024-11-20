import { Auth0Provider } from "@auth0/auth0-react";
import PropTypes from "prop-types";

const Auth0ProviderWithNavigate = ({ children }) => {
  const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;
  //   const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
Auth0ProviderWithNavigate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth0ProviderWithNavigate;

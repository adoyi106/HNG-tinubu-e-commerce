import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

//eslint-disable-next-line
const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();
  const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN;

  //   const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;
  //   const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const onRedirectCallback = (appState) => {
    // history.push(appState?.returnTo || window.location.pathname);
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience="this is unique"
      scope="openid profile email"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;

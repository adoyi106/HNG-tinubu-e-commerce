//eslint-disable-next-line
const express = require("express");
// const jwt = require("express-jwt");
//eslint-disable-next-line
const { auth } = require("express-oauth2-jwt-bearer");
//eslint-disable-next-line
const jwks = require("jwks-rsa");
//eslint-disable-next-line
const axios = require("axios");
//eslint-disable-next-line
require("dotenv").config();
//eslint-disable-next-line
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

//eslint-disable-next-line
const cors = require("cors");
app.use(express.json());
app.use(cors());

// const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
//eslint-disable-next-line
const domain = process.env.VITE_REACT_APP_AUTH0_DOMAIN;
//eslint-disable-next-line
const clientSecret = process.env.VITE_REACT_APP_AUTH0_CLIENT_SECRET;

// const verifyJwt = jwt({
const verifyJwt = auth({
  // secret: jwks.expressJwtSecret({
  //   cache: true,
  //   rateLimit: true,
  //   jwksRequestsPerMinute: 5,
  //   // jwksUri: "https://dev-wzc05v2jsd6vyo5k.us.auth0.com/.well-known/jwks.json",
  //   jwksUri: `${domain}/.well-known/jwks.json`,
  // }),
  // audience: "this is unique",
  // // issuer: "https://dev-wzc05v2jsd6vyo5k.us.auth0.com/",
  // issuer: `${domain}`,
  // algorithms: ["RS256"],
  audience: "this is unique",
  issuerBaseURL: `${domain}`,
  tokenSigningAlg: "RS256",
});
// .unless({ path: ["/"] });

app.use(verifyJwt);

//get user info

async function getUserInfo(accessToken) {
  try {
    const response = await axios.get(`https://${domain}/userinfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
app.get("/signup", async (req, res) => {
  try {
    //access the token
    const accessToken = req.headers.authorization.split(" ")[1];
    const userInfo = await getUserInfo(accessToken);
    console.log("User Info:", userInfo);

    res.json({
      message: "Signup successfully",
      user: userInfo,
    });
    console.log(userInfo);
  } catch (error) {
    console.error("Signup error:", error);
    res.json({
      error: "Failed to process signup",
      details: error.message,
    });
  }
});
app.get("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("user info:", email, password);
    const response = await axios.post(`https://${domain}/oauth/token`, {
      grant_type: "password",
      username: email,
      password: password,
      client_id: `${domain}`,
      client_secret: `${clientSecret}`,
      audience: `https://${domain}/userinfo`,
      scope: "openid profile email",
    });
    const userInfo = await getUserInfo(response.data.access_token);

    //access the token
    // const accessToken = req.headers.authorization.split(" ")[1];
    // const userInfo = await getUserInfo(accessToken);
    // // console.log("User Info:", userInfo);
    res.json({
      message: "Login successfully",
      user: userInfo,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.json({
      error: "Failed to login",
      details: error.message,
    });
  }
});
//error handling
//eslint-disable-next-line
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal server error";
  res.status(status).json({
    error: true,
    message: message,
  });
});

//error
app.use((req, res, next) => {
  //eslint-disable-next-line
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
//app listen
app.listen("4000", () => console.log("Server running on port 4000"));

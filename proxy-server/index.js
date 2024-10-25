//eslint-disable-next-line
const express = require("express");
//eslint-disable-next-line
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const API_SERVICE_URL = "https://timbu-get-all-products.reavdev.workers.dev/";

//proxy-endpoint
app.use(
  "/app",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
    //eslit-disable-next-line
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader("organization_id", "31726bc4a42442f696bb93f4c5682396");
      proxyReq.setHeader("APP_ID", "AP4KKCGQCCZ6RH4");
      proxyReq.setHeader(
        "APP_KEY",
        "0f7da9ca6ef241609069d253e0420e7620240712175052322064"
      );
    },
  })
);

//start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});

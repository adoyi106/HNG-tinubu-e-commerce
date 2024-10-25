import axios from "axios";

// export const baseURL = "https://api.timbu.cloud/";
// export const baseURL = "https://timbu-get-all-products.reavdev.workers.dev//products?organization_id=31726bc4a42442f696bb93f4c5682396";
export const baseURL = "https://timbu-get-all-products.reavdev.workers.dev/products?organization_id=31726bc4a42442f696bb93f4c5682396&Appid=AP4KKCGQCCZ6RH4&Apikey=0f7da9ca6ef241609069d253e0420e7620240712175052322064"

export const timbuKey = "0f7da9ca6ef241609069d253e0420e7620240712175052322064";
export const timbuId = "AP4KKCGQCCZ6RH4";
// const organization_id = "31726bc4a42442f696bb93f4c5682396";

// const timbu = axios.create({
//   baseURL: "https://localhost:3001/api",
// });
      

const timbu = axios.create({
  baseURL: `${baseURL}`,
  // params: {
  //   organization_id,
  //   // Appid: timbuId,
  //   // Apikey: timbuKey,
  // },
  headers: {
    'Appid': timbuId,
    'Apikey': timbuKey
    // Authorization: `Bearer ${timbuKey}`,
    // Authorization: `Bearer ${timbuKey}`,
  },
});

export default timbu;

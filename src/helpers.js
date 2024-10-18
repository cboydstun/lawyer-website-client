let APIURL = "";
let serverPort = 8080;
let frontEndUrl = "lawyer-website-client-apz5-theta.vercel.app";
let backEndUrl = "https://lawyer-website-weld.vercel.app";

if (
  window.location.hostname.includes("localhost") ||
  window.location.hostname.includes("127.0.0.1")
) {
  APIURL = "http://localhost:" + serverPort;
} else if (
  window.location.hostname.includes(frontEndUrl) ||
  window.location.hostname.includes("client")
) {
  APIURL = backEndUrl;
} else if (window.location.hostname.includes("192")) {
  APIURL = "http://" + "localhost" + ":" + serverPort;
}

export default APIURL;

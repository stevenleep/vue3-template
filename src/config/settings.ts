import { Paths } from "./paths";

const defaultAppSettings = {
  sidebar: {
    enableLogo: true,
    link: Paths.Index,
    title: "Vue Admin",
    logo: "./src/assets/images/logo.png",
  },

  // monitor settings
  monitor: { enable: true },

  // HTTP API settings
  http: {
    timeout: 10000, // 10 seconds
    // retry
    retry: {
      allowedOnNetworkError: true, // retry on network error
      allowedOnTimeoutError: true, // retry on timeout error
      allowedOnServerError: true, // retry on server error (5xx)
    },
  },
};

export default defaultAppSettings;

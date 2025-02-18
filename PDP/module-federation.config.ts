export const mfConfig = {
  name: "PDP",
  filename: "remoteEntryProduct.js",
  exposes: {
    "./Product": "./src/pages/Product.tsx",
  },
  remotes: {
    Host: "Host_App@http://localhost:3000/remoteEntryHost.js",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};

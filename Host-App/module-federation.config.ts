export const mfConfig = {
  name: "Host_App",
  filename: "remoteEntryHost.js",
  exposes: {
    "./Navbar": "./src/components/Navbar.tsx",
  },
  remotes: {
    Auth: "Auth@http://localhost:3001/remoteEntry.js",
    PDP: "PDP@http://localhost:3002/remoteEntryProduct.js",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};

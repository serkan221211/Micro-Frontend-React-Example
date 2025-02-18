export const mfConfig = {
  name: "Auth",
  filename: "remoteEntry.js",
  exposes: {
    "./Login": "./src/pages/Login.tsx",
    "./Register": "./src/pages/Register.tsx",
  },
  remotes: {
    Host: "Host_App@http://localhost:3000/remoteEntryHost.js",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};

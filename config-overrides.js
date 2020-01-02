module.exports = {
  paths: (paths, env) => {
    const { appPath } = paths;

    if (env === 'production') {
      paths.appBuild = `${appPath}/new_public/build`;
    }

    // paths.appPublic = `${appPath}/test_public`;
    // paths.appHtml = `${appPath}/test_public/index.html`;

    return paths;
  },
  // devServer(configFunction) {
  //   // Return the replacement function for create-react-app to use to generate the Webpack
  //   // Development Server config. "configFunction" is the function that would normally have
  //   // been used to generate the Webpack Development server config - you can use it to create
  //   // a starting configuration to then modify instead of having to create a config from scratch.
  //   return (proxy, allowedHost) => {
  //     // if (!proxy) {
  //     //   proxy = {
  //     //     '/api': {
  //     //       target: 'localhost:3333',
  //     //     },
  //     //   };
  //     // }

  //     // Create the default config by calling configFunction with the proxy/allowedHost parameters
  //     const config = configFunction(proxy, allowedHost);

  //     // Change the https certificate options to match your certificate, using the .env file to
  //     // set the file paths & passphrase.
  //     const fs = require('fs');
  //     config.https = {
  //       key: fs.readFileSync(process.env.REACT_HTTPS_KEY, 'utf8'),
  //       cert: fs.readFileSync(process.env.REACT_HTTPS_CERT, 'utf8'),
  //       ca: fs.readFileSync(process.env.REACT_HTTPS_CA, 'utf8'),
  //       passphrase: process.env.REACT_HTTPS_PASS,
  //     };

  //     // Return your customised Webpack Development Server config.
  //     return config;
  //   };
  // },
};

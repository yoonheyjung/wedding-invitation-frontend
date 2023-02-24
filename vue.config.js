const { defineConfig } = require("@vue/cli-service");
module.exports = {
  // devServer: {
  //   proxy: {
  //     target: "http://3.35.127.36",
  //     // target: "http://127.0.0.1:5173",
  //     changeOrigin: true,
  //   },
  // },
  defineConfig: {
    pluginOptions: {
      s3Deploy: {
        registry: undefined,
        awsProfile: "default",
        overrideEndpoint: false,
        region: "us-east-1",
        bucket: "sikheyworld",
        createBucket: true,
        staticHosting: true,
        staticIndexPage: "index.html",
        staticErrorPage: "index.html",
        assetPath: "dist",
        assetMatch: "**",
        deployPath: "/",
        acl: "public-read",
        pwa: false,
        enableCloudfront: false,
        pluginVersion: "4.0.0-rc3",
        uploadConcurrency: 5,
      },
    },
  },
};

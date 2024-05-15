/// <reference path="./.sst/platform/config.d.ts" />
import { esbuildDecorators } from '@anatine/esbuild-decorators';

export default $config({
  app(input) {
    return {
      name: "my-ts-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const api = new sst.aws.ApiGatewayV2("MyApi1");
    api.route("GET /", {
      handler: "index.handler",
      nodejs: {
        esbuild: {
          plugins: [esbuildDecorators(),]
        }
      }
    });
  }
});

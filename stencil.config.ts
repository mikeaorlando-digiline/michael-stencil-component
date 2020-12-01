import { Config } from '@stencil/core';
import { readFileSync } from 'fs';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: "{{PROJECT_NAME}}",
  globalStyle: 'src/global/{{PROJECT_NAME}}.css',
  globalScript: 'src/global/{{PROJECT_NAME}}.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/'
    }
  ],
  devServer: {
    reloadStrategy: 'hmr',
    port: 3333,
    https: {
      cert: readFileSync('local.cert', 'utf8'),
      key: readFileSync('local.key', 'utf8')
    }
  }
};

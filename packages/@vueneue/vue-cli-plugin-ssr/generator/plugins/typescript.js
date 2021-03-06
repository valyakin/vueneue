module.exports = api => {
  // TypeScript support
  if (api.invoking && api.hasPlugin('@vue/cli-plugin-typescript')) {
    api.render('./typescript');

    /* eslint-disable-next-line node/no-extraneous-require */
    const convertFiles = require('@vue/cli-plugin-typescript/generator/convert');
    convertFiles(api);
  }
};

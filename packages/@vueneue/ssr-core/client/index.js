if (module.hot) module.hot.accept();

import Vue from 'vue';
import startApp from './startApp';
import errorHandler from '../utils/errorHandler';
import createContext from '../utils/createContext';
import { createApp, initApp } from '@/main';

/**
 * Vue start
 */
(async () => {
  // Create application
  const context = createContext();
  context.app = createApp(context);

  // Error handler
  Vue.config.errorHandler = (error, vm, info) => {
    errorHandler(context, { error, vm, info });
  };

  // Context variable
  Vue.prototype.$context = context;

  // Call app init
  await initApp(context);

  // Start application
  return startApp(context);
})();

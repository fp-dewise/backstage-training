import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const devexPlugin = createPlugin({
  id: 'devex',
  routes: {
    root: rootRouteRef,
  },
});

export const DevexPage = devexPlugin.provide(
  createRoutableExtension({
    name: 'DevexPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

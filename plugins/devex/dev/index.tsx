import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { devexPlugin, DevexPage } from '../src/plugin';

createDevApp()
  .registerPlugin(devexPlugin)
  .addPage({
    element: <DevexPage />,
    title: 'Root Page',
    path: '/devex'
  })
  .render();

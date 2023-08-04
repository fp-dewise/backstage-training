import { useEntity } from '@backstage/plugin-catalog-react';

export const DevexEntityContent = () => {
  const { entity } = useEntity();
  // Do something with the entity data...
};
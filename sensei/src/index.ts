import { registerPlugin } from '@capacitor/core';

import type { SenseiPlugin } from './definitions';

const Sensei = registerPlugin<SenseiPlugin>('Sensei', {
  web: () => import('./web').then(m => new m.SenseiWeb()),
});

export * from './definitions';
export { Sensei };

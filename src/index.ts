import path from 'path';
import { fileURLToPath } from 'url';
import type { Plugin } from '@ice/app/esm/types';

const plugin: Plugin = () => ({
  name: '<plugin-name>',
  setup: (pluginAPI) => { },
  runtime: path.join(path.dirname(fileURLToPath(import.meta.url)), 'runtime.js'),
});

export default plugin;

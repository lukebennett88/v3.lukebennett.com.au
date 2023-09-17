import { createReader } from '@keystatic/core/reader';

import { config, localBaseDirectory } from './keystatic.config';

export const reader = createReader(localBaseDirectory, config);

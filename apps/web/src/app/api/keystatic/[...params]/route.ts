import { makeRouteHandler } from '@keystatic/next/route-handler';

import { config, localBaseDirectory } from '~/keystatic/keystatic.config';

export const { POST, GET } = makeRouteHandler({
	config,
	localBaseDirectory,
});

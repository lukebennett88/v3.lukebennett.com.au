import { makeRouteHandler } from '@keystatic/next/route-handler';

import { config } from '~/keystatic/keystatic.config';

export const { POST, GET } = makeRouteHandler({
	config,
});

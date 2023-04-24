/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/prefer-default-export */

import { createDomain } from 'effector';

import type { Domain } from 'effector';

type CreateModelControlsConfig = { domain?: Domain };

export const createModelControls = <InitPayload = void>(
	config: CreateModelControlsConfig = {}
) => {
	const { domain = createDomain() } = config;
	const reset = domain.event();
	domain.onCreateStore((s) => s.reset(reset));
	const init = domain.event<InitPayload>();
	return { domain, reset, init };
};

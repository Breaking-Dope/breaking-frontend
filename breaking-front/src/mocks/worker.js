import { setupWorker } from 'msw';
import { handlers } from 'mocks/handlers';
import { profileHandlers } from './profileHandlers';

export const worker = setupWorker(...handlers, ...profileHandlers);

import { profileHandlers } from './profileHandlers';
import { profileSettingHandlers } from './profileSettingHandlers';
import { signInHandler } from './signInHandlers';
import { signUpHandlers } from './signUpHandlers';

export const handlers = [
  ...profileSettingHandlers,
  ...profileHandlers,
  ...signInHandler,
  ...signUpHandlers,
];

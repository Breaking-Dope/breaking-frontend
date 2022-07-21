import { profileHandlers } from 'mocks/profileHandlers';
import { profileSettingHandlers } from 'mocks/profileSettingHandlers';
import { signInHandler } from 'mocks/signInHandlers';
import { signUpHandlers } from 'mocks/signUpHandlers';

export const handlers = [
  ...profileSettingHandlers,
  ...profileHandlers,
  ...signInHandler,
  ...signUpHandlers,
];

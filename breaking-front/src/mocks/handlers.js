import { profileHandlers } from 'mocks/profileHandlers';
import { profileSettingHandlers } from 'mocks/profileSettingHandlers';
import { signInHandlers } from 'mocks/signInHandlers';
import { signUpHandlers } from 'mocks/signUpHandlers';
import { mainFeedHandlers } from 'mocks/mainFeedHandlers';

export const handlers = [
  ...profileSettingHandlers,
  ...profileHandlers,
  ...signInHandlers,
  ...signUpHandlers,
  ...mainFeedHandlers,
];

import { profileHandlers } from 'mocks/profileHandlers';
import { profileSettingHandlers } from 'mocks/profileSettingHandlers';
import { signInHandlers } from 'mocks/signInHandlers';
import { signUpHandlers } from 'mocks/signUpHandlers';
import { mainFeedHandlers } from 'mocks/mainFeedHandlers';
import { postHandlers } from 'mocks/postHandlers';
import { financialHandlers } from 'mocks/financialHandlers';

export const handlers = [
  ...profileSettingHandlers,
  ...financialHandlers,
  ...profileHandlers,
  ...postHandlers,
  ...signInHandlers,
  ...signUpHandlers,
  ...mainFeedHandlers,
];

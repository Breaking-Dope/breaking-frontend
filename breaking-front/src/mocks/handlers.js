import { profileHandlers } from 'mocks/profileHandlers';
import { financialHandlers } from 'mocks/financialHandlers';
import { profileSettingHandlers } from 'mocks/profileSettingHandlers';
import { signInHandlers } from 'mocks/signInHandlers';
import { signUpHandlers } from 'mocks/signUpHandlers';
import { mainFeedHandlers } from 'mocks/mainFeedHandlers';
import { postHandlers } from 'mocks/postHandlers';
import { postWriteHandlers } from 'mocks/postWriteHandlers';

export const handlers = [
  ...profileSettingHandlers,
  ...financialHandlers,
  ...profileHandlers,
  ...postHandlers,
  ...signInHandlers,
  ...signUpHandlers,
  ...mainFeedHandlers,
  ...postWriteHandlers,
];

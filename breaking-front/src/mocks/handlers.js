import { profileHandlers } from 'mocks/profileHandlers';
import { financialHandlers } from 'mocks/financialHandlers';
import { profileSettingHandlers } from 'mocks/profileSettingHandlers';
import { signInHandlers } from 'mocks/signInHandlers';
import { signUpHandlers } from 'mocks/signUpHandlers';
import { mainFeedHandlers } from 'mocks/mainFeedHandlers';
import { postHandlers } from 'mocks/postHandlers';
import { postWriteHandlers } from 'mocks/postWriteHandlers';
import { postEditHandlers } from 'mocks/postEditHandlers';
import { searchHandlers } from 'mocks/searchHandlers';
import { breakingMissionHandlers } from './breakingMissionHandlers';

export const handlers = [
  ...profileSettingHandlers,
  ...financialHandlers,
  ...profileHandlers,
  ...postHandlers,
  ...signInHandlers,
  ...signUpHandlers,
  ...mainFeedHandlers,
  ...postWriteHandlers,
  ...postEditHandlers,
  ...searchHandlers,
  ...breakingMissionHandlers,
];

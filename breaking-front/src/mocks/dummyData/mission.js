import { NO_POSTCOUNT_USER } from 'mocks/dummyData/users';

export const mapDummyInformation = [
  {
    missionId: 1,
    latitude: 37.57026135470516,
    longitude: 126.92378529366763,
  },
  {
    missionId: 2,
    latitude: 37.280221721596156,
    longitude: 127.52450100137139,
  },
  {
    missionId: 3,
    latitude: 37.44136688436345,
    longitude: 127.27828806923868,
  },
  {
    missionId: 4,
    latitude: 37.58652596366754,
    longitude: 126.97492168266787,
  },
  {
    missionId: 5,
    latitude: 37.55453653562958,
    longitude: 126.99981609553,
  },
  {
    missionId: 6,
    latitude: 37.55518388656961,
    longitude: 126.92926237742505,
  },
];

export const MISSION_FEED = {
  missionId: 1,
  title:
    '제보를 받습니다. 제보를 받습니다. 제보를 받습니다. 제보를 받습니다. 제보를 받습니다. 제보를 받습니다. 제보를 받습니다. 제보를 받습니다.',
  viewCount: 111,
  startDate: new Date(),
  endDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
  createdDate: new Date(),
  user: NO_POSTCOUNT_USER,
  isMyMission: false,
};

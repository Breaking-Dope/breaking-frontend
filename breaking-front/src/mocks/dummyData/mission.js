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

export const NOT_OPEN_MISSION_FEED = {
  missionId: 1,
  title: '제보를 받습니다. 아직 열리지 않은 미션',
  viewCount: 111,
  startDate: new Date(Date.now() + 24 * 60 * 6 * 1000),
  endDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
  createdDate: new Date(),
  user: NO_POSTCOUNT_USER,
  isMyMission: false,
  location: {
    address: '서울 강남구 논현동 99-10',
    longitude: 37.520980755616,
    latitude: 127.03805444127,
    region_1depth_name: '서울',
    region_2depth_name: '강남구',
  },
};

export const OPEN_MISSION_FEED = {
  missionId: 2,
  title: '제보를 받습니다. 진행중인 미션',
  viewCount: 111,
  startDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
  endDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
  createdDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
  user: NO_POSTCOUNT_USER,
  isMyMission: false,
  location: {
    address: '경기 성남시 수정구 복정동 620-2',
    longitude: 37.45041911311204,
    latitude: 127.13003213316112,
    region_1depth_name: '경기',
    region_2depth_name: '성남시',
  },
};

export const CLOSED_MISSION_FEED = {
  missionId: 3,
  title: '제보를 받습니다. 종료된 미션',
  viewCount: 111,
  startDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
  endDate: new Date(Date.now() - 24 * 60 * 6 * 1000),
  createdDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
  user: NO_POSTCOUNT_USER,
  isMyMission: false,
  location: {
    address: '서울 종로구 세종로 1',
    longitude: 37.58652596366754,
    latitude: 126.97492168266787,
    region_1depth_name: '서울',
    region_2depth_name: '종로구',
  },
};

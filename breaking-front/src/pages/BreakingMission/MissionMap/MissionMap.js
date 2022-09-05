import { mapDummyInformation } from 'mocks/dummyData/mission';
import React, { useState } from 'react';
import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import MissionMapMarker from 'pages/BreakingMission/MissionMap/components/MissionMapMarker';

const MissionMap = () => {
  const [selectedMissionId, setSelectedMissionId] = useState(1);

  return (
    <Map
      center={{
        lat: 36.2683,
        lng: 127.6358,
      }}
      isPanto={true}
      style={{
        width: '100%',
        height: `calc(100vh - 65px)`,
        borderRadius: '0px 0px 10px 10px',
        overflow: 'auto',
      }}
      level={12} // 지도의 확대 레벨
    >
      <MarkerClusterer averageCenter={true} minLevel={8}>
        {mapDummyInformation.map((mapInformation) => (
          <MissionMapMarker
            key={mapInformation.missionId}
            mapInformation={mapInformation}
            selectedMissionId={selectedMissionId}
            setSelectedMissionId={setSelectedMissionId}
          />
        ))}
      </MarkerClusterer>
    </Map>
  );
};

export default MissionMap;
